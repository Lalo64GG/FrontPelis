import styled from '@emotion/styled'
import fondo from '../img/fondo.png'

const Fondo = styled.div`
    height: 500px;
    width: 100%;
    background-image:url(${fondo});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    @media (max-width: 480px) {

    height: 300px;

    }

`

export const Header = ({ setRespuesta, setIsDisabled }) => {

    const handleButton = () => {
        setRespuesta(true);
    }

    const handleActivated = () => {
        setIsDisabled(false);
    }

  return (
    <Fondo className=' font-x py-16 text-4xl md:text-4xl md:py-32' >
        <h1 className=" text-center text-black">
            <span 
                className=" text-red-600 "
            >
                Tú
            </span>
            { ' ' }
            y
            { ' ' } 
            <span 
                className=" text-indigo-600"
            >
                yo
            </span>
            { ' ' }
            en una cita para ver una pelicula
        </h1>

        <h1 className=" text-center text-black p-4 ">

            <span
                className=" mx-5 uppercase hover:text-red-500 cursor-pointer"
                onClick={handleButton}
            >

                <u>
                    no
                </u>

            </span>

            <span 
                className="mx-5 uppercase hover:text-green-500 cursor-pointer"
                onClick={handleActivated} 
            >
                <u>
                    si
                </u>
           </span>
        </h1>
    </Fondo>
  )
} 