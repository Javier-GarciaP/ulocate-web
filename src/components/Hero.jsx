import Earth3D from "./Earth3D";
import { motion } from "framer-motion"

export default function Hero() {
    return (
        <>
            <div className="flex flex-row h-[calc(100vh-4rem)] items-center">
                <div className="flex flex-1 flex-col justify-center items-start gap-y-6 pl-10 z-10">
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl text-left font-black xl:text-7xl text-gray-900 leading-tight"
                    >
                        No te vuelvas a <span className="text-blue-600">perder</span> en el campus.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-base text-left xl:text-xl text-gray-600  max-w-lg"
                    >
                        UNET GPS te ayuda a encontrar aulas, laboratorios y servicios al instante. Navega con precisión.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <button className="group relative px-8 py-3 rounded-full bg-gray-900 text-white font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-1">
                            <span className="relative z-10 flex items-center gap-2">
                                Explorar Campus
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>
                    </motion.div>
                </div>
                <div className="h-[200px] md:h-[400px] w-full flex flex-1/3 md:flex-1/2 justify-center items-center relative">
                    <Earth3D />
                </div>
            </div >
        </>
    )
}