import React from 'react'

export function ItemDetail({item}) {
  const {imagen,titulo,marca,precio} = item;
  return (
    <div>
      <img src={imagen}></img>
      <h1>{titulo}</h1>
      <p>{marca}</p>
      <p>{precio}</p>
    </div>
  )
}
