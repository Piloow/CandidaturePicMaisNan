import './styles/Content.css'
import React from "react";
import ban_fact from "./assets/ban_fact.png";
import pic_fact from "./assets/pic_fact.png";


function Factures() {
    return (
        <div className='main-screen'>
            <div className='main-title'>
                Factures
            </div>
            <div className='screen-content'>
                <img src={ban_fact} alt='Logo factures' style={{width:'100vw'}}/>
                <img src={pic_fact} alt='Logo factures' style={{width:'100vw'}}/>
            </div>
        </div>
    );
}

export default Factures