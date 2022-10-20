import React from 'react'
import s from './Navbar.module.css'

export const Navbar = ({renderData, tikets}) => {
    const [filter, setFilter] = React.useState({all: false, one: false, two: false, three: false,nonstop: false})

    const fillHander = (event) => {
        switch (event) {
            case 'two':
                const filter = tikets.filter( tiket => {
                    if(tiket.transfers.length === 2){
                        return tiket
                    }
                })
                setFilter({...filter, two: !filter.two})
                renderData(filter)
            
                break;
        
            default:
                break;
        }
    }

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
                    onChange={() => fillHander('all')}
                    />
                    <span>Все</span>    
                </label>    
                <label className={s.form__checkbox}>
                    <input 
                    type="checkbox" 
                    id={s.check}
                    checked={filter.nonstop}
                    />
                    <span>Без пересадок</span>    
                </label>  
                <label className={s.form__checkbox}>
                    <input 
                    type="checkbox" 
                    id={s.check}
                    checked={filter.one}
                    />
                    <span>1 пересадка</span>    
                </label>  
                <label className={s.form__checkbox}>
                    <input 
                    type="checkbox" 
                    id={s.check}
                    checked={filter.two}
                    onChange={() => fillHander('two')}
                    />
                    <span>2 пересадки</span>    
                </label>  
                <label className={s.form__checkbox}>
                    <input 
                    type="checkbox" 
                    id={s.check}
                    checked={filter.three}
                    />
                    <span>3 пересадки </span>    
                </label>  
            </div>
        </div>
  )
}
