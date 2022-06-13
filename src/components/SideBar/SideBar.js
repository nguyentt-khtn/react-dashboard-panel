import React, { useState } from 'react'
import './SideBar.css'
import {Data} from '../../Data/Data'

export default function SideBar(props) {
    const [stateActive, setStateActive] = useState(0)
    return (
        <div className='side-bar'>
            <div className='brand'>
                <i className="fas fa-store"></i>
                <span>Shops</span>
            </div>
            <div className='menu'>
                {Data.map((item,index)=>{
                    return <div className={stateActive === index ? 'item active':'item'} key={index} onClick={()=> {setStateActive(index)}}>
                    {item.icon}
                    <span>{item.title}</span>
                </div>
                })}
            </div>

        </div>
    )
}
