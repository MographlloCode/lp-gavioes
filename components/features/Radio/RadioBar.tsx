"use client";

import { RadioPlayPause } from "./RadioPlayPause";
import RadioVolumeSettings from "./RadioVolumeSettings";
import { RadioSoundHighlights } from "./RadioSoundHighlights";
import { useEffect, useMemo, useRef, useState } from "react";

type PlaybackPreference = "playing" | "paused";

const DEFAULT_VOLUME = 0.35;
const RADIO_PLAYBACK_PREFERENCE_KEY = "gavioes:radio:playback-preference";
const RADIO_VOLUME_PREFERENCE_KEY = "gavioes:radio:volume";

const clampVolume = (value: number) => Math.max(0, Math.min(value, 1));

export function RadioBar() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const hasInitializedPlaybackRef = useRef(false);
  const lastVolumeRef = useRef(DEFAULT_VOLUME);

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(DEFAULT_VOLUME);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackPreference, setPlaybackPreference] = useState<PlaybackPreference>("playing");
  const [hasLoadedPreferences, setHasLoadedPreferences] = useState(false);
  const [levels, setLevels] = useState<number[]>(() => Array.from({ length: 10 }, () => 0.25));

  const barCount = 10;

  const normalizedLevels = useMemo(() => {
    if (levels.length === barCount) return levels;
    if (levels.length > barCount) return levels.slice(0, barCount);
    return [...levels, ...Array.from({ length: barCount - levels.length }, () => 0)];
  }, [levels]);

  const setupAudioAnalyzer = () => {
    const audio = audioRef.current;
    if (!audio || analyserRef.current) return;

    const AudioContextConstructor =
      window.AudioContext ||
      (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;

    if (!AudioContextConstructor) return;

    const context = new AudioContextConstructor();
    const analyser = context.createAnalyser();
    analyser.fftSize = 256;
    analyser.smoothingTimeConstant = 0.8;

    const source = context.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(context.destination);

    audioContextRef.current = context;
    analyserRef.current = analyser;
    sourceRef.current = source;
  };

  const syncPlaybackState = () => {
    const audio = audioRef.current;
    if (!audio) return;
    setIsPlaying(!audio.paused && !audio.ended);
  };

  const handleTogglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audioContextRef.current) {
      setupAudioAnalyzer();
    }

    if (audioContextRef.current?.state === "suspended") {
      await audioContextRef.current.resume();
    }

    if (audio.paused) {
      setPlaybackPreference("playing");
      try {
        await audio.play();
      } catch {
        setIsPlaying(false);
      }
    } else {
      setPlaybackPreference("paused");
      audio.pause();
    }
  };

  const handleVolumeChange = (nextVolume: number) => {
    const safe = clampVolume(nextVolume);
    setVolume(safe);
    setIsMuted(safe === 0);
    if (safe > 0) {
      lastVolumeRef.current = safe;
    }
  };

  const handleToggleMute = () => {
    if (isMuted || volume === 0) {
      const restoredVolume = Math.max(lastVolumeRef.current, 0.2);
      setIsMuted(false);
      setVolume(restoredVolume);
      return;
    }

    if (volume > 0) {
      lastVolumeRef.current = volume;
    }
    setIsMuted(true);
  };

  useEffect(() => {
    try {
      const storedPlaybackPreference = window.localStorage.getItem(
        RADIO_PLAYBACK_PREFERENCE_KEY
      );
      if (
        storedPlaybackPreference === "playing" ||
        storedPlaybackPreference === "paused"
      ) {
        setPlaybackPreference(storedPlaybackPreference);
      }

      const storedVolume = window.localStorage.getItem(
        RADIO_VOLUME_PREFERENCE_KEY
      );
      if (storedVolume !== null) {
        const parsed = Number(storedVolume);
        if (Number.isFinite(parsed)) {
          const safeVolume = clampVolume(parsed);
          setVolume(safeVolume);
          setIsMuted(safeVolume === 0);
          if (safeVolume > 0) {
            lastVolumeRef.current = safeVolume;
          }
        }
      }
    } catch {
      // Ignore storage read errors (private mode / blocked storage).
    } finally {
      setHasLoadedPreferences(true);
    }
  }, []);

  useEffect(() => {
    if (!hasLoadedPreferences) return;

    try {
      window.localStorage.setItem(
        RADIO_PLAYBACK_PREFERENCE_KEY,
        playbackPreference
      );
    } catch {
      // Ignore storage write errors (private mode / blocked storage).
    }
  }, [playbackPreference, hasLoadedPreferences]);

  useEffect(() => {
    if (!hasLoadedPreferences) return;

    try {
      window.localStorage.setItem(RADIO_VOLUME_PREFERENCE_KEY, String(volume));
    } catch {
      // Ignore storage write errors (private mode / blocked storage).
    }
  }, [volume, hasLoadedPreferences]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.preload = "auto";
    audio.volume = volume;
    audio.muted = isMuted;
  }, [volume, isMuted]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  useEffect(() => {
    if (!hasLoadedPreferences || hasInitializedPlaybackRef.current) {
      return;
    }

    hasInitializedPlaybackRef.current = true;

    const audio = audioRef.current;
    if (!audio) return;

    if (playbackPreference === "paused") {
      syncPlaybackState();
      return;
    }

    const startPlayback = async () => {
      if (!audioContextRef.current) {
        setupAudioAnalyzer();
      }

      try {
        await audio.play();
      } catch {
        setIsPlaying(false);
      } finally {
        syncPlaybackState();
      }
    };

    startPlayback();
  }, [hasLoadedPreferences, playbackPreference]);

  useEffect(() => {
    const tick = () => {
      const analyser = analyserRef.current;
      if (!analyser) {
        animationFrameRef.current = window.requestAnimationFrame(tick);
        return;
      }

      const frequencies = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(frequencies);

      const chunkSize = Math.floor(frequencies.length / barCount);
      const next = Array.from({ length: barCount }, (_, index) => {
        const start = index * chunkSize;
        const end = index === barCount - 1 ? frequencies.length : start + chunkSize;
        let sum = 0;
        for (let position = start; position < end; position += 1) {
          sum += frequencies[position];
        }
        const average = end > start ? sum / (end - start) : 0;
        return average / 255;
      });

      setLevels((prev) =>
        next.map((value, index) => {
          const current = prev[index] ?? 0;
          return current * 0.35 + value * 0.65;
        })
      );

      animationFrameRef.current = window.requestAnimationFrame(tick);
    };

    animationFrameRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    return () => {
      if (sourceRef.current) {
        sourceRef.current.disconnect();
      }
      if (analyserRef.current) {
        analyserRef.current.disconnect();
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  return (
    <section className="bg-zinc-900/95 w-screen flex items-center justify-center gap-8 px-3 py-2 text-xs backdrop-blur-xs">
      <audio ref={audioRef} src="/enredo_gavioes_2026.m4a" loop />

      <div className="flex items-center justify-center gap-2 shrink-0 mt-1">
        <RadioPlayPause isPlaying={isPlaying} onToggle={handleTogglePlay} />
        <RadioVolumeSettings
          volume={volume}
          isMuted={isMuted}
          onToggleMute={handleToggleMute}
          onVolumeChange={handleVolumeChange}
        />
      </div>

      <h1 className="font-bold font-helvetica-condensed uppercase leading-none tracking-wide text-[13px] sm:text-base whitespace-nowrap mt-2">
        Radio Livre Gaviões
      </h1>

      <div className="shrink-0">
        <RadioSoundHighlights levels={normalizedLevels} isActive={isPlaying} />
      </div>
    </section>
  );
}
