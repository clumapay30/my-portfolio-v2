import Footer from './Footer'
import Navbar from './Navbar'
import About from './About'
import WExperience from './WExperience'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <About />
            <WExperience />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default Layout
