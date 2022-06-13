import React from 'react'
import {CardData} from '../../Data/Data'
import Card from './Card/Card'
import  './Cards.css'

export default function Cards(props) {
    return (
        <div className='cards'>
            {CardData.map((item,index)=>{
                return <Card atts={item} key={index} />
            })}
        </div>
    )
}


