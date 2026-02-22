import { motion } from "framer-motion"

const steps = [
    {
        number: "01",
        title: "Ingresa tu destino",
        description: "Escribe el nombre del aula, laboratorio o dependencia que buscas."
    },
    {
        number: "02",
        title: "Sigue la ruta",
        description: "Visualiza el camino más corto y eficiente desde tu ubicación actual."
    },
    {
        number: "03",
        title: "Llega sin estrés",
        description: "Recibe indicaciones precisas para llegar a tiempo a tus clases."
    }
]

export default function HowItWorks() {
    return (
        <section className="py-16 md:py-24 px-6 md:px-10 overflow-hidden" id="how-it-works">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    <div className="flex-1 text-center lg:text-left">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4 block"
                        >
                            ¿Cómo funciona?
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-black text-gray-900 mb-8 md:mb-12 leading-tight"
                        >
                            Navega por el campus en <span className="text-blue-600">tres simples pasos</span>
                        </motion.h2>

                        <div className="space-y-8 md:space-y-10 max-w-xl mx-auto lg:mx-0">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex flex-col md:flex-row items-center lg:items-start gap-4 md:gap-6 text-center md:text-left"
                                >
                                    <span className="text-4xl md:text-5xl font-black text-blue-100 shrink-0">
                                        {step.number}
                                    </span>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex-1 relative w-full max-w-md lg:max-w-none mx-auto"
                    >
                        <div className="aspect-4/5 rounded-4xl bg-linear-to-tr from-blue-600 to-blue-400 p-1 shadow-2xl overflow-hidden">
                            <div className="w-full h-full bg-white rounded-3xl overflow-hidden relative">
                                {/* Placeholder for a mockup or image */}
                                <div className="absolute inset-0 bg-gray-50 flex items-center justify-center p-10">
                                    <div className="w-full h-full border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 md:w-16 md:h-16 text-blue-200 mb-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                                        </svg>
                                        <span className="text-gray-400 font-bold text-sm md:text-base font-montserrat tracking-tight">Interfaz de Navegación</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative blobs */}
                        <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-60" />
                        <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-60" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
