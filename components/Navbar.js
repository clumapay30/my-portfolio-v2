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
                        <Image src={homeEffect ? "/home-hover.png" : "/home.png"} onMouseEnter={() => setHomeEffect(true)} onMouseLeave={() => setHomeEffect(false)} width={23} height={19} />
                        {homeEffect ? <h2 className={styles.active}>Home</h2> : <h2 className={styles.inactive}>About</h2>}
                    </a>
                </Link>
                <Link href='/#about'>
                    <a className={styles.about}>
                        <Image src={!aboutEffect ? "/about.png" : "/about-hover.png"} onMouseEnter={() => setAboutEffect(true)} onMouseLeave={() => setAboutEffect(false)} width={20} height={18} />
                        {aboutEffect ? <h2 className={styles.active}>About me</h2> : <h2 className={styles.inactive}>About me</h2>}
                    </a>
                </Link>
                <Link href="#project">
                    <a className={styles.project}>
                        <Image src={!projectsEffect ? "/projects.png" : "/projects-hover.png"} onMouseEnter={() => setProjectsEffect(true)} onMouseLeave={() => setProjectsEffect(false)} width={20} height={20} />
                        {projectsEffect ? <h2 className={styles.active}>My projects</h2> : <h2 className={styles.inactive}>My projects</h2>}
                    </a>
                </Link>
                <Link href="#contact">
                    <a className={styles.contact}>
                        <Image src={!contactEffect ? "/contact.png" : "/contact-hover.png"} onMouseEnter={() => setContactEffect(true)} onMouseLeave={() => setContactEffect(false)} width={20} height={13} />
                        {contactEffect ? <h2 className={styles.active}>Contact me</h2> : <h2 className={styles.inactive}>Contact me</h2>}
                    </a>
                </Link>
            </nav>
            <nav className={styles.nav2}>
                <Link href="https://drive.google.com/file/d/1yiZ9QGD93-YnumPgxiWuWUKHCdxdVdJ-/view?usp=sharing">
                    <a className={styles.resume} target="_blank" rel="noreferrer noopener">
                        <Image src={!resumeEffect ? "/resume.png" : "/resume-hover.png"} onMouseEnter={() => setResumeEffect(true)} onMouseLeave={() => setResumeEffect(false)} width={20} height={22} />
                        {resumeEffect ? <h2 className={styles.active}>My resume</h2> : <h2 className={styles.inactive}>My resume</h2>}
                    </a>
                </Link>
                <Link href="https://github.com/clumapay30">
                    <a className={styles.github} target="_blank" rel="noreferrer noopener">
                        <Image src={!githubEffect ? "/github-navbar.png" : "/github-navbar-hover.png"} onMouseEnter={() => setGithubEffect(true)} onMouseLeave={() => setGithubEffect(false)} width={20} height={20} />
                        {githubEffect ? <h2 className={styles.active}>Repository</h2> : <h2 className={styles.inactive}>Repository</h2>}
                    </a>
                </Link>
                <Link href="https://twitter.com/c_lumapay30">
                    <a className={styles.twitter} target="_blank" rel="noreferrer noopener">
                        <Image src={!twitterEffect ? "/twitter.png" : "/twitter-hover.png"} onMouseEnter={() => setTwitterEffect(true)} onMouseLeave={() => setTwitterEffect(false)} width={20} height={18} />
                        {twitterEffect ? <h2 className={styles.active}>Twitter</h2> : <h2 className={styles.inactive}>Twitter</h2>}
                    </a>
                </Link>
                <Link href="https://www.linkedin.com/in/christian-virtual-assistant/">
                    <a className={styles.linkedin} target="_blank" rel="noreferrer noopener">
                        <Image src={!linkedinEffect ? "/linkedin.png" : "/linkedin-hover.png"} onMouseEnter={() => setLinkedinEffect(true)} onMouseLeave={() => setLinkedinEffect(false)} width={20} height={20} />
                        {linkedinEffect ? <h2 className={styles.active}>LinkedIn</h2> : <h2 className={styles.inactive}>LinkedIn</h2>}
                    </a>
                </Link>
            </nav>
        </div >
    )
}

export default Navbar
