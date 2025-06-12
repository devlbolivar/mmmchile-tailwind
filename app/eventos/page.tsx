import React from "react";

const page = () => {
  return (
    <main className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-8 md:py-12">
      <div className="layout-content-container flex flex-col max-w-4xl w-full">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="@container">
            <div
              className="bg-cover bg-center flex flex-col justify-end overflow-hidden min-h-[320px] md:min-h-[400px]"
              style={{
                backgroundImage:
                  'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.0) 40%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA39803WLBs6M-fL5pJW1rp0zC-0pvhKdHQXoYTfFuQeAfMka488_SVmMaKyA56IH_kLqiNraLbYmnjoqsu2AkMFAKPSZ1gZRfG8jJINa-fpYpgBfCFApSEh2OO98LuAYnvu7jyGt06peAJhXdOZo4VDYo2ppAY8CpxI4MPT1fDqsJtynhyK9RGtN7bZizp5m3a3Hhu4z8Gf0yubY0mPRot4pNX0iaet_1Fp1UayCkzVOUrpT6qxTtxfX5f6WCcYFGynpTf42FxtiI")',
              }}
            >
              <div className="p-6 md:p-8">
                <h1 className="text-white tracking-tight text-3xl md:text-4xl font-bold leading-tight">
                  Conferencia Nacional 2024
                </h1>
              </div>
            </div>
          </div>
          <div className="p-6 md:p-8">
            <p className="text-[#334155] text-base font-normal leading-relaxed mb-6">
              La Conferencia Nacional del Movimiento Misionero Mundial en Chile
              es un evento anual que reúne a miembros de todas las iglesias
              locales para un tiempo de compañerismo, adoración y crecimiento
              espiritual. Este año, la conferencia se centrará en el tema
              'Avivamiento y Propósito', con el objetivo de inspirar a los
              participantes a vivir una vida llena del Espíritu Santo y a
              cumplir el propósito de Dios para sus vidas.
            </p>
            <section className="mb-8">
              <h3 className="section-title">Detalles del Evento</h3>
              <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-0">
                <div className="detail-item">
                  <p className="detail-label">Fecha</p>
                  <p className="detail-value">15-17 de Noviembre de 2024</p>
                </div>
                <div className="detail-item">
                  <p className="detail-label">Hora</p>
                  <p className="detail-value">Viernes 19:00 - Domingo 13:00</p>
                </div>
                <div className="detail-item">
                  <p className="detail-label">Ubicación</p>
                  <p className="detail-value">
                    Centro de Convenciones 'El Buen Pastor', Santiago
                  </p>
                </div>
              </div>
            </section>
            <section className="mb-8">
              <h3 className="section-title">Orador Principal</h3>
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-[var(--border-color)]">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-16 w-16 border-2 border-white shadow-md"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDZlvtMR2bGex-6za-v72DY0dJ9IATbkVMay5uRUUWvQva4Q9mGu-Bnm849uG46s6AdxAgYuruGLZrW29pRnLw9K1oMpEXmW3MXs3tU3dffW4D661UQv49J6B6n7DnvkNeroidrrsxNbtRwfu2Zepm88DKmhT_3oF47Lkilm2Om0wMKUUtHG9X6UbjVfhRLLq8VeTqlXu9zXLMOJiln5IazqceXs_V5zQLKI3zxUVoi-1RMKGfH6FOsMxxMEVz7BCfya_k5HNRuLKw")',
                  }}
                ></div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#111418] text-lg font-semibold leading-normal">
                    Rev. Samuel Rodriguez
                  </p>
                  <p className="text-[var(--secondary-text-color)] text-sm font-normal leading-normal">
                    Pastor General del MMM Internacional
                  </p>
                </div>
              </div>
            </section>
            <section className="mb-8">
              <h3 className="section-title">Ubicación en el Mapa</h3>
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl object-cover border border-[var(--border-color)] shadow-sm"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAsZIuH_auWQxC0jBO0JzRdDe6Q4KziwEcXZkdjgx7TYEm5_9OIQM2DJ7vfAoDR7hhXBX1tqewTYgs-KHMSWpvVxTx54JYUGFG-Ea_qAI_9I-IGooz7hTasWGUHXUolPZUeoiZ9OYnWGLTGSfHnlB3VvPXijdBLDDV38EhznvGQmqCQwnhEutcuLOXMSWeA50tsBilRCqoFVeE60krkpW-SmG4BmB6-wV_KQVhfpfO2DDSQ9JwzGfwJgYJlKniYZ5Y3Cjl4-lBTI3o")',
                }}
              ></div>
            </section>
            <section className="mb-10">
              <h3 className="section-title">
                Información de Contacto y Registro
              </h3>
              <p className="text-[#334155] text-base font-normal leading-relaxed mb-6">
                Para cualquier consulta o información adicional, por favor
                contacte a la oficina del MMM Chile al
                <a
                  className="text-[var(--primary-color)] hover:underline font-medium"
                  href="tel:+56227891234"
                >
                  +56 2 2789 1234
                </a>
                o envíe un correo electrónico a
                <a
                  className="text-[var(--primary-color)] hover:underline font-medium"
                  href="mailto:eventos@mmmchile.cl"
                >
                  eventos@mmmchile.cl
                </a>
                .
              </p>
              <div className="flex justify-center">
                <button className="primary-button">
                  <span className="truncate">Registrarse al Evento</span>
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
