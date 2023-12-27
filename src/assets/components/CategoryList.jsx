import React from 'react'

const CategoryList = (props) => {
    const {id, name, description, price, category} = props.item;
  return (
    <div>
        <h4>{id}</h4>
        <h3>{name}</h3>
        <p>{description}</p>
        <h6>{price}</h6>
        <h6>{category}</h6>
    </div>
  )
}

export default CategoryList