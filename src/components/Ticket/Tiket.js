import React from 'react'
import s from './Tiket.module.css'

export const Tiket = (props) => {
    const {price, id, company, way, transfers} = props
  return (
        <div className={s.tiket}>
            <div className={s.tiket__price}>{price} Р</div>
            <div className={s.tiket__info}>
                <div className={s.ticket__company}>
                    <div className={s.tiket__head}>Авиакомпания</div>
                    <div className={s.tiket__company_name}>{company}</div>
                </div>
                <div className={s.ticket__way}>
                    <div className={s.tiket__head}>В пути</div>
                    <div className={s.tiket__way_name}>{way}</div>
                </div>
                <div className={s.ticket__transfer}>
                    <div className={s.tiket__head}>Пересадки</div>
                    <div className={s.tiket__transfer_name}>{transfers.join(', ')}</div>
                </div>
            </div>
        </div>
  )
}
