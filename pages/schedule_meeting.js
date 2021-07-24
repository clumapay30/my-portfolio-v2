import { InlineWidget } from "react-calendly";
import styles from '../styles/Calendly.module.css'

const Calendly = () => {
    return (
        <div className={styles.calendly}>
            <InlineWidget url="https://calendly.com/clumapay-info/15min" pageSettings={{
                backgroundColor: '466569',
                hideEventTypeDetails: false,
                hideLandingPageDetails: true,
                primaryColor: 'fff',
                textColor: 'f1fffa'
            }} />
        </div>
    )
}

export default Calendly


