import './HeroComp.css'
import image from '../../../../assets/IIoT.jpg'

const HeroComp = () => {
    return <div className="hero-container">
        <div className='hero-sub-container'>
            <h2 className='hero-title'>IIoT Solutions Engineer</h2>
            <p className='hero-content'>Hi, I'm <span className='bold'>Jo</span>! I am part of an <span className='bold'>IIoT team</span>, where I contribute to the <span className='bold'>design</span>, <span className='bold'>development</span>, <span className='bold'>programming</span> and <span className='bold'>maintenance</span> of advanced IIoT solutions, ensuring seamless integration with web technologies</p>
            <button className='hero-button'>Know More!</button>
        </div>
        <img src={image} alt='img' className='hero-image'/>
    </div>
}

export default HeroComp;