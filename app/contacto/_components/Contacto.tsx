import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contacto = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Correo electrónico inválido";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "El asunto es requerido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    // Clear error when user starts typing
    if (errors[id as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [id]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el mensaje");
      }

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className=" flex flex-1 justify-center sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-[60%] max-w-5xl grid grid-cols-1  gap-8 lg:gap-12">
        <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg">
          <h2 className="text-white text-xl sm:text-2xl font-bold mb-6 tracking-tight">
            Información de Contacto
          </h2>
          <div className="space-y-4">
            <div className="contact-info-item flex items-center gap-3 text-gray-200">
              <div className="icon-placeholder text-white" data-size="20px">
                <MapPinIcon className="w-4 h-4" />
              </div>
              <span>General Gana # 924, Santiago, Chile</span>
            </div>
            <div className="contact-info-item flex items-center gap-3 text-gray-200">
              <div className="icon-placeholder text-white" data-size="20px">
                <PhoneIcon className="w-4 h-4" />
              </div>
              <span>+56 975587223</span>
            </div>
            <div className="contact-info-item flex items-center gap-3 text-gray-200">
              <div className="icon-placeholder text-white" data-size="20px">
                <MailIcon className="w-4 h-4" />
              </div>
              <span>secretariammmchile@gmail.com</span>
            </div>
          </div>
          <div className="mt-8">
            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl object-cover border border-gray-600">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.1725814704096!2d-70.64819592357536!3d-33.4708572985589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c53f5f07bb49%3A0xc38e8166e59d9b7d!2sGral.%20Gana%20924%2C%208361106%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1sen!2scl!4v1749762145308!5m2!1sen!2scl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
