import React from 'react'
import { Header } from '../Header/Header'
import { Main } from '../Main/Main'
import s from './App.css'

export const App = () => {
  return (
    <div className={s.wra}>
    <Header/>
    <Main/>
    </div>
  )
}
