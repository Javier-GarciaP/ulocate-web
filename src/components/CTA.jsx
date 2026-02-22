import { motion } from "framer-motion"

export default function CTA() {
    return (
        <section className="py-20 px-6 md:px-10">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="max-w-5xl mx-auto bg-blue-600 rounded-4xl md:rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-500/40"
            >
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full -ml-32 -mb-32 blur-3xl" />

                <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                        ¿Listo para explorar la <span className="underline decoration-blue-400">UNET</span>?
                    </h2>
                    <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
                        Comienza a usar U-Locate hoy mismo y descubre una nueva forma de vivir tu universidad.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="w-full sm:w-auto px-10 py-4 bg-white text-blue-600 font-black rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl hover:-translate-y-1">
                            Empezar ahora
                        </button>
                        <button className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300">
                            Ver tutorial
                        </button>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
