import React from 'react'
import addProduct from '../../assets/img/addProduct.svg'
import './Card.scss'

function Card(props) {
  return (
    <li className="card__item">
      <img className="card__img" alt="sneakers" src={props.imageUrl} />
      <p className="card__desc">{props.title}</p>
      <div className="card__info">
        <div className="card__price">
          <span className="card__price--text">Цена:</span>
          <span className="card__price--sum">{props.price} руб.</span>
        </div>
        <button className="card__btn">
          <img className="card__product" alt="favorite" src={addProduct} />
        </button>
      </div>
    </li>
  )
}

export default Card
