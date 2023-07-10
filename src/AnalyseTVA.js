import './styles/Content.css'
import React from "react";
import ban_tva from "./assets/ban_tva.png";
import pic_tva from "./assets/pic_tva.png";


function TVA() {


    return (
        <div className='main-screen'>
            <div className='main-title'>
                Analyse TVA
            </div>
            <div className='screen-content'>
                <img src={ban_tva} alt='Logo factures' style={{width:'100vw'}}/>
                <img src={pic_tva} alt='Logo factures' style={{width:'100vw'}}/>
            </div>
        </div>
    );
}

export default TVA