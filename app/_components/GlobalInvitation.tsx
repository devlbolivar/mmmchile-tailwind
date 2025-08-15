"use client";
import React, { useState, useEffect } from "react";
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

const GlobalInvitation = () => {
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    // Solo ejecutar en el cliente
    if (typeof window === "undefined" || typeof sessionStorage === "undefined")
      return;

    // Verificar si el usuario ya ha visto el diálogo en esta sesión
    const hasSeenDialog = sessionStorage.getItem("hasSeenInvitationDialog");

    if (!hasSeenDialog) {
      // Mostrar el diálogo después de un breve retraso
      const timer = setTimeout(() => {
        setShowDialog(true);
        // Marcar que el usuario ha visto el diálogo
        sessionStorage.setItem("hasSeenInvitationDialog", "true");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
      <AlertDialogContent className="max-w-3xl bg-[var(--secondary-color)]/95 backdrop-blur-sm border border-[var(--primary-color)]/30 shadow-xl">
        <div className="absolute right-4 top-4">
          <AlertDialogCancel className="h-15 w-15 px-10 bg-transparent border-0 hover:bg-transparent">
            <X className="h-10 w-10 text-gray-400 hover:text-white transition-colors" />
          </AlertDialogCancel>
        </div>
        <AlertDialogHeader>
          <AlertDialogTitle className="w-[85%] text-2xl font-bold text-center text-white">
            Confraternidad Nacional 2025
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            <div className="mt-6">
              <Image
                src="/images/portada_confra.png"
                alt="Confraternidad Nacional 2025"
                className="w-full h-auto rounded-lg mb-6 shadow-lg"
                width={500}
                height={500}
              />

              <p className="text-gray-200 text-lg">
                Te invitamos a ser parte de este gran evento que transformará tu
                vida espiritual. Una oportunidad única para crecer en la fe y
                fortalecer tu relación con Dios.
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
  );
};

export default GlobalInvitation;
