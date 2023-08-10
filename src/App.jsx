import { useEffect, useState } from 'react'
import { Card } from './Components/Card'
import { Header } from './Components/Header'

  //? Importaciones de imagenes.
import Harry from './img/Harry.jpg'
import Spider from './img/movie.jpg'
import Star from './img/Star2.jpg'
import Godfather from './img/Elpadrino.jpg'
import Another from './img/another.jpg'
import Luci from './img/luciernaga.jpg'
import Castillo from './img/castillo2.jpg'
import { Modal } from './Components/Modal'
import Alert from './Components/Alert'
import { Form } from './Components/Form'
 
function App() {

  const [datos, setDatos] = useState([])

  const [selectedMovie, setSelectedMovie] = useState('')

  const [respuesta, setRespuesta] = useState(false)
  const [answer, setAnswer] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)
  const [form, setForm] = useState(false)

  useEffect( ()=> {
    console.log(datos);
  },[datos] )

  useEffect(()=>{
    const timer = setTimeout(() => {
      setAnswer(false)  
    }, 2000);

    return () => clearTimeout(timer)
    
  },[answer])


//? Uso de localStorage para mantener los estados de los componmentes
//! Nota: primero debes poner el la logica para que se conserve el estado y luego guardar en local

  useEffect( ()=>{
    const isDisabledLS = localStorage.getItem('isDisabled')
    if (isDisabledLS === "false") {
      setIsDisabled(false)
    }
  },[])


  useEffect( ()=>{
    localStorage.setItem('isDisabled', isDisabled.toString())
    console.log(isDisabled);
  },[isDisabled])

  useEffect( ()=>{
    const respuestaLS = localStorage.getItem('respuesta')
      if (respuestaLS === "true") {
        setRespuesta(true)
      } 
  },[])

  useEffect( ()=>{
    localStorage.setItem('respuesta', respuesta.toString())
  },[respuesta])


  //* Array de Objetos tipo Peliculas
  const arrayMovies = [
    {
      id: 1,
      name: "Harry Potter",
      img: `${Harry}`
    },
    {
      id:2,
      name: "Spider-man",
      img: `${Spider}`
    },
    {
      id:3,
      name: "Start-Wars 2",
      img: `${Star}`
    },
    {
      id:4,
      name: "El Padrino",
      img:`${Godfather}`
    },
    {
      id: 5,
      name: "Another Round",
      img:`${Another}`
    },
    {
      id:6,
      name: "La Tumba de las Lucierganas",
      img:`${Luci}`
    },
    {
      id:7,
      name: "El Increíble Castillo Vagabundo",
      img: `${Castillo}`
    },
  ]

  return (
    <>
      {answer && (<Alert/>)}

      <main className='mb-5'>
        <Header 
          setRespuesta = { setRespuesta }
          setIsDisabled = { setIsDisabled }
        />
      </main>

      {respuesta && (
         <Modal 
         setRespuesta = { setRespuesta }
         setAnswer = { setAnswer }
       />
      )}

      {form && (
        <Form
          setForm = { setForm }
          setDatos = { setDatos }
          selectedMovie = { selectedMovie }
        />
      )}

      <div>
        <h1 className=" font-x  text-center text-4xl text-vista">Lista de Peliculas</h1>
          <Card
            array = { arrayMovies }
            isDisabled = { isDisabled } 
            setForm = { setForm }
            setSelectedMovie = { setSelectedMovie }
          />
      </div>
    </>
      
  )
}


export default App