import Link from "next/link";

import { legalLinks, navigationLinks, portalUrl, secondaryNavigationLinks } from "@/lib/site";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--line)] bg-white/70 py-10 backdrop-blur">
      <Container className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-md space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-green-700">Capella Ops</p>
          <p className="text-2xl font-semibold tracking-[-0.04em] text-ink">
            Sistema operativo para inventario, ventas y control operativo.
          </p>
          <p className="text-sm text-slate-600">
            Landing comercial independiente del portal interno, con programa de distribuidores y rutas legales listas
            para acompañar la operación comercial.
          </p>
        </div>

        <div className="grid gap-6 text-sm sm:grid-cols-3">
          <div className="space-y-3">
            <p className="font-semibold text-ink">Navegación</p>
            <div className="space-y-2 text-slate-600">
              <Link href="/" className="block hover:text-green-800">
                Inicio
              </Link>
              {navigationLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block hover:text-green-800">
                  {link.label}
                </Link>
              ))}
              {secondaryNavigationLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block hover:text-green-800">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="font-semibold text-ink">Legal</p>
            <div className="space-y-2 text-slate-600">
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block hover:text-green-800">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="font-semibold text-ink">Acciones</p>
            <div className="space-y-2 text-slate-600">
              <Link href="/demo" className="block hover:text-green-800">
                Solicitar demo
              </Link>
              <Link href={portalUrl} className="block hover:text-green-800" target="_blank" rel="noreferrer">
                Entrar al portal
              </Link>
              <span className="block">contacto@capellaops.com</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
