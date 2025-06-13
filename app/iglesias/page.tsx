import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { zonas } from "@/data";
import IglesiaCards from "./_components/IglesiaCards";

const page = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <main
          className="flex-1"
          style={{
            backgroundColor: "var(--secondary-color)",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="container mx-auto px-6 py-20 relative">
            <div className="text-center mb-12">
              <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                Zonas &amp; Iglesias
              </h1>
              <div className="w-full flex items-center justify-center mt-4 mb-8">
                <div className="h-1 w-30 bg-[var(--primary-color)] rounded-full"></div>
              </div>
              <p className="text-gray-200 text-lg max-w-2xl mx-auto">
                Explora las diferentes zonas y encuentra una iglesia cerca de
                ti.
              </p>
            </div>
            <Tabs defaultValue={zonas[2].name} className="w-full">
              <div className="w-full overflow-x-auto">
                <TabsList className="inline-flex justify-start min-w-full border-b border-gray-600 px-2 sm:px-4 gap-3 sm:gap-6 md:gap-8">
                  {zonas.map((zona) => (
                    <TabsTrigger
                      key={zona.name}
                      value={zona.name}
                      className="cursor-pointer tab-link flex-none flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-gray-200 pb-2 sm:pb-[13px] pt-2 sm:pt-4 text-xs sm:text-sm font-semibold leading-normal tracking-[0.015em] transition-all duration-200 data-[state=active]:border-b-[var(--primary-color)] data-[state=active]:text-[var(--primary-color)] whitespace-nowrap"
                    >
                      {zona.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              {zonas.map((zona) => (
                <TabsContent key={zona.name} value={zona.name}>
                  <h2 className="text-white text-xl sm:text-2xl font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-3 sm:pb-4 pt-4 sm:pt-6">
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
