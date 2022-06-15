import React from 'react'
import Cards from '../Cards/Cards'
import Table from '../Table/TableOrder'
import './MainDash.css'

export default function MainDash() {
    return (
        <div className='main-dash'>
            <h3>Dashboard</h3>
            <Cards />
            <h3>Recent Orders</h3>
            <Table />
        </div>
    )
}
