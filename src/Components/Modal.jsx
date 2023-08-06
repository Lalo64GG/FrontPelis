export const Modal = ({ setAnswer, setRespuesta }) => {

    const handleAnswer = () =>{
        setAnswer(true)
    }

    const handleShow = () =>{
        setRespuesta(false)
    }


  return (
<div className="fixed inset-0 flex items-center justify-center z-10 overflow-hidden">
  <form method="dialog" className="modal-box bg-vista text-black">
    <h3 className="font-bold text-lg mb-5">Confirmación</h3>
    <p className="text-center py-2 mb-5">¿Estás segura de tu elección?</p>
    <div className="  flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 justify-center md:mx-32 lg:mx-40">
      <button 
        className="btn text-black  bg-aero w-full md:w-auto border-none hover:bg-red-600"
        onClick={handleAnswer}

      >
        Si
      </button>
      <button 
        className="btn text-black bg-aero w-full md:w-auto border-none hover:bg-green-600"
        onClick={handleShow}
      >
        No
      </button>
    </div>
  </form>
</div>

  )
}
