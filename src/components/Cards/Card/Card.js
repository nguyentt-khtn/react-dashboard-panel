import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import './Card.css'

export default function Card(props) {
    let { barValue, color, icon, series, title, value } = props.atts
    return (
        <div className='card' style={{ background: color.backGround, boxShadow: color.boxShadow }}>
            <div className='col-1'>
                <div className='circle'><CircularProgressbar value={barValue} text={`${barValue}%`} /></div>
                <div className='title'>{title}</div>
            </div>
            <div className='col-2'>
                <div>{icon}</div>
                <div>${value}</div>
                <div>Last 24 hours</div>
            </div>
        </div>
    )
}
