import styles from '../styles/WExperience.module.css'

const WExperience = () => {
    return (
        <div className={styles.container}>
            <h1>Worked Experience:</h1>
            <div className={styles.experience}>
                <div className={styles.company}>
                    <h2>Home Based Virtual Assistant / Freelance Web design</h2>
                    <p>Jan 2020 - present</p>
                </div>
                <p className={styles.rule}>Admin assistant, Graphics editing, Data Entry, Lead Generation, Social Media Management, Calendar Management, CRM, Portfolio website</p>
            </div>
            <div className={styles.experience}>
                <div className={styles.company}>
                    <h2>Elevated Perspective (Virtual Assistant)</h2>
                    <p>Oct 2019 - Dec 2019</p>
                </div>
                <p className={styles.rule}>Admin assistant, Graphics Design, Audio editing, Data Entry, Lead Generation, Social Media Management, Calendar Management, Website management</p>
            </div>
            <div className={styles.experience}>
                <div className={styles.company}>
                    <h2>123Employee (Virtual Assistant)</h2>
                    <p>Nov 2016 - Oct 2019</p>
                </div>
                <p className={styles.rule}>Admin assistant, Graphics Design, Audio editing, Data Entry, Lead Generation, Social Media Management, Calendar Management, Website management</p>
            </div>
            <p>My previous colleagues know me as a highly creative, and motivated virtual assistant who can always be trusted to come up with a new approach</p>
        </div>
    )
}

export default WExperience
