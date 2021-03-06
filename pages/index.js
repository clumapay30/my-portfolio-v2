import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.container} id="home">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <div className={styles.containerLeft}>
        <h3>Hi,</h3>
        <h1>{`I'm Christian Lumapay`}</h1>
        <p>Virtual assistant | Web Designer & Developer</p>
        <div className={styles.herobtn}>
          <Link href="#contact">
            <a className={styles.btn}>Get in touch</a>
          </Link>
          <Link href="https://calendly.com/clumapay-info/15min">
            <a target="_blank" rel="noreferrer noopener" className={styles.btn}>Schedule a meeting</a>
          </Link>
        </div>
      </div>
      {/* <div className={styles.image}>
        <Image src="/hero-script.png" className={styles.img} width={380} height={522} />
      </div> */}
    </div >
  )
}

// ?background_color=354f52&text_color=f1fffa&primary_color=fff