import React from 'react'
import s from './Navbar.module.css'

export const Navbar = () => {
  return (
    <div className={s.navbar}>
        <div className={s.navbar__wrapper}>
            <label>
            <span className={s.title}>КОЛЕЧЕСТВО ПЕРЕСАДОК</span>
            </label>
            <label className={s.form__checkbox}>
                <input type="checkbox" id={s.check}/>
                <span>Все</span>    
            </label>    
            <label className={s.form__checkbox}>
                <input type="checkbox" id={s.check} />
                <span>Без пересадок</span>    
            </label>  
            <label className={s.form__checkbox}>
                <input type="checkbox" id={s.check}/>
                <span>1 пересадка</span>    
            </label>  
            <label className={s.form__checkbox}>
                <input type="checkbox" id={s.check}/>
                <span>2 пересадки</span>    
            </label>  
            <label className={s.form__checkbox}>
                <input type="checkbox" id={s.check}/>
                <span>3 пересадки </span>    
            </label>  
        </div>
    </div>
  )
}
