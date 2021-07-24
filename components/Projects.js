import Image from 'next/image';
import Link from 'next/link'
import styles from '../styles/Projects.module.css'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer'

const Projects = () => {
    const {ref, inView} = useInView();
    const animation = useAnimation();

    useEffect(() => {
        console.log('test', inView)
        if(inView) {
            animation.start({
                opacity: 1,
                transition: {
                    ease: "easeInOut", duration: 1, bounce: 1
                }
            })
        }
        if(!inView) {
            animation.start({opacity: 0})
        }
    }, [inView])

    return (
        <motion.div animate={animation} ref={ref} className={styles.container} id="project">
            <h1>Projects I’ve Built</h1>
            <div className={styles.allProjects}>
                <div className={styles.project}>
                    <h2>Client Portfolio</h2>
                    <p>We MAY have printed out all your names on our wall… or we may have just had a pint and cheers’ed you all. But seriously… you all rock.</p>
                    <Link href="#">
                        <a className={styles.githubImg}>
                            <Image src="/project-btn.png" alt="Client Portfolio" width={87} height={38} />
                        </a>
                    </Link>
                </div>
                <div className={styles.project}>
                    <h2>Todo List</h2>
                    <p>We MAY have printed out all your names on our wall… or we may have just had a pint and cheers’ed you all. But seriously… you all rock.</p>
                    <Link href="#">
                        <a className={styles.githubImg}>
                            <Image src="/project-btn.png" alt="Todo List" width={87} height={38} />
                        </a>
                    </Link>
                </div>
                <div className={styles.project}>
                    <h2>Spanding Cards</h2>
                    <p>We MAY have printed out all your names on our wall… or we may have just had a pint and cheers’ed you all. But seriously… you all rock.</p>
                    <Link href="#">
                        <a className={styles.githubImg}>
                            <Image src="/project-btn.png" alt="Spanding Cards" width={87} height={38} />
                        </a>
                    </Link>
                </div>
            </div>
            <h2 className={styles.seeMore}>See more...</h2>
        </motion.div>
    )
}

export default Projects
