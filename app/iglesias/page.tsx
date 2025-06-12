import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { zonas } from "@/data";
import IglesiaCards from "./_components/IglesiaCards";

const page = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <main className="pt-20 px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-8 bg-slate-50">
          <div className="layout-content-container flex flex-col max-w-5xl flex-1">
            <div className="flex flex-wrap justify-between items-center gap-4 p-4 mb-6">
              <div className="flex flex-col gap-2">
                <h1 className="text-[var(--text-primary)] tracking-tight text-4xl font-bold leading-tight">
                  Zonas &amp; Iglesias
                </h1>
                <p className="text-[var(--text-secondary)] text-base font-normal leading-normal">
                  Explora las diferentes zonas y encuentra una iglesia cerca de
                  ti.
                </p>
              </div>
            </div>
            <Tabs defaultValue={zonas[0].name}>
              <TabsList className="flex border-b border-[var(--border-light)] px-4 gap-6 sm:gap-8">
                {zonas.map((zona) => (
                  <TabsTrigger
                    key={zona.name}
                    value={zona.name}
                    className="cursor-pointer tab-link flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[var(--text-secondary)] pb-[13px] pt-4 text-sm font-semibold leading-normal tracking-[0.015em] transition-all duration-200 data-[state=active]:border-b-[var(--primary-color)] data-[state=active]:text-[var(--primary-color)]"
                  >
                    {zona.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              {zonas.map((zona) => (
                <TabsContent value={zona.name}>
                  <h2 className="text-[var(--text-primary)] text-2xl font-bold leading-tight tracking-[-0.015em] px-4 pb-4 pt-6">
                    {zona.name}
                  </h2>
                  <IglesiaCards iglesias={zona.iglesias} />
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default page;
