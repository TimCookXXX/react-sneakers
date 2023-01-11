import React from 'react'
import './index.scss'
// import sneakersOne from '../../sneakersOne.png'
import search from './assets/img/search.svg'
import remove from './assets/img/close.svg'
import Card from './components/Card'
import Header from './components/Header'

function App() {
  const arr = [
    {
      title: 'Мужские Кроссовки Nike Blazer Mid Suede',
      price: 12999,
      imageUrl: './sneakersOne.png',
    },
    {
      title: 'Мужские Кроссовки Nike Air Max 270',
      price: 12499,
      imageUrl: './sneakersTwo.jpg',
    },
    {
      title: 'Мужские Кроссовки Nike Blazer Mid Suede',
      price: 8499,
      imageUrl: './sneakersThree.jpg',
    },
    {
      title: 'Кроссовки Puma X Aka Boku Future Rider',
      price: 8999,
      imageUrl: './sneakersFour.jpg',
    },
  ]
  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="drawer">
          <h2 className="drawer__text">Корзина</h2>
          <div className="cart">
            <div className="cart__item">
              {/* <img className="cart__img" src={sneakersOne} alt="sneakers" /> */}
              <div>
                <p className="cart__desc">Мужские Кроссовки Nike Air Max 270</p>
                <span className="cart__price">12 999 руб.</span>
              </div>
              <img className="cart__remove" src={remove} alt="remove" />
            </div>
            <div className="cart__item">
              {/* <img className="cart__img" src={sneakersOne} alt="sneakers" /> */}
              <div>
                <p className="cart__desc">Мужские Кроссовки Nike Air Max 270</p>
                <span className="cart__price">12 999 руб.</span>
              </div>
              <img className="cart__remove" src={remove} alt="remove" />
            </div>
          </div>
          <ul className="cart__bottom">
            <li className="cart__block">
              <span>Итого:</span>
              <div></div>
              <span>21 498 руб.</span>
            </li>
            <li className="cart__block">
              <span>Налог 5%:</span>
              <div></div>
              <span>1074 руб.</span>
            </li>
          </ul>
          <button className="cart__btn">Оформить заказ</button>
        </div>
      </div>
      <Header />
      <div className="content">
        <div className="search-block">
          <h1 className="content__title">Все кроссовки</h1>
          <div className="content__search">
            <img className="search-img" src={search} alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <ul className="card">
          {arr.map((obj) => (
            <Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
