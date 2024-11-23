import React from 'react'
import useUserStore from '../../Store/userStore';  // Importa el estado globa

const Alumnos = () => {
  const user = useUserStore((state)=> state.user);  // Accede al estado global



  return (
    <div>
    {user && (
      <div>
        <h1>Panel {user.role}</h1>
        <h2>Bienvenido, {user.username} ({user.dni}) {user.role}</h2>  {/* Muestra el nombre y DNI del usuario */}
      </div>
    )}
  </div>
  )
}

export default Alumnos