import Image from 'next/image';
import Link from 'next/link'
import styles from '../styles/Projects.module.css'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer'

const Projects = () => {
    const { ref, inView } = useInView();
    const animation = useAnimation();

    useEffect(() => {
        console.log('test', inView)
        if (inView) {
            animation.start({
                opacity: 1,
                transition: {
                    ease: "easeInOut", duration: 1, bounce: 1
                }
            })
        }
        if (!inView) {
            animation.start({ opacity: 0 })
        }
    }, [inView])

    return (
        <motion.div animate={animation} ref={ref} className={styles.container} id="project">
            <h1>Projects I’ve Built</h1>
            <div className={styles.allProjects}>
                <div className={styles.project}>
                    <h2>Client Portfolio</h2>
                    <p>My first project as a freelance web designer. This project was done by vanilla js. I will try to recreate this project with Reactjs and add animation once I have a free time</p>
                    <Link href="https://github.com/clumapay30/camille-v2-nodejs">
                        <a target="_blank" rel="noreferrer noopener" className={styles.githubImg}>
                            <Image src="/project-btn.png" alt="Client Portfolio" width={87} height={38} />
                        </a>
                    </Link>
                </div>
                <div className={styles.project}>
                    <h2>Todo List</h2>
                    <p>{`One of my quick project when I'm starting to get used to javascript.`}</p>
                    <Link href="https://github.com/clumapay30/todo-list">
                        <a target="_blank" rel="noreferrer noopener" className={styles.githubImg}>
                            <Image src="/project-btn.png" alt="Todo List" width={87} height={38} />
                        </a>
                    </Link>
                    <Link href="https://clumapay30.github.io/todo-list/">
                        <a target="_blank" rel="noreferrer noopener" className={styles.demoImg}>
                            <Image src="/demo-btn.png" alt="Client Portfolio" width={87} height={38} />
                        </a>
                    </Link>
                </div>
                <div className={styles.project}>
                    <h2>Expand Card</h2>
                    <p>{`One of my quick project when I'm starting to get used to javascript.`}</p>
                    <Link href="https://github.com/clumapay30/expanding-cards">
                        <a target="_blank" rel="noreferrer noopener" className={styles.githubImg}>
                            <Image src="/project-btn.png" alt="Spanding Cards" width={87} height={38} />
                        </a>
                    </Link>
                    <Link href="https://clumapay30.github.io/expanding-cards/">
                        <a target="_blank" rel="noreferrer noopener" className={styles.demoImg}>
                            <Image src="/demo-btn.png" alt="Client Portfolio" width={87} height={38} />
                        </a>
                    </Link>
                </div>
                <div className={styles.project}>
                    <h2>Strength password</h2>
                    <p>{`One of my quick project when I'm starting to get used to javascript.`}</p>
                    <Link href="https://github.com/clumapay30/strength-password">
                        <a target="_blank" rel="noreferrer noopener" className={styles.githubImg}>
                            <Image src="/project-btn.png" alt="Spanding Cards" width={87} height={38} />
                        </a>
                    </Link>
                    <Link href="https://clumapay30.github.io/strength-password/">
                        <a target="_blank" rel="noreferrer noopener" className={styles.demoImg}>
                            <Image src="/demo-btn.png" alt="Client Portfolio" width={87} height={38} />
                        </a>
                    </Link>
                </div>
                <div className={styles.project}>
                    <h2>Calculator</h2>
                    <p>{`One of my quick project when I'm starting to get used to javascript.`}</p>
                    <Link href="https://github.com/clumapay30/calculator">
                        <a target="_blank" rel="noreferrer noopener" className={styles.githubImg}>
                            <Image src="/project-btn.png" alt="Spanding Cards" width={87} height={38} />
                        </a>
                    </Link>
                    <Link href="https://clumapay30.github.io/calculator/">
                        <a target="_blank" rel="noreferrer noopener" className={styles.demoImg}>
                            <Image src="/demo-btn.png" alt="Client Portfolio" width={87} height={38} />
                        </a>
                    </Link>
                </div>
            </div>
            {/* <h2 className={styles.seeMore}>See more...</h2> */}
        </motion.div>
    )
}

export default Projects
