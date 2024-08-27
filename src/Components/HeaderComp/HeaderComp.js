import './HeaderComp.css'
import ThemeToggle from './ThemeToggle/ThemeToggle';

const HeaderComp = () => {
    return <div className='header'>
        <h1 className='title'>IoT Engineer</h1>
        <ThemeToggle/>
    </div>
}

export default HeaderComp;