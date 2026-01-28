export default function Header() {
    return (
        <>
            <div className="sticky top-0 z-50 flex h-16 justify-between items-center py-2 px-6 bg-white/70 backdrop-blur-md border-b border-white/20 shadow-sm transition-all duration-300">
                <div className="flex items-center gap-2 cursor-pointer group">
                    <img className="w-10 transition-transform duration-300 group-hover:rotate-12" src={`${import.meta.env.BASE_URL}logoUnet.svg`} alt="Logo UNET" />
                    <h3 className="font-bold text-2xl tracking-tight text-gray-800">
                        <span className="text-blue-600">U</span>-Locate
                    </h3>
                </div>
                <div className="flex gap-4 items-center">
                    <button className="font-semibold text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm">
                        Iniciar Sesión
                    </button>
                    <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-2 px-6 rounded-full shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all duration-300 text-sm">
                        Registrarse
                    </button>
                </div>
            </div>
        </>
    )
}