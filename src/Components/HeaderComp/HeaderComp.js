import './HeaderComp.css';
import menu from '../../assets/menu.svg'

const HeaderComp = () => {
    return (
        <div className="header">
            <h1 className="header-heading">IoT Engineer</h1>
            <input type="checkbox" id="menu-toggle" className="menu-toggle"/>
            <label htmlFor="menu-toggle" className="menu-icon"><img className='menu-icon-image' src={menu} alt='menu' /></label>
            <div className="header-icons">
                <a className="header-icon" href='/IoT'>HOME</a>
                <a className="header-icon" href='/IoT/about'>ABOUT</a>
                <a className="header-icon" href='/IoT/contact'>CONTACT</a>
            </div>
        </div>
    );
};

export default HeaderComp;
