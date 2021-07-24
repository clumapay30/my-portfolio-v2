import styles from "../styles/Contact.module.css"
const Contact = () => {
    return (
        <div className={styles.container} id="contact">
            <h1>Get In Touch</h1>
            <form className={styles.contactForm}>
                <div className={styles.formWrapper}>
                    <div className="form-left">
                        <div className={styles.inputText}>
                            <label htmlFor="name" className="form-text label">Name</label>
                            <input type="text"
                                className="name"
                                id="name" />
                            {/* {nameInputIsvalid && <p className="text-error">Name must not be empty.</p>} */}
                        </div>
                        <div className={styles.inputText}>
                            <label htmlFor="email" className="form-text label">Email</label>
                            <input type="email"
                                className="email"
                                id="email" />
                            {/* {emailInputIsvalid && <p className="text-error">Email must be correct or must not be empty.</p>} */}
                        </div>
                    </div>
                    <div className={styles.inputText}>
                        <label htmlFor="textarea" className="form-text label">Message</label>
                        <textarea type="textarea"
                            className="message"
                            id="message"
                            cols="30"
                            rows="10">
                        </textarea>
                        {/* {textInputIsvalid && <p className="text-error">Message must not be empty.</p>} */}
                    </div>
                </div>
                <div className={styles.btn}>
                    <h2 type="submit" id="button">Submit</h2>
                </div>
            </form>
        </div>
    )
}

export default Contact
