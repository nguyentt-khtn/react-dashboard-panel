import React, { useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import './Card.css'
import { AnimateSharedLayout, motion } from "framer-motion"
import Chart from 'react-apexcharts'

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
    let { setState } = props
    return (
        <motion.div layoutId='expandedCard' className='card' style={{ background: color.backGround, boxShadow: color.boxShadow }} onClick={() => { setState(false) }}>
            <div className='col-1'>
                <div className='circle'><CircularProgressbar value={barValue} text={`${barValue}%`} /></div>
                <div className='title'>{title}</div>
            </div>
            <div className='col-2'>
                <div>{icon}</div>
                <div>${value}</div>
                <div>Last 24 hours</div>
            </div>
        </motion.div>
    )
}

function ExpandedCard(props) {
    let { barValue, color, icon, series, title, value } = props.atts
    let options = {
        chart: {
            type: 'area',
            height: 'auto'
        },
        dropShadow: {
            enable: false,
            enableOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: '#000',
            opacity: 0.35
        },
        fill: {
            colors: ['#fff'],
            type: 'gradient',
        },
        dataLabels: {
            enable: false,
        },
        stroke: {
            curve: 'smooth',
            colors: ['white']
        },
        tootip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            }
        },
        grid: {
            show: true
        },
        xaxis: {
            type: 'datetime',
            categories: [
                '2018-09-19T00:00:00.000Z',
                '2018-09-19T01:30:00.000Z',
                '2018-09-19T02:30:00.000Z',
                '2018-09-19T03:30:00.000Z',
                '2018-09-19T04:30:00.000Z',
                '2018-09-19T05:30:00.000Z',
                '2018-09-19T06:30:00.000Z',
            ]
        },


    }
    let { setState } = props
    return (
        <motion.div className='expanded-card' style={{ background: color.backGround, boxShadow: color.boxShadow }}
        layoutId='expandedCard'>
            <i style={{alignSelf:'flex-end',marginTop:'-15px', color:'#fff', marginBottom:'5px'}} className="fas fa-times" onClick={() => { setState(true) }}></i>
            <div style={{fontSize:'35px', color:'white'}}>{title}</div>
            <div className='chart'>
                <Chart options={options} series={series} type="area"/>
            </div>
            <div style={{color:'white', fontWeight:'700'}}>Last 24 hour</div>
        </motion.div>
    )
}
