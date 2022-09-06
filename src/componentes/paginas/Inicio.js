import React from 'react'
import ItemCount from '../navegacion/ItemCount'

export const Inicio = ({saludo1}) => {
  return (
    <div>
        <h1>{saludo1}</h1>

        <ItemCount stock="5"/>



    </div>
  )
}
export default Inicio