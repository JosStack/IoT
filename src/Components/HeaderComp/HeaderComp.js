import './HeaderComp.css'

const HeaderComp = () => {
    return <div className="header">
        <h1 className="header-heading">IoT Engineer</h1>
        <div className="header-icons">
            <a className="header-icon" href='/IoT'>HOME</a>
            <a className="header-icon" href='/IoT/about'>ABOUT</a>
            <a className="header-icon" href='/IoT/contact'>CONTACT</a>
        </div>
    </div>
}

export default HeaderComp;