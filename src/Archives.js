import './styles/Content.css'
import React, {useEffect} from "react";
import {useAnimation, motion, useMotionValue, useTransform, animate} from "framer-motion"
import { useInView } from "react-intersection-observer";
import pic_bateau from "./assets/pic_bateau.jpeg";
import Ted_robot from "./assets/Ted_robot.png";
import ParallaxText from "./Bandeau.tsx";


const squareVariants = {
    visible: { opacity: 1, scale: 1, positionY: 0, transition: { duration: 1.5 } },
    hidden: { opacity: 0, scale: 0.9, positionY: 100 }
};

function Teddax() {
    const controls = useAnimation();
    const [inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return(
        <motion.div
            animate={{
                scale: [1, 1.5, 1.5, 1, 1],
                rotate: [0, 0, 360, 360, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"]
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.8, 1, 1],
                repeat: Infinity,
                repeatDelay: 1
            }}
            whileHover={{ scale: 1.2 }}>
            <img src={Ted_robot} alt='Logo de nous troo beauuu' style={{height: '10vh'}}/>
        </motion.div>
    );
}

function Box1() {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return(
        <motion.div className='box-center' ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={squareVariants}
                    style={{overflow: 'hidden'}}>
            <h2 style={{textAlign: 'center', marginBottom: '1vh'}}> Le Pic, <br/> un mode de vie</h2>
            <p style={{textAlign: 'justify', paddingInline: '2vw'}}>
                <span>Nouveau semestre, nouveau PIC. </span><br/>
                <span>Nous somme ravis de vous présenter le tout dernier PicA23,<br/> un Pic d'automne certes,
                mais un pic révolutionaire.</span><br/><br/>

                <span>Bon évidement trève de blabla, je suis en stage à Compiègne.</span><br/>
                <span>Je fais cette candidature pour la forme, si vous manquez de gens,
                    je sais que c'est pas idéal mais je suis réserviste au cas où !</span><br/><br/>

                <span>Vous n'imaginez pas à quel point c'est frustrant de voir deux
                    personnes que j'admire et que j'apprécie très profondement, présider un Pic
                    auquel on ne peut logiquement pas participer.</span><br/><br/>

                <span>J'avais donc l'envie et le besoin de faire cette candidature. <br/> Je vous paye un coup à la rentré !
                    Très heureux de vous avoir rencontrées ! </span><br/><br/>
            </p>
            <Teddax />
        </motion.div>
    );
}

function Box2() {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
        const animation = animate(count, 4320, { duration: 5 });
        return animation.stop;
    }, []);

    return(
        <motion.div
            className='box-left'
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={squareVariants}>

            <h2 style={{marginBottom: '0'}}>Une crétivité à toute épreuve.</h2>
            <div style={{width: '50vh', display:'flex',alignItems:'center',justifyContent: 'center',height:'15vh', flexDirection: 'column', marginTop: '3vh'}}>
                <motion.h4 style={{fontSize: '56px', color:'white', margin: '0',padding: '0', paddingBottom: '3vh'}}>{rounded}</motion.h4>
                <span style={{color:'white', fontSize:'16px', textAlign: 'center'}}>C'est le nombre de banger que vous <br/> allez faire ce semetre!</span>
            </div>

        </motion.div>
    );
}

function Box3() {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return(
        <motion.div className='box-left' ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={squareVariants}>
            <h2 style={{marginBottom: '2vh'}}>Infiniment plus</h2>
            <ul>
                <li style={{listStyle: 'disc', paddingBottom: '2vh', color: 'white'}}>GI03 / TN09</li>
                <li style={{listStyle: 'disc', paddingBottom: '2vh', color: 'white'}}>0,75 GPA TM et 1,69 Global</li>
                <li style={{listStyle: 'disc', paddingBottom: '2vh', color: 'white'}}>Bébé Sam</li>
                <li style={{listStyle: 'disc', paddingBottom: '2vh', color: 'white'}}>Un appart aussi bien rangé que la réserve</li>

            </ul>
        </motion.div>
    );
}

