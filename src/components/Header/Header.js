import React from 'react'
import s from './Header.module.css'
import logo from '../../images/logo.png'

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.header__img}>
                <img src={logo} alt="" />
            </div>
        </div>
    )
}
