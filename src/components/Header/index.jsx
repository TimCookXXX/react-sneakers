import React from 'react'
import logo from '../../assets/img/logo.png'
import favorite from '../../assets/img/favorite.svg'
import basket from '../../assets/img/basket.svg'
import profile from '../../assets/img/profile.svg'
import './Header.scss'

function Header() {
  return (  
    <header className='header'>
        <div className='header__left'>
          <img className='header__logo' alt='logo' src={logo} />
          <div className='header__info'>
            <h3 className='header__info--title'>REACT SNEAKERS</h3>
            <p className='header__info--desc'>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className='header__right'>
          <li className='header__item'>
            <img className='header__basket' alt='basket' src={basket} />
            <span className='header__sum'>1205 руб.</span>
          </li>
          <li className='header__item'>
            <img alt='favorite' src={favorite} />
          </li>
          <li className='header__item'>
            <img alt='profile' src={profile} />
          </li>
        </ul>
      </header>
  )
}

export default Header