function Box4() {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return(
        <motion.div className='box-center' style={{height: '38vh', width: '128vh', alignItems: 'flex-start', paddingBottom: '2vh'}} ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={squareVariants}>
            <h2 style={{paddingInline : '1vw', marginBottom: '1vh'}}>Un parcours spectaculaire</h2>
            <div className='items-row' style={{paddingTop: 0, paddingInline: '2vw'}}>
                <div>
                    <h1>A22</h1>
                    <ul>
                        <li>Team WEI - Integ Fev</li>
                        <li>Team Info - Etuville</li>
                        <li>Team Sponso - Light UP (Dali jtm)</li>
                        <li>Team Log - NASA (Oui Oui)</li>
                    </ul>
                </div>
                <div>
                    <h1>P23</h1>
                    <ul>
                        <li>Team Info - PIC</li>
                        <li>Team Info - Integ</li>
                        <li>Resp Bar - Etuville (Bon...)<br/></li>
                    </ul>
                </div>
                <div>
                    <h1>A23</h1>
                    <ul>
                        <li>Prez - NASA</li>
                        <li>Resp Bar - Etuville (Bon...x2)</li>
                        <li>Stage - Safran <br/>(aie aie aie)</li>
                    </ul>
                </div>
            </div>
        </motion.div>
    );
}

function Box5() {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return(
        <motion.div className='box-left' style={{width: '57vh', fontSize: '18px'}}
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={squareVariants}>
            <h2 style={{marginBottom: '2vh'}}>Un comic sans précédent.</h2>
            <p style={{color: 'white'}}>
                <span>Fille : Maman je suis amourse du copain de papa !</span><br/><br/>
                <span>Mère : Mais enfin ! Il pourrait être ton père !</span><br/><br/>
                <span>Fille : Mais Maman l'amour n'a pas d'âge !</span><br/><br/>
                <span>Fille : Je ne parlais pas d'âge...</span><br/><br/>
            </p>
        </motion.div>
    );
}

function Box6() {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return(
        <motion.div className='box-left' style={{width: '57vh'}}
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={squareVariants}>
            <h2 style={{backgroundColor: 'white', marginBottom: '2vh'}}>Nos ambitions</h2>
            <p style={{color: 'white', fontSize: '18px'}}>
                <span>Vous l'aurez compris évidement, le Pic</span>
                <span style={{textDecoration: 'line-through'}}>Apple</span>
                <span> Asso, est une association d'avenir et de renouveau. Le nouveau modèle A23 est le plus pluissant jamais crée.</span>
                <br/>
                <br/>
                <span>Avec le tout dernier processeur POL intégré dans la <br/>team Info, il est le foyer le plus hight-tech jamais crée !</span>
            </p>
        </motion.div>
    );
}

function Archives() {

    return (
        <div>
            <div className='main-screen' style={{backgroundColor: '#161617'}}>
                <div className='main-title' style={{color: '#fbfbfd'}}>
                    <span style={{textDecoration: 'line-through'}}>Archives </span> <span  style={{marginLeft: '2vw'}}> Candidature</span>
                </div>
            </div>
            <div className='center' style={{backgroundColor: '#000000'}} >
                <div>
                    <h1 style={{color: '#d2d2d2', fontSize: '52px'}}>Pic. Voir plus loin.</h1>
                    <div className='center' style={{paddingBottom: '10vh'}}>
                        <img src={pic_bateau} className='center' alt='Logo de nous troo beauuu' style={{borderRadius: '3vh'}}/>
                    </div>
                </div>
            </div>
            <div className='center' style={{backgroundColor: '#161617'}}>
                <section>
                    <ParallaxText baseVelocity={5}>PIC ASSO</ParallaxText>
                </section>
                    <span style={{color: '#D2D2D2FF', paddingBlock: '1vh', fontSize: '28px'}}>
                        Pic A23 Pro et A23 Pro Max
                    </span>
                <section>
                    <ParallaxText baseVelocity={-5}>PIC ASSO</ParallaxText>
                </section>


                <div className='items' >
                    <Box1 />
                    <div style={{display:'flex', flexDirection:'column',justifyContent: 'space-between', height: '80vh', paddingLeft: '5vh'}}>
                        <Box2/>
                        <Box3/>
                    </div>
                </div>
                <div className='items' style={{flexDirection: "column"}} >
                    <Box4/>
                    <div className='items-row' style={{width: '130vh'}}>
                        <Box5/>
                        <Box6/>
                    </div>
                </div>
                <h5 style={{color: 'white', marginBottom: '0vh'}}>© Copyright to Ted Teddy Picasso</h5>
                <h5 style={{color: 'white'}}> Évidement l'entièrté du code de cette candidature à été écrit par mes soins,<br/>
                    vous trouverez le cde complet ici : https://github.com/Piloow/CandidaturePicMaisNan</h5>
            </div>
        </div>
    );
}

export default Archives