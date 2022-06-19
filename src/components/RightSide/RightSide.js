import React from 'react'
import Customer from '../Customer/Customer'
import UpdateNews from '../UpdateNews/UpdateNews'
import './RightSide.css'

export default function RightSide() {
    return (
        <div className='right-side'>
            <div className='title'>Updates</div>
            <UpdateNews />
            <div className='title'>Customer Review</div>
            <Customer />
        </div>
    )
}
