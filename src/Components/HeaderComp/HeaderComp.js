import './HeaderComp.css'

const HeaderComp = () => {
    return <div className="header">
        <h1 className="header-heading">IoT Engineer</h1>
        <div className="header-icons">
            <a className="header-icon" href='/'>HOME</a>
            <a className="header-icon" href='/about'>ABOUT</a>
            <a className="header-icon" href='/contact'>CONTACT</a>
        </div>
    </div>
}

export default HeaderComp;