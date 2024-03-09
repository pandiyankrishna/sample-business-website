import React from 'react'
import pandiyan from './images/pandiyan.jpg'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img className='img' src={pandiyan} alt='pandiyan' />
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p>Intense in the creativity to make this world happy</p>
                    <p>I'm Pandiyan K from Dharmapuri a proefficient web developer.....</p>
                    <button className='button'>Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default About
