import React from 'react'
import Cards from '../Cards/Cards'
import Table from '../Table/TableOrder'
import './MainDash.css'

export default function MainDash() {
    return (
        <div className='main-dash'>
            <div className='main-title'>Dashboard</div>
            <Cards />
            <div className='main-title'>Recent Orders</div>
            <Table />
        </div>
    )
}
