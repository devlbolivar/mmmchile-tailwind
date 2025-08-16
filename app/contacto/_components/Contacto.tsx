import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";

const Contacto = () => {
  return (
    <section className="flex flex-1 justify-center sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl">
        {/* Información de Contacto */}
        <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg">
          <h2 className="text-white text-xl sm:text-2xl font-bold mb-6 tracking-tight text-center">
            Información de Contacto
          </h2>

          {/* Grid de información de contacto */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Información básica */}
            <div className="space-y-6">
              <div className="contact-info-item flex items-center gap-3 text-gray-200">
                <div
                  className="icon-placeholder text-white flex-shrink-0"
                  data-size="20px"
                >
                  <MapPinIcon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-medium text-white">Dirección</div>
                  <div>General Gana # 924, Santiago, Chile</div>
                </div>
              </div>

              <div className="contact-info-item flex items-center gap-3 text-gray-200">
                <div
                  className="icon-placeholder text-white flex-shrink-0"
                  data-size="20px"
                >
                  <PhoneIcon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-medium text-white">Teléfono</div>
                  <a
                    href="tel:+56975587223"
                    className="hover:text-white transition-colors hover:underline"
                    aria-label="Llamar al teléfono +56 975587223"
                  >
                    +56 9 7558 7223
                  </a>
                </div>
              </div>

              <div className="contact-info-item flex items-center gap-3 text-gray-200">
                <div
                  className="icon-placeholder text-white flex-shrink-0"
                  data-size="20px"
                >
                  <MailIcon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-medium text-white">
                    Correo Electrónico
                  </div>
                  <a
                    href="mailto:secretariammmchile@gmail.com"
                    className="hover:text-white transition-colors hover:underline"
                    aria-label="Enviar email a secretariammmchile@gmail.com"
                  >
                    secretariammmchile@gmail.com
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="contact-info-item flex items-center gap-3 text-gray-200">
                <div
                  className="icon-placeholder text-white flex-shrink-0"
                  data-size="20px"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-white">WhatsApp</div>
                  <a
                    href="https://wa.me/56975587223"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors hover:underline"
                    aria-label="Contactar por WhatsApp al +56 975587223"
                  >
                    +56 9 7558 7223
                  </a>
                </div>
              </div>
            </div>

            {/* Información adicional */}
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-semibold mb-3">
                  Horarios de Atención
                </h3>
                <div className="space-y-2 text-gray-200 text-sm">
                  <div className="flex justify-between">
                    <span>Lunes a Domingos:</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-3">
                  Redes Sociales
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/MMMCHILEORG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-white transition-colors"
                    aria-label="Seguir en Facebook"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/chile_mmm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-white transition-colors"
                    aria-label="Seguir en Instagram"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.017 0C8.396 0 7.974.013 6.77.06 5.57.106 4.75.278 4.063.525 3.35.787 2.76 1.15 2.172 1.737 1.585 2.325 1.222 2.914.96 3.628.713 4.315.54 5.135.494 6.335.447 7.539.434 7.96.434 11.581c0 3.621.013 4.042.06 5.246.046 1.2.218 2.02.465 2.707.262.714.625 1.303 1.212 1.89.588.588 1.177.951 1.89 1.213.687.247 1.507.419 2.707.465 1.204.047 1.625.06 5.246.06 3.621 0 4.042-.013 5.246-.06 1.2-.046 2.02-.218 2.707-.465.714-.262 1.303-.625 1.89-1.212.588-.588.951-1.177 1.213-1.89.247-.687.419-1.507.465-2.707.047-1.204.06-1.625.06-5.246 0-3.621-.013-4.042-.06-5.246-.046-1.2-.218-2.02-.465-2.707-.262-.714-.625-1.303-1.212-1.89C19.108 1.222 18.519.86 17.805.598 17.118.351 16.298.179 15.098.133 13.894.086 13.473.073 9.852.073h2.165zm-.093 1.94c3.55 0 3.97.013 5.37.06 1.296.059 2.001.273 2.47.455.62.24 1.063.527 1.527.99.464.464.751.908.99 1.528.182.469.396 1.174.455 2.47.047 1.4.06 1.82.06 5.37 0 3.55-.013 3.97-.06 5.37-.059 1.296-.273 2.001-.455 2.47-.24.62-.527 1.063-.99 1.527-.464.464-.908.751-1.528.99-.469.182-1.174.396-2.47.455-1.4.047-1.82.06-5.37.06-3.55 0-3.97-.013-5.37-.06-1.296-.059-2.001-.273-2.47-.455-.62-.24-1.063-.527-1.527-.99-.464-.464-.751-.908-.99-1.528-.182-.469-.396-1.174-.455-2.47-.047-1.4-.06-1.82-.06-5.37 0-3.55.013-3.97.06-5.37.059-1.296.273-2.001.455-2.47.24-.62.527-1.063.99-1.527.464-.464.908-.751 1.528-.99.469-.182 1.174-.396 2.47-.455 1.4-.047 1.82-.06 5.37-.06zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@KoinoniaMMMChileOficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-white transition-colors"
                    aria-label="Suscribirse en YouTube"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Información Importante
                </h4>
                <p className="text-gray-200 text-sm">
                  Para consultas urgentes, puede contactarnos directamente por
                  WhatsApp o llamada telefónica durante nuestros horarios de
                  atención.
                </p>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl object-cover border border-gray-600">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.1725814704096!2d-70.64819592357536!3d-33.4708572985589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c53f5f07bb49%3A0xc38e8166e59d9b7d!2sGral.%20Gana%20924%2C%208361106%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1sen!2scl!4v1749762145308!5m2!1sen!2scl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de MMM Chile en Google Maps"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
