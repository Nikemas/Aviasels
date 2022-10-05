import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import s from './Main.module.css'

export const Main = () => {
  return (
        <div className={s.main}>
            <div className={s.main__wrapper}>
                <Navbar/>
            </div>
        </div>
  )
}
