import './styles/Content.css'
import React from "react";
import ban_perms from "./assets/ban_perms.png";
import pic_perms from "./assets/pic_perms.png";

function Perms() {
    return (
        <div className='main-screen'>
            <div className='main-title'>
                Perms
            </div>
            <div className='screen-content'>
                <img src={ban_perms} alt='Logo factures' style={{width:'100vw'}}/>
                <img src={pic_perms} alt='Logo factures' style={{width:'100vw'}}/>
            </div>
        </div>
    );
}

export default Perms