import styles from '../styles/About.module.css'
import Image from 'next/image';
import Link from 'next/link'

const About = () => {
    return (
        <div className={styles.container} id="about">
            <div className={styles.containerA}>
                <div>
                    <h2>A little about my self</h2>
                    <p>{`Hello! My name is Christian and I'm a virtual assistant and a self-taught web developer. I enjoy building and creating modern websites with HTML, CSS, and JavaScript. I started as a virtual assistant back in 2016, focus on administrative tasks. Although I know WordPress and Shopify back then as few of my previous clients is using this platform. My interest in web development through programming language started in January (2021) when I've seen a post on the internet about modern websites and it caught my interest.  <br /> <br /> Fast-forward to today. I have done a Udemy course and I'm starting building projects.`}</p>
                    <div className={styles.imgContainerA}>
                        <Image src="/line.png" width={40} height={1} />
                        <h2>View Projects</h2>
                        <Link href="#project">
                            <a className={styles.downArrow}>
                                <Image src="/down-arrow.png" width={27} height={27} />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={styles.image}>
                    <Image src="/myphoto.png" className={styles.img} width={255} height={256} />
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image src="/line.png" width={40} height={1} />
                <h2>View Projects</h2>
                <Link href="#project">
                    <a className={styles.downArrow}>
                        <Image src="/down-arrow.png" width={27} height={27} />
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default About
