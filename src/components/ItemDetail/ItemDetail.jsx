import React from 'react'

export function ItemDetail({item}) {
  const {modelo,marca,precio} = item;
  return (
    <div>
      <h1>{modelo}</h1>
      <p>{marca}</p>
      <p>{precio}</p>
    </div>
  )
}
