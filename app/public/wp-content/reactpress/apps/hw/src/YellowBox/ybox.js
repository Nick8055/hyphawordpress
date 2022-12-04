import './ybox.css';
import WhatsappIcon from "./Whatsapp Icon.png";
import RelationIcon from "./Relation Icon.png"
import AllInOneIcon from "./AllInOne Icon.png"
import {useEffect, useState} from 'react';



const YellowBoxDetails = ({Icon, Heading, Desc}) => {



    return(
        <div className='YellowBoxDetails'>
            <img className='yellowIcon' src={Icon}></img>
            <div className='yellowHeading'>{Heading}</div>
            <div className='yellowDesc'>{Desc}</div>
        </div>
    )
}

const YellowBox = () => {
    return(
        <div className='MainContainer'>
            <div className='greenRectangle'></div>
            <div className='YellowBox'>
                <YellowBoxDetails Icon={RelationIcon} Heading={"Build strong patient relations"} Desc={"Designed to strengthen your patient relations"}></YellowBoxDetails>
                <YellowBoxDetails Icon={WhatsappIcon} Heading={"Whatsapp notifications"} Desc={"Share patient documents with a single click"}></YellowBoxDetails>
                <YellowBoxDetails Icon={AllInOneIcon} Heading={"All-in-One workspace"} Desc={"Manage your entire medical practice in one platform"}></YellowBoxDetails>
            </div>
        </div>
    )
}

export default YellowBox;