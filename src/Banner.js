import './styles/Banner.css'
import { Link } from "react-router-dom";
import factures from "./assets/Factures.png";
import perms from "./assets/Perms.png";
import tva from "./assets/TVA.png";
import deco from "./assets/deconnexion.png";


function Banner() {
    return (
        <div className='pic-banner'>
            <div className='banner-left'>
                <Link to='/' className='link'><h1 className='banner-comp' style={{fontSize: 'large'}}>PICSOUS</h1></Link>
                <Link to={'/perms'} className='link'>
                    <div className='banner-comp'>
                        <img src={perms} alt='Logo perms' className='banner-logo'/>
                        <h1 style={{fontSize: 'large'}}>Perms</h1>
                    </div>
                </Link>
                <Link to={'/factures'} className='link'>
                    <div className='banner-comp'>
                        <img src={factures} alt='Logo factures' className='banner-logo'/>
                        <h1 style={{fontSize: 'large'}}>Factures</h1>
                    </div>
                </Link>
                <Link to={'/TVA'} className='link'>
                    <div className='banner-comp'>
                        <img src={tva} alt='Logo factures' className='banner-logo'/>
                        <h1 style={{fontSize: 'large'}}>Analyse TVA</h1>
                    </div>
                </Link>
            </div>
            <div className='banner-right'>

                <Link to={'/archives'} className='link'>
                    <div className='banner-comp'>
                        <h1 style={{fontSize: 'large'}}>Archives ?</h1>
                    </div>
                </Link>
                <Link to={'/logout'} className='link'>
                    <div className='banner-comp'>
                        <img src={deco} alt='Logo factures' className='banner-logo' style={{innerWidth: '20'}}/>
                        <h1 style={{fontSize: 'large'}}>Deconnexion</h1>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Banner