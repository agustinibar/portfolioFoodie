import React from 'react'
import NoLandingNavbar from '../../components/Navbar/NoLandingNavbar'
import googlePhoto from '../../assets/google.jpg';
import webAnalytics from '../../assets/webAnalytics.jpg';
import sundarPichai from '../../assets/sundarPichai.jpeg'
import Footer from '../../scenes/Footer';
export const NewOne = () => {
    
    return (
        <section className="bg-deep-blue text-white py-16">
          <NoLandingNavbar />
          <div className="container mx-auto text-left mt-10">
            <h2 className="text-5xl font-playfair font-semibold mb-6">
              Google Revoluciona la Búsqueda en Línea con Innovadores Algoritmos de Experiencia del Usuario
            </h2>
            <p className="mb-8">Buenos Aires, Argentina - 12/26/2023</p>
            <img src={googlePhoto} alt="Google Office" className="w-full max-h-600 object-cover mb-8 rounded-lg shadow-lg" />
            <p className="text-xl mb-8">
              En un emocionante giro, Google ha dado a conocer hoy importantes actualizaciones en sus algoritmos de búsqueda, marcando un hito en la forma en que interactuamos con la web. Enfocándose en mejorar la experiencia del usuario, estas modificaciones prometen transformar la forma en que se presentan y clasifican los resultados de búsqueda.
            </p>
            <p className="mb-8">
              Google, el gigante de la tecnología, ha anunciado con entusiasmo la implementación de innovadores algoritmos de búsqueda destinados a priorizar la experiencia del usuario. Estas actualizaciones significativas están diseñadas para elevar la calidad de los resultados de búsqueda, ofreciendo a los usuarios respuestas más relevantes y experiencias más satisfactorias.
            </p>
            <p className="mb-8 text-xl">
              <strong>Mejoras Centradas en el Usuario</strong>
            </p>
            <p className="mb-8">
              El enfoque central de estas actualizaciones radica en mejorar la experiencia del usuario desde el momento en que realiza una búsqueda hasta que encuentra la información que busca. La velocidad de carga de las páginas, la adaptabilidad a dispositivos móviles y la accesibilidad son aspectos clave abordados por estas mejoras.
            </p>
            <div className="flex flex-wrap items-center mb-8">
                <div className="w-full sm:w-1/2 pr-4">
                    {/* Contenido del lado izquierdo */}
                    <img src={webAnalytics} alt="Google Office" className=" w-full max-h-72 object-cover mb-4 rounded-lg shadow-lg" />
                </div>
                <div className="w-full sm:w-1/2">
                    <p className="mb-8 text-xl">
                    <strong>¿Cómo Impactará en tu Sitio Web?</strong>
                    </p>
                    <p className="mb-8">
                        Para aquellos que gestionan sitios web, estas actualizaciones tendrán un impacto directo en el posicionamiento de sus páginas en los resultados de búsqueda de Google. La relevancia y la calidad del contenido, así como la usabilidad del sitio, se vuelven más cruciales que nunca. Los propietarios de sitios web deberán adaptarse a esta nueva era, priorizando la experiencia del usuario para mantener o mejorar su visibilidad en línea.
                    </p>
                </div>
            </div>

      <p className="mb-8 text-xl">
        <strong>¿Qué Significa para la Industria Digital?</strong>
      </p>
      <p className="mb-8">
        Expertos en SEO y marketing digital ahora se enfrentan a un nuevo desafío: alinear sus estrategias con el enfoque renovado de Google. Las tácticas tradicionales de optimización de palabras clave podrían volverse obsoletas, mientras que la creación de contenido valioso y la atención a la experiencia del usuario se convierten en factores determinantes para el éxito en línea.
      </p>
      <div className="flex flex-wrap items-center mb-8">
            <div className="w-full sm:w-1/2 pr-4">
                <p className="mb-8 text-xl">
                    <strong>Palabras del CEO de Google, Sundar Pichai</strong>
                </p>
                <p className="mb-8">
                    "Estamos comprometidos en ofrecer a los usuarios de Google una experiencia de búsqueda cada vez mejor. Estas actualizaciones reflejan nuestra dedicación a la innovación continua y al deseo de proporcionar resultados de búsqueda que sean no solo relevantes, sino también excepcionales en términos de experiencia del usuario", afirmó Sundar Pichai, CEO de Google.
                </p>          
            </div>
            <div className="w-full sm:w-1/2">
                <img src={sundarPichai} alt="Google Office" className=" w-full max-h-72 object-cover mb-4 rounded-lg shadow-lg" />
            </div>
            </div>
      <p className="mb-8 text-xl">
        <strong>¿Cómo Prepararse?</strong>
      </p>
      <p className="mb-8">
        Los expertos recomiendan a los propietarios de sitios web y profesionales del marketing digital estar atentos a estos cambios y ajustar sus estrategias en consecuencia. La adaptabilidad y la atención a las mejores prácticas de experiencia del usuario se convierten en la clave para destacar en este nuevo panorama de búsqueda en línea.
      </p>
      <p>
        En resumen, Google ha lanzado un mensaje claro: el futuro de la búsqueda en línea está intrínsecamente ligado a la calidad y la satisfacción del usuario. La industria digital está en vilo, esperando ansiosamente para ver cómo estas actualizaciones moldearán el paisaje en constante evolución de la web.
      </p>
    </div>
    <Footer />
  </section>
  )
}
