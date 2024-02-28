"use client";
import Image from "next/image";

const pathname = window.location.pathname;
const steps = [
  { name: "Encontro 1", href: "/fe-e-trabalho/1-2", status: pathname == "/fe-e-trabalho/1-2" ? "current" : "upcoming" },
  { name: "Encontro 2", href: "/fe-e-trabalho/3-4", status: pathname == "/fe-e-trabalho/3-4" ? "current" : "upcoming" },
  { name: "Encontro 3", href: "/fe-e-trabalho/5-6", status: pathname == "/fe-e-trabalho/5-6" ? "current" : "upcoming" },
  { name: "Encontro 4", href: "/fe-e-trabalho/7-8", status: pathname == "/fe-e-trabalho/7-8" ? "current" : "upcoming" },
  { name: "Encontro 5", href: "/fe-e-trabalho/9-10", status: pathname == "/fe-e-trabalho/9-10" ? "current" : "upcoming" },
  { name: "Encontro 6", href: "/fe-e-trabalho/11-12", status: pathname == "/fe-e-trabalho/11-12" ? "current" : "upcoming" },
];

function Nav() {
  return (
    <nav
      className="flex items-center justify-center my-4"
      aria-label="Progress"
    >
      <p className="text-sm font-medium">
        Encontro {steps.findIndex((step) => step.status === "current") + 1} de{" "}
        {steps.length}
      </p>
      <ol role="list" className="ml-8 flex items-center space-x-5">
        {steps.map((step) => (
          <li key={step.name}>
            {step.status === "complete" ? (
              <a
                href={step.href}
                className="block h-2.5 w-2.5 rounded-full bg-gray-500 hover:bg-gray-900"
              >
                <span className="sr-only">{step.name}</span>
              </a>
            ) : step.status === "current" ? (
              <a
                href={step.href}
                className="relative flex items-center justify-center"
                aria-current="step"
              >
                <span className="absolute flex h-5 w-5 p-px" aria-hidden="true">
                  <span className="h-full w-full rounded-full bg-red-600" />
                </span>
                <span
                  className="relative block h-2.5 w-2.5 rounded-full bg-red-600"
                  aria-hidden="true"
                />
                <span className="sr-only">{step.name}</span>
              </a>
            ) : (
              <a
                href={step.href}
                className="block h-2.5 w-2.5 rounded-full bg-gray-500 hover:bg-gray-400"
              >
                <span className="sr-only">{step.name}</span>
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Header() {
  return (
    <>
      <p>Clube do Livro: Como Integrar Fé e Trabalho</p>

      <Image
        src="/feetrabalho.jpg"
        width={100}
        height={100}
        className="mb-8"
        alt="Capa de Livro com fundo vermelho, nome do autor Timothy Keller e título: Como Integrar Fé e Trabalho"
      />

      <Nav />
    </>
  );
}
