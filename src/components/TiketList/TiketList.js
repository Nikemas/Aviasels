import React from 'react'
import { Tiket } from '../Ticket/Tiket'

export const TiketList = ({tikets}) => {
  return (
    <>
       {
        tikets.map( tiket => {
            return(
                <Tiket {...tiket}/>
            )
        })
    }
    </>
  )
}
