import React, { useContext } from 'react'
import FormContext from '../../Context/FormContext'

const selectButton = () => {
  const {ticketList} = useContext(FormContext);
  return (
    <div>
      <h1>Hhhdh</h1>
      {
        ticketList.map(({type,price,access})=>(
          <div>
            {type}
            {price}
            {access}
          </div>
        ))
      }
    </div>
  )
}

export default selectButton
