import React from 'react'
import Leftsidebar from "../../Component/LeftSidebar/LeftSidebar"
import RightSidebar from '../../Component/RightSidebar/RightSidebar'
import QuestionsDetails from './QuestionsDetails'

const DisplayQuestion=()=>{
    return(
        <div className='home-container-1'>
            <Leftsidebar/>
            <div className='home-container-2'>
            <QuestionsDetails/>
            <RightSidebar/>
            </div>
        </div>
    )
}
export default DisplayQuestion