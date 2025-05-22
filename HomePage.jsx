
import React from "react";

export default function HomePage() {
  const services = [
    {
      title: "Análisis de Rentabilidad",
      description: "Evaluamos tu carta actual, escandallos, precios y márgenes para identificar oportunidades de mejora inmediatas."
    },
    {
      title: "Revenue Management del Menú",
      description: "Seguimiento mensual de ventas, ajuste de precios por estacionalidad y mejora continua del rendimiento de tu carta."
    },
    {
      title: "Asesoría Completa",
      description: "Un acompañamiento integral con formación al equipo, dashboards personalizados y aplicación avanzada de estrategias."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-white to-gray-50 text-gray-800 p-8 font-serif">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2 text-gray-900">Rentabilidad real, decisiones inteligentes</h1>
        <p className="text-lg max-w-xl mx-auto text-gray-700">
          Analizo tu carta y tus ventas para que cada plato te deje más beneficio, aplicando técnicas de Revenue Management adaptadas a tu restaurante.
        </p>
      </header>

      <section className="grid md:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border-l-4 border-blue-600 rounded-2xl shadow p-6 transform transition-all duration-300 hover:scale-105 hover:z-10 hover:shadow-xl relative hover:bg-opacity-100 backdrop-blur-sm"
          >
            <h2 className="text-xl font-semibold mb-2 text-blue-800">{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </section>

      <section className="bg-gray-50 rounded-2xl shadow p-8 max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-900">¿Cómo funciona?</h2>
        <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
          <li>Nos reunimos y analizamos tu carta actual.</li>
          <li>Recibes un informe visual con datos clave y propuestas de acción.</li>
          <li>Opcionalmente, seguimos contigo mes a mes para asegurar resultados.</li>
        </ul>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-bold mb-2 text-gray-900">¿Quieres empezar?</h2>
        <p className="mb-4 text-gray-700">Agenda una llamada gratuita de diagnóstico o escríbeme directamente por WhatsApp.</p>
        <a
          href="https://wa.me/34600111222"
          target="_blank"
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded-2xl text-lg hover:bg-blue-800 transition"
        >
          Hablemos por WhatsApp
        </a>
      </section>
    </div>
  );
}
