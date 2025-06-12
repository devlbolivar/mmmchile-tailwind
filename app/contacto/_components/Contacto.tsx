import React from "react";

const Contacto = () => {
  return (
    <section className="mt-15 py-20 bg-[var(--background-dark)] flex flex-1 justify-center sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div className="bg-[var(--background-white)] p-6 sm:p-8 rounded-xl shadow-lg">
          <div className="mb-6">
            <h2 className="text-[var(--text-primary)] tracking-tight text-2xl sm:text-3xl font-bold">
              Contáctanos
            </h2>
            <p className="text-[var(--text-secondary)] text-sm mt-2">
              Si tienes alguna pregunta o necesitas más información, no dudes en
              escribirnos. Estamos aquí para ayudarte.
            </p>
          </div>
          <form className="space-y-5">
            <div>
              <label className="sr-only" htmlFor="name">
                Nombre
              </label>
              <input
                className="input-field"
                id="name"
                placeholder="Nombre Completo"
                type="text"
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="email">
                Correo electrónico
              </label>
              <input
                className="input-field"
                id="email"
                placeholder="Correo electrónico"
                type="email"
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="subject">
                Asunto
              </label>
              <input
                className="input-field"
                id="subject"
                placeholder="Asunto"
                type="text"
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="message">
                Mensaje
              </label>
              <textarea
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[var(--text-primary)] focus:outline-0 focus:ring-2 focus:ring-[var(--primary-color)] border border-[var(--border-color)] bg-[var(--background-white)] focus:border-[var(--primary-color)] min-h-32 placeholder:text-[var(--text-secondary)] p-3 text-sm font-normal leading-normal"
                id="message"
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                className="flex min-w-[100px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-11 px-6 bg-[var(--primary-color)] text-white text-sm font-semibold leading-normal tracking-wide hover:bg-[var(--secondary-color)] transition-colors duration-200 shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-color)]"
                type="submit"
              >
                <span className="truncate">Enviar Mensaje</span>
              </button>
            </div>
          </form>
        </div>
        <div className="bg-[var(--background-white)] p-6 sm:p-8 rounded-xl shadow-lg">
          <h2 className="text-[var(--text-primary)] text-xl sm:text-2xl font-bold mb-6 tracking-tight">
            Información de Contacto
          </h2>
          <div className="space-y-4">
            <div className="contact-info-item">
              <div className="icon-placeholder" data-size="20px">
                <svg
                  fill="currentColor"
                  height="20px"
                  viewBox="0 0 256 256"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,34.75,23.81,74.35,88,124.14,64.19-49.79,88-89.39,88-124.14A88.1,88.1,0,0,0,128,16Zm0,206.57C79.45,181.24,56,147.73,56,104a72,72,0,0,1,144,0c0,43.73-23.45,77.24-72,118.57Z"></path>
                </svg>
              </div>
              <span>Calle Principal 123, Santiago, Chile</span>
            </div>
            <div className="contact-info-item">
              <div className="icon-placeholder" data-size="20px">
                <svg
                  fill="currentColor"
                  height="20px"
                  viewBox="0 0 256 256"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M222.35,158.06l-42.67-16a8,8,0,0,0-7.17,1.32L150.9,158.8A96.17,96.17,0,0,1,97.2,105.1l15.39-21.61a8,8,0,0,0,1.32-7.17l-16-42.67A8,8,0,0,0,90.65,26.3C51.76,33.51,24,69.34,24,128,24,197.33,78.67,232,128,232c58.66,0,94.49-27.76,101.7-66.65A8,8,0,0,0,222.35,158.06ZM128,216c-48.51,0-80-31.49-80-88,0-42.55,23.05-69.43,56.33-75.61l10.51,28-14.09,19.72a8,8,0,0,0-.47,8.83A112.46,112.46,0,0,0,143.05,159l19.72-14.09,28,10.51C185.43,193,170.51,216,128,216Z"></path>
                </svg>
              </div>
              <span>+56 9 1234 5678</span>
            </div>
            <div className="contact-info-item">
              <div className="icon-placeholder" data-size="20px">
                <svg
                  fill="currentColor"
                  height="20px"
                  viewBox="0 0 256 256"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V77.72l82.44,55.46a16,16,0,0,0,19.12,0L224,77.72V192ZM128,124.49,49.54,64H206.46Z"></path>
                </svg>
              </div>
              <span>contacto@mmmchile.cl</span>
            </div>
          </div>
          <div className="mt-8">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl object-cover border border-[var(--border-color)]"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCWcME3mXM4HOB-8_DtIZshGqTdmXJW0lvFuOwSxRaTp0N9lOFmblF2aaRloE9vUqMsuP9cX7TI5WtskAxHJCjVpHqDlF4xmfAlG6q6aGTH9-9oOeuqSCJJUQMTaUVy7Xv-eh3ylrthhKIMRa-yumEVIhq8ALrxjJllVBDCnkX1YVXNN_OW7xQtTU5ktfqkFf3DqWGTA99pG6tEF_LlGCNqHdCh9zn_Fv5wbCHWF5PFampodXR3o-kUaQ74KheYgW4jVkCF-y6kzBo")',
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
