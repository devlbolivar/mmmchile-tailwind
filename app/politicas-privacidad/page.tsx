import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Políticas de Privacidad - Radio Bethel Chile",
  description: "Políticas de privacidad de Radio Bethel Chile",
};

export default function PoliticasPrivacidad() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Radio Bethel Chile
      </h1>

      <h2 className="text-2xl font-semibold mb-6 text-gray-700">
        Políticas de Privacidad
      </h2>

      <div className="space-y-6 text-gray-600 leading-relaxed">
        <section>
          <h3 className="text-xl font-semibold mb-3 text-gray-700">
            Información que recopilamos
          </h3>
          <p>
            No recopilamos ni almacenamos información personal de ningún tipo de
            los usuarios, independientemente de su edad. Cuando utilizas nuestra
            aplicación, no solicitamos ni almacenamos nombres, direcciones de
            correo electrónico, números de teléfono u otra información personal
            identificable.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3 text-gray-700">
            Uso de la información
          </h3>
          <p>
            La Aplicación está diseñada para proporcionar una experiencia segura
            y entretenida para todos los usuarios, sin importar su edad. No
            utilizamos ninguna información personal para ningún propósito,
            incluida la comercialización, el seguimiento de usuarios o la
            personalización de contenidos.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3 text-gray-700">
            Compartir información
          </h3>
          <p>
            No compartimos información personal con terceros. Nuestra política
            es mantener la privacidad y la seguridad de todos los usuarios de
            nuestra aplicación.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3 text-gray-700">Niños</h3>
          <p>
            Reconocemos la importancia de proteger la privacidad de los niños en
            línea. La Aplicación está diseñada para ser segura y apropiada para
            usuarios de todas las edades. No recopilamos intencionalmente ni
            voluntariamente información personal de niños menores de 13 años. Si
            un padre o tutor cree que hemos recopilado información personal de
            un niño menor de 13 años, les instamos a que se pongan en contacto
            con nosotros de inmediato y eliminaremos esa información de nuestros
            registros.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3 text-gray-700">
            Disponibilidad en América Latina y países de habla hispana
          </h3>
          <p>
            La Aplicación está disponible para su uso en todos los países de
            América Latina y aquellos en los que se hable español. Nos
            comprometemos a cumplir con las leyes de privacidad de cada país
            donde nuestra aplicación esté disponible.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3 text-gray-700">
            Cambios en nuestra Política de Privacidad
          </h3>
          <p>
            Nos reservamos el derecho de actualizar esta Política de Privacidad
            en cualquier momento y se publicará una versión actualizada en esta
            página. Se alentará a los usuarios a revisar esta Política de
            Privacidad periódicamente para reiterar que no recopilamos
            información personal. El uso continuado de la Aplicación constituye
            la aceptación de esta Política de Privacidad y cualquier
            actualización que hagamos.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3 text-gray-700">Contacto</h3>
          <p>
            Si tienes alguna pregunta sobre esta Política de Privacidad, por
            favor contáctanos en{" "}
            <a
              href="mailto:koinoniasys@gmail.com"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              koinoniasys@gmail.com
            </a>
          </p>
        </section>
      </div>

      <footer className="mt-12 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-500 text-center">
          Abril 2024, Santiago de Chile
        </p>
      </footer>
    </div>
  );
}
