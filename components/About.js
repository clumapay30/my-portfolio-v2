import styles from '../styles/About.module.css'
import Image from 'next/image';
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer'

const About = () => {
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
        <div ref={ref} className={styles.container} id="about">
            <div className={styles.containerA}>
                <motion.div
                    // initial={{ opacity: 0 }}
                    animate={animation}
                    // transition={{ duration: 2 }}
                >
                    <h2>A little about my self</h2>
                    <p>{`Hello! My name is Christian and I'm a virtual assistant and a self-taught web developer. I enjoy building and creating modern websites with HTML, CSS, and JavaScript. I started as a virtual assistant back in 2016, focus on administrative tasks. Although I know WordPress and Shopify back then as few of my previous clients is using this platform. My interest in web development through programming language started in January (2021) when I've seen a post on the internet about modern websites and it caught my interest.`} <br /> <br /> {`Fast-forward to today. I have done a Udemy course and I'm starting building projects.`}</p>
                    <div className={styles.imgContainerA}>
                        <Image src="/line.png" width={40} height={1} />
                        <h2>View Projects</h2>
                        <Link href="#project">
                            <a className={styles.downArrow}>
                                <Image src="/down-arrow.png" width={27} height={27} />
                            </a>
                        </Link>
                    </div>
                </motion.div>
                <motion.div animate={animation} className={styles.image}>
                    <Image src="/myphoto.png" className={styles.img} width={255} height={256} />
                </motion.div>
            </div>
            <motion.div animate={animation} className={styles.imgContainer}>
                <Image src="/line.png" width={40} height={1} />
                <h2>View Projects</h2>
                <Link href="#project">
                    <a className={styles.downArrow}>
                        <Image src="/down-arrow.png" width={27} height={27} />
                    </a>
                </Link>
            </motion.div>
        </div>
    )
}

export default About
