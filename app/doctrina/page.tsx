import { doctrina } from "@/data";
import React from "react";
import DoctrinaCard from "./_components/doctrinaCard";

const page = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <main className="pt-20 px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-10">
          <div className="layout-content-container flex flex-col max-w-5xl flex-1 gap-8">
            <div className="text-center">
              <h1 className="text-[var(--secondary-color)] tracking-tight text-4xl sm:text-5xl font-bold leading-tight">
                Nuestra Doctrina
              </h1>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                Descubra los principios fundamentales de nuestra fe, basados en
                la Santa Biblia.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {doctrina.map((doctrina) => (
                <DoctrinaCard key={doctrina.id} {...doctrina} />
              ))}
            </div>
            <div className="mt-12">
              <h2 className="text-[var(--secondary-color)] text-3xl font-bold leading-tight tracking-tight text-center mb-8">
                Materiales Descargables
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <a className="download-card" href="#">
                  <svg
                    fill="currentColor"
                    height="48px"
                    viewBox="0 0 256 256"
                    width="48px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-42.34-77.66a8,8,0,0,1-11.32,11.32L136,139.31V184a8,8,0,0,1-16,0V139.31l-10.34,10.35a8,8,0,0,1-11.32-11.32l24-24a8,8,0,0,1,11.32,0Z"></path>
                  </svg>
                  <h3 className="text-[var(--secondary-color)] text-lg font-semibold leading-tight">
                    Folleto de Doctrina
                  </h3>
                  <p className="text-slate-500 text-sm">
                    Un resumen conciso de nuestras creencias principales.
                  </p>
                  <span className="mt-2 text-sm font-medium text-[var(--primary-color)] hover:underline">
                    Descargar PDF
                  </span>
                </a>
                <a className="download-card" href="#">
                  <svg
                    fill="currentColor"
                    height="48px"
                    viewBox="0 0 256 256"
                    width="48px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-42.34-77.66a8,8,0,0,1-11.32,11.32L136,139.31V184a8,8,0,0,1-16,0V139.31l-10.34,10.35a8,8,0,0,1-11.32-11.32l24-24a8,8,0,0,1,11.32,0Z"></path>
                  </svg>
                  <h3 className="text-[var(--secondary-color)] text-lg font-semibold leading-tight">
                    Creencias Fundamentales (PDF)
                  </h3>
                  <p className="text-slate-500 text-sm">
                    Un documento detallado sobre la base de nuestra fe.
                  </p>
                  <span className="mt-2 text-sm font-medium text-[var(--primary-color)] hover:underline">
                    Descargar PDF
                  </span>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default page;
