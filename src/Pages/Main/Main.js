import React from 'react'
import MainDash from '../../components/MainDash/MainDash'
import RightSide from '../../components/RightSide/RightSide'
import SideBar from '../../components/SideBar/SideBar'
import './Main.css'

export default function Main() {
    return (
        <div className='main'>
            <SideBar />
            <MainDash />
            <RightSide />
        </div>
    )
}
