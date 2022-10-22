import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import s from './Main.module.css'
import { TiketList } from '../TiketList/TiketList'
import { tikets } from '../utils/data'


export const Main = () => {
  const [data, setData] = React.useState([...tikets])
  
  const renderData = (arr) => {
        setData(arr)
  }

  return (
        <div className={s.main}>
            <div className={s.main__wrapper}>
                <Navbar renderData={renderData} tikets={data}/>
                <div className={s.main__list}>
                <TiketList tikets={data}/>
                </div>
            </div>
        </div>
  )
}
