import styles from '../styles/Skills.module.css'
import Image from 'next/image';
import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer'

const Skills = () => {
    const [frontEnd, setFrontEnd] = useState(false);
    const [backEnd, setBackEnd] = useState(true);
    const [cloudPlatform, setCloudPlatform] = useState(false);
    const [design, setDesign] = useState(false);

    const frontEndHandler = () => {
        setFrontEnd(true)
        setBackEnd(false)
        setCloudPlatform(false)
        setDesign(false)
    }

    const backEndHandler = () => {
        setFrontEnd(false)
        setBackEnd(true)
        setCloudPlatform(false)
        setDesign(false)
    }

    const designHandler = () => {
        setFrontEnd(false)
        setBackEnd(false)
        setCloudPlatform(false)
        setDesign(true)
    }

    const cloudPlatformHandler = () => {
        setFrontEnd(false)
        setBackEnd(false)
        setCloudPlatform(true)
        setDesign(false)
    }

    const {ref, inView} = useInView();
    const animation = useAnimation();

    useEffect(() => {
        console.log('test', inView)
        if(inView) {
            animation.start({
                opacity: 1,
                transition: {
                    duration: 1, bounce: 1
                }
            })
        }
        if(!inView) {
            animation.start({opacity: 0})
        }
    }, [inView])

    return (
        <motion.div animate={animation} ref={ref} className={styles.container}>
            <h1>Skills</h1>
            <div className={styles.logoFrontEnd}>
                <div className={`${styles.fontEnd} ${frontEnd ? styles.active : styles.inactive}`}>
                    <Image src="/html.png" width={46} height={52} />
                    <Image src="/css.png" width={46} height={52} />
                    <Image src="/javascript.png" width={50} height={50} />
                    <Image src="/bootstrap.png" width={50} height={50} />
                    <Image src="/react.png" width={45} height={45} />
                    <Image src="/nextjs.png" width={80} height={50} />
                </div>
                <div className={`${styles.backEnd} ${backEnd ? styles.active : styles.inactive}`}>
                    <Image src="/mongodb.png" width={137} height={51} />
                    <Image src="/nodejs.png" width={83} height={51} />
                </div>
                <div className={`${styles.platform} ${cloudPlatform ? styles.active : styles.inactive}`}>
                    <Image src="/heroku.png" width={34} height={42} />
                    <Image src="/netlify.png" width={110} height={34} />
                    <Image src="/shopify.png" width={45} height={51} />
                    <Image src="/wordpress.png" width={51} height={51} />
                </div>
                <div className={`${styles.design} ${design ? styles.active : styles.inactive}`}>
                    <Image src="/photoshop.png" width={51} height={51} />
                    <Image src="/xd.png" width={52} height={51} />
                    <Image src="/canva.png" width={45} height={45} />
                </div>
            </div>
            <div className={styles.skillsRole}>
                <div>
                    <h2 className={`${frontEnd ? styles.focus : ""}`} onClick={frontEndHandler}>Front-end</h2>
                </div>
                <div>
                    <h2 className={`${backEnd ? styles.focus : ""}`} onClick={backEndHandler}>Back-end</h2>
                </div>
                <div>
                    <h2 className={`${cloudPlatform ? styles.focus : ""}`} onClick={cloudPlatformHandler}>Cloud & Platform</h2>
                </div>
                <div>
                    <h2 className={`${design ? styles.focus : ""}`} onClick={designHandler}>Design</h2>
                </div>
            </div>
        </motion.div>
    )
}

export default Skills
