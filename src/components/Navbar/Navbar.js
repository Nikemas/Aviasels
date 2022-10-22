import React from 'react'
import { tikets } from '../utils/data'
import s from './Navbar.module.css'
const statickTikets = [...tikets]

export const Navbar = ({renderData, tikets}) => {
    const [filter, setFilter] = React.useState({all: false, one: false, two: false, three: false,nonstop: false})

    const filterHander = (event) => {
        switch (event) {
            case 'two':
                const filterByTwo = tikets.filter( tiket => {
                    if(tiket.transfers.length === 2)
                    return tiket
                })
                
                if(!filter.two){
                    setFilter({...filter, two: true})
                    renderData(filterByTwo)
                }else{
                    setFilter({...filter, two: false})
                    renderData(statickTikets)
                }
                
                break;
                case 'one':
                    const filterByOne = tikets.filter( tiket => {
                        if(tiket.transfers.length === 1)
                        return tiket
                    })
                    
                    if(!filter.one){
                        setFilter({...filter, one: true})
                        renderData(filterByOne)
                    }else{
                        setFilter({...filter, one: false})
                        renderData(statickTikets)
                    }
                    
                    break;
                case 'all':
                    if (!filter.all) {
                        setFilter({all: true, nonstop: true, one: true, two: true, three: true,})
                    }else{
                        setFilter({all: false, nonstop: false, one: false, two: false, three: false,})
                    }
                    renderData(statickTikets)
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
                    checked={filter.all}
                    onChange={() => filterHander('all')}
                    />
                    <span>Все</span>    
                </label>    
                <label className={s.form__checkbox}>
                    <input 
                    type="checkbox" 
                    id={s.check}
                    checked={filter.nonstop}
                    onChange={() => filterHander('nonstop')}
                    />
                    <span>Без пересадок</span>    
                </label>  
                <label className={s.form__checkbox}>
                    <input 
                    type="checkbox" 
                    id={s.check}
                    checked={filter.one}
                    onChange={() => filterHander('one')}
                    />
                    <span>1 пересадка</span>    
                </label>  
                <label className={s.form__checkbox}>
                    <input 
                    type="checkbox" 
                    id={s.check}
                    checked={filter.two}
                    onChange={() => filterHander('two')}
                    />
                    <span>2 пересадки</span>    
                </label>  
                    <label className={s.form__checkbox}>
                        <input 
                        type="checkbox" 
                        id={s.check}
                        checked={filter.three}
                        onChange={() => filterHander('three')}
                        />
                        <span>3 пересадки </span>    
                    </label>  
            </div>
        </div>
  )
}
