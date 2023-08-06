import { useState } from 'react';
import cerrarBtn from '../img/cerrar.svg'
import { Mensaje } from './Mensaje';

export const Form = ({ setForm, selectedMovie }) => {

    const [destinatario, setEmail] = useState('')

    const [horaFecha, setDate] = useState('')

    const [mensaje, setMensaje] = useState(false)


    const handleSubmit = async e =>{
        e.preventDefault();

        if([destinatario, horaFecha].includes('')){
            setMensaje('Todos los campos son obligatorios')

            setTimeout(() => {
                setMensaje('')
            }, 3000);
            return;
        }
        


        const pelicula = selectedMovie;

        const datos = [
            destinatario,
            horaFecha,
            pelicula
         ]

        
         try {
            const config = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(datos)
             } 

            const response = await fetch("http://localhost:3000/enviarCorreo/enviarCorreo", config)
            const resultado = await response.json()
            console.log(resultado);
         } catch (err) {
            console.error("Error al enviar los datos", err);
         }


         setForm(false)
    }

    const handleShowModal = () =>{
        setForm(false);
    }

  return (
    <div 
        className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-90 w-full h-full z-50"
    >
        <div className=" absolute bg-black bg-opacity-50 right-12 top-12 w-12 h-12">
            <img
                className='cursor-pointer'
                src={cerrarBtn}
                alt='cerrar modal'
                onClick={handleShowModal}
            />
        </div>
            <form
                className=' py-52 px-5 mb-10 ' 
                onSubmit={ handleSubmit }
            >

                {selectedMovie && 
                        <p
                            className = ' font-x text-4xl text-center mb-10 text-white' 
                        >
                            Pelicula seleccionada: { '' } 
                            <span className='text-vista'> {selectedMovie} </span>
                        </p>}
               
                <div className='mb-5'>
                    <label 
                        htmlFor="correo"
                        className='block text-center text-white uppercase font-bold mb-5'
                    >
                        Correo 
                    </label>
                    <input
                        type="text"
                        placeholder='ejemplo@gmail.com'
                        id="correo"
                        className="  input input-bordered input-secondary w-full " 
                        value={destinatario}
                        onChange = { e=> setEmail(e.target.value) }
                    />
                </div>

                <div className='mb-5'>
                    <label 
                        htmlFor="date"
                        className='block text-center text-white uppercase font-bold mb-5'
                    >
                        Fecha
                    </label>
                    <input
                        type="date"
                        id="date"
                        className="  input input-bordered input-secondary w-full "
                        value = {horaFecha}
                        onChange = { e=> setDate(e.target.value) }
                    />
                </div>

                <input 
                    type="submit"
                    className='bg-indigo-600 w-full p-3 text-white e font-bold hover:bg-indigo-700 cursor-pointer rounded-md'
                    value = 'Enviar'
                    
                />
                    

                    {mensaje && <Mensaje tipo = 'error'> {mensaje} </Mensaje>}

            </form>
    </div>
  )
} 