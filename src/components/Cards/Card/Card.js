import React, { useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import './Card.css'
import { AnimateSharedLayout } from "framer-motion"

export default function Card(props) {
    const [state, setState] = useState(true)
    return (
        <AnimateSharedLayout>
            {state
                ? <CompactCard atts={props.atts} setState={setState} />
                : <ExpandedCard atts={props.atts} setState={setState} />
            }
        </AnimateSharedLayout>
    )
}

function CompactCard(props) {
    let { barValue, color, icon, series, title, value } = props.atts
    let {setState} = props
    return (
        <div className='card' style={{ background: color.backGround, boxShadow: color.boxShadow }} onClick={()=>{setState(false)}}>
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

function ExpandedCard(props) {
    let { barValue, color, icon, series, title, value } = props.atts
    let { setState } = props
    return (
        <div className='expanded-card' style={{ background: color.backGround, boxShadow: color.boxShadow }}>
            <i className="fas fa-times" onClick={()=>{setState(true)}}></i>
            <div>{title}</div>
            <div>Last 24 hour</div>
        </div>
    )
}
