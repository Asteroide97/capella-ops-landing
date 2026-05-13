"use client";

import Link from "next/link";
import { useState } from "react";

import { navigationLinks, portalUrl, secondaryNavigationLinks } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const mobileLinks = [...navigationLinks, ...secondaryNavigationLinks];

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-[rgba(248,251,248,0.8)] backdrop-blur-xl">
      <Container className="flex min-h-[78px] items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Capella Ops">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-pine text-sm font-semibold uppercase tracking-[0.18em] text-white">
            CO
          </span>
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-green-800">Capella</p>
            <p className="text-lg font-semibold tracking-[-0.04em] text-ink">Ops</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-[color:var(--line)] bg-white/70 px-2 py-2 lg:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-green-50 hover:text-green-800"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          {secondaryNavigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-green-800"
            >
              {link.label}
            </Link>
          ))}
          <ButtonLink href={portalUrl} variant="secondary" target="_blank" rel="noreferrer">
            Entrar al portal
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[color:var(--line)] bg-white/80 lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-label="Abrir navegación"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-ink" />
            <span className="block h-0.5 w-5 rounded-full bg-ink" />
            <span className="block h-0.5 w-5 rounded-full bg-ink" />
          </div>
        </button>
      </Container>

      {isOpen ? (
        <div className="border-t border-[color:var(--line)] bg-white/95 lg:hidden">
          <Container className="flex flex-col gap-2 py-4">
            {mobileLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-green-50 hover:text-green-800"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink href={portalUrl} variant="primary" target="_blank" rel="noreferrer">
              Entrar al portal
            </ButtonLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
