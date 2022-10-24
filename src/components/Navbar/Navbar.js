import React from 'react'
import { tikets } from '../utils/data'
import s from './Navbar.module.css'
const statickTikets = [...tikets]

export const Navbar = ({renderData, tikets}) => {
   
    return (
        <div className={s.navbar}>
            <div className={s.navbar__wrapper}>
                <label>
                <span className={s.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
                </label>
                <label className={s.form__checkbox}>
                    <input
                     type="checkbox"
                    id={s.check}
                    />
                    <span>Все</span>    
                </label>
            </div>
        </div>
  )
}
