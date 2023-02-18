import React from 'react'
import '../../App.css'
import Leftsidebar from "../../Component/LeftSidebar/LeftSidebar"
import RightSidebar from '../../Component/RightSidebar/RightSidebar'
import HomeMainbar from '../../Component/HomeMainbar/HomeMainbar'

const Questions= () => {
    return (
        <div className='home-container-1'>
            <Leftsidebar/>
            <div className='home container-2'>
            <RightSidebar/>
            <HomeMainbar/>
            </div>
        </div>
    )
}

export default Questions