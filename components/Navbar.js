import Image from 'next/image';
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import { useState } from 'react';

const Navbar = () => {
    const [homeEffect, setHomeEffect] = useState(false)
    const [aboutEffect, setAboutEffect] = useState(false)
    const [projectsEffect, setProjectsEffect] = useState(false)
    const [contactEffect, setContactEffect] = useState(false)
    const [resumeEffect, setResumeEffect] = useState(false)
    const [githubEffect, setGithubEffect] = useState(false)
    const [twitterEffect, setTwitterEffect] = useState(false)
    const [linkedinEffect, setLinkedinEffect] = useState(false)
    
   

    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <Link href="#home">
                    <a>
                        <Image src="/logo.png" className={styles.img} width={32} height={30} />
                    </a>
                </Link>
            </div>
            <nav className={styles.nav}>
                <Link href="/" exact>
                    <a className={styles.home}>
                        <Image src="/home.png" onMouseEnter={() => setHomeEffect(true)} onMouseLeave={() => setHomeEffect(false)} width={23} height={19} />
                        {homeEffect ? <h2 className={styles.active}>Home</h2> : <h2 className={styles.inactive}>About</h2>}
                    </a>
                </Link>
                <Link href='/#about'>
                    <a className={styles.about}>
                        <Image src="/about.png" onMouseEnter={() => setAboutEffect(true)} onMouseLeave={() => setAboutEffect(false)} width={20} height={18} />
                        {aboutEffect ? <h2 className={styles.active}>About me</h2> : <h2 className={styles.inactive}>About me</h2>}
                    </a>
                </Link>
                <Link href="#project">
                    <a className={styles.project}>
                        <Image src="/projects.png" onMouseEnter={() => setProjectsEffect(true)} onMouseLeave={() => setProjectsEffect(false)} width={20} height={20} />
                        {projectsEffect ? <h2 className={styles.active}>My projects</h2> : <h2 className={styles.inactive}>My projects</h2>}
                    </a>
                </Link>
                <Link href="#contact">
                    <a className={styles.contact}>
                        <Image src="/contact.png" onMouseEnter={() => setContactEffect(true)} onMouseLeave={() => setContactEffect(false)} width={20} height={13} />
                        {contactEffect ? <h2 className={styles.active}>Contact me</h2> : <h2 className={styles.inactive}>Contact me</h2>}
                    </a>
                </Link>
            </nav>
            <nav className={styles.nav2}>
                <Link href="https://drive.google.com/file/d/1VXAbgYk95c3yc8so_r4ya9ub7NATZHn7/view?usp=sharing">
                    <a className={styles.resume} target="_blank" rel="noreferrer noopener">
                        <Image src="/resume.png" onMouseEnter={() => setResumeEffect(true)} onMouseLeave={() => setResumeEffect(false)} width={30} height={30} />
                        {resumeEffect ? <h2 className={styles.active}>My resume</h2> : <h2 className={styles.inactive}>My resume</h2>}
                    </a>
                </Link>
                <Link href="#github">
                    <a className={styles.github}>
                        <Image src="/github-navbar.png" onMouseEnter={() => setGithubEffect(true)} onMouseLeave={() => setGithubEffect(false)} width={20} height={20} />
                        {githubEffect ? <h2 className={styles.active}>Repository</h2> : <h2 className={styles.inactive}>Repository</h2>}
                    </a>
                </Link>
                <Link href="#twitter">
                    <a className={styles.twitter}>
                        <Image src="/twitter.png" onMouseEnter={() => setTwitterEffect(true)} onMouseLeave={() => setTwitterEffect(false)} width={20} height={20} />
                        {twitterEffect ? <h2 className={styles.active}>Twitter</h2> : <h2 className={styles.inactive}>Twitter</h2>}
                    </a>
                </Link>
                <Link href="#linkedin">
                    <a className={styles.linkedin}>
                        <Image src="/linkedin.png" onMouseEnter={() => setLinkedinEffect(true)} onMouseLeave={() => setLinkedinEffect(false)} width={20} height={20} />
                        {linkedinEffect ? <h2 className={styles.active}>LinkedIn</h2> : <h2 className={styles.inactive}>LinkedIn</h2>}
                    </a>
                </Link>
            </nav>
        </div >
    )
}

export default Navbar
