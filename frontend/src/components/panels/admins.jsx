import React from 'react'
import useUserStore from '../../Store/userStore';  // Importa el estado globa

const Admins = () => {
  const user = useUserStore((state)=> state.user);  // Accede al estado global


  return (
    <div>
      {user && (
        <div>
          <h1>Panel {user.role}</h1>
          <h1>Bienvenido, usuario: {user.username} ({user.dni}), rol:  {user.role}</h1>  {/* Muestra el nombre y DNI del usuario */}
        </div>
      )}
    </div>
  )
}

export default Admins