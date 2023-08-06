export const Mensaje = ({ children, tipo }) => {
    return (
      <div className={` px-10 py-8 max-w-96 mx-auto my-8 font-extrabold uppercase text-xl text-center text-red-600 ${ tipo }`}> {children} </div>
    )
  }