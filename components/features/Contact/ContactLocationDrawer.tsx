"use client";

import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

import { ContactMapEmbed } from "./ContactMapEmbed";
import type { ContactLocation } from "./types";

type ContactLocationDrawerProps = {
  location: ContactLocation;
};

export function ContactLocationDrawer({ location }: ContactLocationDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="overflow-hidden rounded-sm border border-zinc-300 bg-white">
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition-colors duration-200 hover:bg-zinc-100"
        aria-expanded={isOpen}
      >
        <span className="font-helvetica-condensed text-xl font-black uppercase text-zinc-950">
          {location.name}
        </span>
        <BiChevronDown
          aria-hidden="true"
          className={`text-zinc-700 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          size={22}
        />
      </button>

      {isOpen ? (
        <div className="flex flex-col gap-4 border-t border-zinc-200 px-4 py-4">
          <div className="grid grid-cols-1 gap-x-4 gap-y-2 text-sm text-zinc-700 sm:grid-cols-2">
            <p>
              <span className="font-semibold text-zinc-900">Endereço:</span>{" "}
              {location.address}
            </p>
            <p>
              <span className="font-semibold text-zinc-900">Telefone:</span>{" "}
              {location.phone ?? "Não informado"}
            </p>
            {location.neighborhood ? (
              <p>
                <span className="font-semibold text-zinc-900">Bairro:</span>{" "}
                {location.neighborhood}
              </p>
            ) : null}
            {location.zipCode ? (
              <p>
                <span className="font-semibold text-zinc-900">CEP:</span>{" "}
                {location.zipCode}
              </p>
            ) : null}
            {location.city ? (
              <p>
                <span className="font-semibold text-zinc-900">Cidade:</span>{" "}
                {location.city}
              </p>
            ) : null}
            {location.foundation ? (
              <p>
                <span className="font-semibold text-zinc-900">Fundação:</span>{" "}
                {location.foundation}
              </p>
            ) : null}
          </div>

          <ContactMapEmbed
            query={location.mapQuery}
            title={`Mapa da unidade ${location.name}`}
          />
        </div>
      ) : null}
    </article>
  );
}
