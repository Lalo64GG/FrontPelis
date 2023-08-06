import { useState } from "react"

export const Card = ({ array, isDisabled, setForm, setSelectedMovie }) => {
  
  const handleButton = (peliculasName)=>{
    setSelectedMovie(peliculasName)
    setForm(true)
  }

  return (
<div className="flex flex-wrap text-black">
    { array.map( peliculas =>(
      <div key={peliculas.id} className="  md:w-1/3 lg:w-1/4 xl:w-1/4 p-2" >
          <div  className="card card-side bg-white shadow-lg ">
          <figure><img src={ peliculas.img } /></figure>
          <div className="card-body">
              <h2 className="card-title"> { peliculas.name } </h2>
              <p>Da click en boton para llenar el formulario</p>
              <div className="card-actions justify-end">
              <button 
                className="btn btn-primary "
                disabled = {isDisabled}
                onClick={ ()=> handleButton(peliculas.name)}
              >
                Ver
              </button>
          </div>
          </div>
      </div>
    </div>
    ) ) }
</div>
  )
}