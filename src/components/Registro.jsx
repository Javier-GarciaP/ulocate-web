import { useState } from 'react';

const Registro = ({alCerrar}) => {
    return(
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <section className="bg-slate-900 border border-white/20 p-8 rounded-2xl shadow-2xl w-[400px] relative">
                {/* Botón para cerrar el cuadro */}
                <button 
                    onClick={alCerrar}
                    className="absolute top-4 right-4 text-white/50 hover:text-white">
                    ✕
                </button>
                <h2>Registro</h2>
                <form>
                    <label>Correo Universitario</label>
                    <input
                        type="email"
                        placeholder= "Correo Electronico"
                    />
                    <label>Contrasenia</label>
                    <input
                        type="password"
                        placeholder= "CContrasenia"
                    />
                </form>
                <button>Registrarme</button>
                <footer>
                    <p>Ya tienes una cuentas <a href="#">Inicia Sesion</a></p>
                </footer>
            </section>
        </div>
    )
}
export default Registro;