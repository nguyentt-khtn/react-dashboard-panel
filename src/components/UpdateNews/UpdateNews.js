import React from 'react'
import './UpdateNews.css'
import { RightSide } from '../../Data/Data'

export default function UpdateNews() {
    return (
        <div className='updates'>
            {RightSide.map((item, index) => {
                return <div className='card-update' key={index}>
                    <div className='img'>
                        <img src={item.img} />
                    </div>
                    <div className='text'>
                        <div><b>{item.name} </b>{item.noti} </div>
                        <div style={{marginTop:'0.5rem'}}>{item.time} </div>
                    </div>
                </div>
            })}
        </div>
    )
}
