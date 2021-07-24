import styles from '../styles/WExperience.module.css'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer'

const WExperience = () => {
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
            <h1>Worked Experience:</h1>
            <motion.div animate={animation} className={styles.experience}>
                <div className={styles.company}>
                    <h2>Home Based Virtual Assistant / Freelance Web design</h2>
                    <p>Jan 2020 - present</p>
                </div>
                <p className={styles.rule}>Admin assistant, Graphics editing, Data Entry, Lead Generation, Social Media Management, Calendar Management, CRM, Portfolio website</p>
            </motion.div>
            <motion.div animate={animation} className={styles.experience}>
                <div className={styles.company}>
                    <h2>Elevated Perspective (Virtual Assistant)</h2>
                    <p>Oct 2019 - Dec 2019</p>
                </div>
                <p className={styles.rule}>Admin assistant, Graphics Design, Audio editing, Data Entry, Lead Generation, Social Media Management, Calendar Management, Website management</p>
            </motion.div>
            <motion.div animate={animation} className={styles.experience}>
                <div className={styles.company}>
                    <h2>123Employee (Virtual Assistant)</h2>
                    <p>Nov 2016 - Oct 2019</p>
                </div>
                <p className={styles.rule}>Admin assistant, Graphics Design, Audio editing, Data Entry, Lead Generation, Social Media Management, Calendar Management, Website management</p>
            </motion.div>
            <p>My previous colleagues know me as a highly creative, and motivated virtual assistant who can always be trusted to come up with a new approach</p>
        </motion.div>
    )
}

export default WExperience
