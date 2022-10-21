import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import s from './Main.module.css'
import { TiketList } from '../TiketList/TiketList'

const tikets = [
  {
    id:1, price: '500 000', company: 'Lux Airline', way: '5ч 30м', transfers: ['KGZ', 'KZ']
},
{
    id: 2, price: '50 000', company: 'Islam Airline',way: '2д 15ч 30м', transfers: ['KGZ', 'KZ', 'HGK']
},
{
    id: 3, price: '1 000 000', company: 'Super Airlane', way: '10ч 20м', transfers: ['KZ', 'CN']
},
{
    id: 4, price: '55 000', company: 'Dasi superline', way: '2д 14ч 55м', transfers: ['KZ', 'ESP']
},
{
    id: 5, price: '250 000', company: 'Zero fastline', way: '1ч 5м', transfers: ['KOR']
},
{ 
    id: 6, price: '20 000', company: 'Econom Airline',  way: '7д 21ч 35м', transfers: ['US', 'UK', 'LU']
},
{ 
    id: 7, price: '10 000', company: 'SuperEconom Airline',  way: '1д 21ч 35м', transfers: ['BSH', 'OSH']
},
{ 
    id: 8, price: '40 000', company: 'Top Airline',  way: '11ч 35м', transfers: ['BSH', 'NAR']
},
{ 
    id: 9, price: '100 000', company: 'Ara Airline',  way: '1ч 35м', transfers: []
}
]

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
