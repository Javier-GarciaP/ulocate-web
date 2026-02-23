export default function Footer() {
    return (
        <footer className="bg-gray-900 pt-20 pb-10 px-6 md:px-10 text-white rounded-t-[3rem]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1 border-white/10">
                        <div className="flex items-center gap-2 mb-6">
                            <img className="w-10 brightness-0 invert" src={`${import.meta.env.BASE_URL}logoUnet.svg`} alt="Logo UNET" />
                            <h3 className="font-bold text-2xl tracking-tight">
                                <span className="text-blue-500">U</span>-Locate
                            </h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            La plataforma definitiva de posicionamiento y navegación para la comunidad universitaria de la UNET.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Plataforma</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-blue-500 transition-colors">Mapa 3D</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition-colors">Buscador</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition-colors">Departamentos</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition-colors">Servicios</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Universidad</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="https://www.unet.edu.ve" className="hover:text-blue-500 transition-colors">Sitio Web UNET</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition-colors">Campus Virtual</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition-colors">Control de Estudios</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition-colors">Biblioteca</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Contacto</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                                soporte@unet.edu.ve
                            </li>
                            <li className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                San Cristóbal, Venezuela
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} U-Locate (UNET GPS). Casi todos los derechos reservados.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacidad</a>
                        <a href="#" className="hover:text-white transition-colors">Términos</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
