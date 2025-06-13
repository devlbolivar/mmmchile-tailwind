"use client";
import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import InstagramEmbed from "./InstagramEmbed";

const Invitation = () => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <section className="py-10 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">
          Invitación
        </h2>
        <div className="w-full flex items-center justify-center mb-12">
          <div className="h-1 w-64 bg-[var(--primary-color)] rounded-full"></div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden md:flex items-center gap-8 p-8">
          <div className="w-full md:w-1/2 h-110 md:h-[500px] rounded-lg overflow-hidden mb-6 md:mb-0">
            <InstagramEmbed />
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Invitación a la Confraternidad Nacional
            </h3>
            <p className="text-gray-200 text-base leading-relaxed mb-6">
              El Pastor Gerardo Martínez nos invita a participar en la
              Confraternidad Nacional 2025, un evento trascendental que
              fortalecerá nuestra fe y unidad como iglesia. Este encuentro
              espiritual será una oportunidad única para crecer en comunión,
              recibir enseñanza bíblica sólida y experimentar un avivamiento que
              transformará nuestras vidas y ministerios. Juntos, buscaremos la
              dirección del Espíritu Santo para avanzar en la misión que Dios
              nos ha encomendado.
            </p>
            <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
              <AlertDialogContent className="max-w-3xl bg-[var(--secondary-color)]/95 backdrop-blur-sm border border-[var(--primary-color)]/30 shadow-xl">
                <div className="absolute right-4 top-4">
                  <AlertDialogCancel className=" h-15 w-15 px-10 bg-transparent border-0 hover:bg-transparent">
                    <X className=" h-10 w-10 text-gray-400 hover:text-white transition-colors" />
                  </AlertDialogCancel>
                </div>
                <AlertDialogHeader>
                  <AlertDialogTitle className="w-[85%] text-2xl font-bold text-center text-white">
                    Confraternidad Nacional 2025
                  </AlertDialogTitle>
                  <AlertDialogDescription className="text-center">
                    <div className="mt-6">
                      <Image
                        src="/images/portada_confra.PNG"
                        alt="Confraternidad Nacional 2025"
                        className="w-full h-auto rounded-lg mb-6 shadow-lg"
                        width={500}
                        height={500}
                      />

                      <p className="text-gray-200 text-lg">
                        Te invitamos a ser parte de este gran evento que
                        transformará tu vida espiritual. Una oportunidad única
                        para crecer en la fe y fortalecer tu relación con Dios.
                      </p>
                    </div>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="mt-6">
                  <AlertDialogCancel className="cursor-pointer bg-gray-700 hover:bg-gray-600 text-white border-gray-600">
                    Cerrar
                  </AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invitation;
