import Image from 'next/image';
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div>
                <Image src="/logo-footer.png" width={139} height={74} />
            </div>
            <p>@2021 Designed & Built by Christian Lumapay</p>
        </footer>
    )
}

export default Footer
