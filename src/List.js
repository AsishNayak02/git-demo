import React from 'react'

function List() {
    const fruit = ['mango','orange','apple','banana','grapes'];
    const items = fruit.map(fruit=><li>{fruit}</li>);
  return (
    <div>{items}</div>
  )
}

export default List