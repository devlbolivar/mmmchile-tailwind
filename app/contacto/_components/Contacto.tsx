import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";

const Contacto = () => {
  return (
    <section className=" flex flex-1 justify-center sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="md:w-[60%] w-full max-w-5xl grid grid-cols-1  gap-8 lg:gap-12">
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
