import React from 'react'
import useUserStore from '../../Store/userStore'

const Docentes = () => {
  const user = useUserStore((state) => state.user)


  return (
    <div>
      {user &&(
        <div>
          <h1>Panel {user.role}</h1>
          <h1>Bienvenido, usuario: {user.username} ({user.dni}), rol: {user.role}</h1>
        </div>
      )}
    </div>
  )
}

export default Docentes