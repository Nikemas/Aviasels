import React from 'react'
import s from './Navbar.module.css'

export const Navbar = ({renderData, tikets}) => {
    const [filter, setFilter] = React.useState({all: false, one: false, two: false, three: false,nonstop: false})

    const fillHander = (event) => {
        switch (event) {
            case 'all':
                const al = tikets.filter( tiket => {
                    return tiket
                })
                setFilter({...al, all: !al.all})
                break;
            case 'nonstop':
                const filter0 = tikets.filter( tiket => {
                    if(tiket.transfers.length === 0){
                        return tiket
                    }
                })
                    setFilter({...filter0, one: !filter0.one})
                    renderData(filter0)
                break;
            case 'one':
                    const filter = tikets.filter( tiket => {
                        if(tiket.transfers.length === 1){
                            return tiket
                        }
                    })
                    setFilter({...filter, one: !filter.one})
                    renderData(filter)
                break;
            case 'two':
                const filter2 = tikets.filter( tiket => {
                    if(tiket.transfers.length === 2){
                        return tiket
                    }
                })
                setFilter({...filter2, two: !filter2.two})
                renderData(filter2)
                break;
                
                case 'three':
                    const filter3 = tikets.filter( tiket => {
                        if(tiket.transfers.length === 3){
                            return tiket
                        }
                })
                setFilter({...filter3, three: !filter3.three})
                renderData(filter3)
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
                    onChange={() => fillHander('all')}
                    />
                    <span>Все</span>    
                </label>    
                <label className={s.form__checkbox}>
                    <input 
                    type="checkbox" 
                    id={s.check}
                    checked={filter.nonstop}
                    onChange={() => fillHander('nonstop')}
                    />
                    <span>Без пересадок</span>    
                </label>  
                <label className={s.form__checkbox}>
                    <input 
                    type="checkbox" 
                    id={s.check}
                    checked={filter.one}
                    onChange={() => fillHander('one')}
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
                        onChange={() => fillHander('three')}
                        />
                        <span>3 пересадки </span>    
                    </label>  
            </div>
        </div>
  )
}
