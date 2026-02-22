import Earth3D from "./Earth3D";
import { motion } from "framer-motion"

export default function Hero() {
    return (
        <>
            <section className="relative px-6 md:px-10 overflow-hidden min-h-[calc(100vh-4rem)] flex items-center">
                <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 py-12 md:py-0">
                    <div className="flex flex-1 flex-col justify-center items-start gap-y-6 z-10 text-center md:text-left">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.1]"
                        >
                            No te vuelvas a <span className="text-blue-600 block sm:inline">perder</span> en el campus.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0"
                        >
                            U-Locate te ayuda a encontrar aulas, laboratorios y servicios al instante. Navega la UNET con precisión.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="w-full md:w-auto"
                        >
                            <button className="group relative w-full md:w-auto px-10 py-4 rounded-full bg-gray-900 text-white font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-1 cursor-pointer">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Explorar Campus
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </button>
                        </motion.div>
                    </div>
                    <div className="h-[300px] md:h-[500px] lg:h-[600px] w-full flex-1 relative order-first md:order-last">
                        <Earth3D />
                    </div>
                </div>
            </section >
        </>
    )
}