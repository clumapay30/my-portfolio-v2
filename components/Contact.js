import styles from "../styles/Contact.module.css"
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer'

const Contact = () => {
    const { ref, inView } = useInView();
    const animation = useAnimation();

    useEffect(() => {
        console.log('test', inView)
        if (inView) {
            animation.start({
                opacity: 1,
                transition: {
                    duration: .5, bounce: 1
                }
            })
        }
        if (!inView) {
            animation.start({ opacity: 0, transition: { duration: 1 } })
        }
    }, [inView])

    // email 
    const [enteredName, setEnteredName] = useState('')
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredText, setEnteredText] = useState('')

    const [enteredNameTouched, setEnteredNameTouched] = useState(false)
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)
    const [enteredTextTouched, setEnteredTextTouched] = useState(false)

    const enteredNameIsValid = enteredName.trim() !== '';
    const enteredEmailIsValid = enteredEmail.trim() !== '';
    const enteredTextIsValid = enteredText.trim() !== '';

    const nameInputIsvalid = !enteredNameIsValid && enteredNameTouched;
    const emailInputIsvalid = !enteredEmailIsValid && enteredEmailTouched;
    const textInputIsvalid = !enteredTextIsValid && enteredTextTouched;

    let formIsValid = false;
    if (enteredNameIsValid || enteredEmailIsValid || enteredTextIsValid) {
        formIsValid = true
    }

    const nameInputChangeHandler = event => {
        setEnteredName(event.target.value)
    }

    const emailInputChangeHandler = e => {
        setEnteredEmail(e.target.value)
    }

    const textInputChangeHandler = event => {
        setEnteredText(event.target.value)
    }

    const nameInputBlurHandler = () => {
        setEnteredNameTouched(true)
    }

    const emailnputBlurHandler = () => {
        setEnteredEmailTouched(true)
    }

    const textInputBlurHandler = () => {
        setEnteredTextTouched(true)
    }

    // const formSubmissionHandler = event => {
    //     event.preventDefault();
    //     setEnteredNameTouched(true)
    //     setEnteredEmailTouched(true)
    //     setEnteredTextTouched(true)
    //     if (!enteredNameIsValid || !enteredEmailIsValid || !enteredTextIsValid) {
    //         return;
    //     } else {
    //         sendEmail()
    //     }

    //     setEnteredName('')
    //     setEnteredNameTouched(false)
    //     setEnteredEmail('')
    //     setEnteredEmailTouched(false)
    //     setEnteredText('')
    //     setEnteredTextTouched(false)
    // }

    const submitHandler = () => {
        alert(`Hello ${!enteredName ? "there": enteredName}, I do apologize for this inconvenience. This option is not available for now. Please proceed by scheduling a meeting. Thank you!`)
    }

    // function sendEmail() {
    //     window.Email.send({
    //         SecureToken: process.env.REACT_APP_SECURED_TOKEN,
    //         To: process.env.REACT_APP_EMAIL_SEND_TO,
    //         From: `${enteredName}`,
    //         Subject: `Virtual Assistant - ${enteredName}`,
    //         Body: `<b>Name:</b> ${enteredName} <br/><b>Email:</b> ${enteredEmail} <br/><br/> <b>Message:</b> <br/>${enteredText}`
    //     }).then(
    //         name => alert(`Hi ${enteredName}, your message has been sent!`)
    //     )
    // };

    return (
        <motion.div animate={animation} ref={ref} className={styles.container} id="contact">
            <h1>Get In Touch</h1>
            {/* <form className={styles.contactForm} onSubmit={formSubmissionHandler}> */}
            <form className={styles.contactForm}>
                <div className={styles.formWrapper}>
                    <div className="form-left">
                        <div className={styles.inputText}>
                            <label htmlFor="name" className="form-text label">First Name</label>
                            <input type="text"
                                className="name"
                                id="name"
                                onChange={nameInputChangeHandler}
                                onBlur={nameInputBlurHandler}
                            />
                            {nameInputIsvalid && <p className={styles.textError}>Name must not be empty!</p>}
                        </div>
                        <div className={styles.inputText}>
                            <label htmlFor="email" className="form-text label">Email</label>
                            <input type="email"
                                className="email"
                                id="email"
                                onChange={emailInputChangeHandler}
                                onBlur={emailnputBlurHandler} />
                            {emailInputIsvalid && <p className={styles.textError}>Email must be correct or must not be empty!</p>}
                        </div>
                    </div>
                    <div className={styles.inputText}>
                        <label htmlFor="textarea" className="form-text label">Message</label>
                        <textarea type="textarea"
                            className="message"
                            id="message"
                            cols="30"
                            rows="10"
                            onChange={textInputChangeHandler}
                            onBlur={textInputBlurHandler}>
                        </textarea>
                        {textInputIsvalid && <p className={styles.textError}>Message must not be empty!</p>}
                    </div>
                </div>
                <div className={styles.btn}>
                    <h2 type="submit" id="button" onClick={submitHandler}>Submit</h2>
                </div>
            </form>
        </motion.div>
    )
}

export default Contact
