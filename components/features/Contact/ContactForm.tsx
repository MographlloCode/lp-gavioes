"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "success";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("success");
  }

  return (
    <section className="rounded-sm border border-zinc-200 bg-white p-4 sm:p-5">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <label className="flex flex-col gap-1 text-sm text-zinc-700">
          Nome completo
          <input
            required
            name="name"
            type="text"
            className="h-11 rounded-sm border border-zinc-300 bg-white px-3 text-zinc-900 outline-none transition-colors duration-200 focus:border-zinc-600"
            placeholder="Seu nome"
          />
        </label>

        <label className="flex flex-col gap-1 text-sm text-zinc-700">
          E-mail
          <input
            required
            name="email"
            type="email"
            className="h-11 rounded-sm border border-zinc-300 bg-white px-3 text-zinc-900 outline-none transition-colors duration-200 focus:border-zinc-600"
            placeholder="voce@email.com"
          />
        </label>

        <label className="flex flex-col gap-1 text-sm text-zinc-700">
          Telefone
          <input
            name="phone"
            type="tel"
            className="h-11 rounded-sm border border-zinc-300 bg-white px-3 text-zinc-900 outline-none transition-colors duration-200 focus:border-zinc-600"
            placeholder="(11) 90000-0000"
          />
        </label>

        <label className="flex flex-col gap-1 text-sm text-zinc-700">
          Assunto
          <input
            required
            name="subject"
            type="text"
            className="h-11 rounded-sm border border-zinc-300 bg-white px-3 text-zinc-900 outline-none transition-colors duration-200 focus:border-zinc-600"
            placeholder="Como podemos ajudar?"
          />
        </label>

        <label className="flex flex-col gap-1 text-sm text-zinc-700">
          Mensagem
          <textarea
            required
            name="message"
            rows={5}
            className="rounded-sm border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none transition-colors duration-200 focus:border-zinc-600"
            placeholder="Escreva sua mensagem"
          />
        </label>

        <button
          type="submit"
          className="mt-1 inline-flex h-11 items-center justify-center rounded-sm bg-zinc-900 px-5 font-helvetica-condensed text-base font-black uppercase text-white transition-colors duration-200 hover:bg-zinc-700"
        >
          Enviar contato
        </button>
      </form>

      {status === "success" ? (
        <p className="mt-3 rounded-sm border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
          Mensagem enviada com sucesso. Em breve retornaremos seu contato.
        </p>
      ) : null}
    </section>
  );
}
