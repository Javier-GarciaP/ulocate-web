import { motion } from "framer-motion"

const stats = [
    { label: "Estudiantes", value: "10k+" },
    { label: "Aulas Mapeadas", value: "250+" },
    { label: "Departamentos", value: "15" },
    { label: "Precisión", value: "99%" }
]

export default function Stats() {
    return (
        <section className="py-10 md:py-16 bg-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center md:border-r last:border-r-0 border-gray-100"
                        >
                            <div className="text-3xl md:text-5xl font-black text-blue-600 mb-2">{stat.value}</div>
                            <div className="text-gray-500 font-bold text-xs md:text-sm uppercase tracking-[0.2em]">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
