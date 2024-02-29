"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getNextMeeting } from "@/util";

function Nav() {
  const [current, setCurrent] = useState();

  const steps = [
    {
      name: "Encontro 1",
      href: "/fe-e-trabalho/1-2",
      status:
        current == "/fe-e-trabalho/1-2" || current == "/"
          ? "current"
          : "upcoming",
    },
    {
      name: "Encontro 2",
      href: "/fe-e-trabalho/3-4",
      status: current == "/fe-e-trabalho/3-4" ? "current" : "upcoming",
    },
    {
      name: "Encontro 3",
      href: "/fe-e-trabalho/5-6",
      status: current == "/fe-e-trabalho/5-6" ? "current" : "upcoming",
    },
    {
      name: "Encontro 4",
      href: "/fe-e-trabalho/7-8",
      status: current == "/fe-e-trabalho/7-8" ? "current" : "upcoming",
    },
    {
      name: "Encontro 5",
      href: "/fe-e-trabalho/9-10",
      status: current == "/fe-e-trabalho/9-10" ? "current" : "upcoming",
    },
    {
      name: "Encontro 6",
      href: "/fe-e-trabalho/11-12",
      status: current == "/fe-e-trabalho/11-12" ? "current" : "upcoming",
    },
  ];

  useEffect(() => {
    setCurrent(window.location.pathname);
  }, []);

  return (
    <nav
      className="flex flex-col items-center justify-center my-4"
      aria-label="Navigation"
    >
      <p className="text-sm font-medium">
        Encontro {steps.findIndex((step) => step.status === "current") + 1} de{" "}
        {steps.length}
      </p>
      <ol role="list" className="mt-2 flex items-center space-x-5">
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
  const [nextMeetingId, nextMeetingTime, nextMeetingTimeLocale] =
    getNextMeeting();
  return (
    <>
      <p>Clube do Livro: Como Integrar Fé e Trabalho</p>

      <Image
        src="/feetrabalho.jpg"
        width={100}
        height={100}
        className="mb-2"
        alt="Capa de Livro com fundo vermelho, nome do autor Timothy Keller e título: Como Integrar Fé e Trabalho"
      />

      <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4">
        <div className="flex">
          <div className="ml-3">
            <div className=" text-sm text-yellow-700">
              Próxima reunião:{" "}
              <span className="font-medium text-yellow-700 hover:text-yellow-600">
                {nextMeetingTimeLocale}
              </span>
              <p>
                Entre no nosso grupo do{" "}
                <a
                  className="underline"
                  href="https://chat.whatsapp.com/EaMZU7k2Iby95uVMKILwx6"
                >
                  WhatsApp
                </a>{" "}
                para mais informações
              </p>
            </div>
          </div>
        </div>
      </div>

      <Nav />
    </>
  );
}
