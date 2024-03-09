import React from 'react'
import pandiyan from './images/pandiyan 1.jpg'
import './Testimonials.css'

const Testimonials = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <div className='container'>
                <h2>Testimonials</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={pandiyan} alt='user1'/>
                        <p>It is not every day that you come across a passionate and trustworthy financial advisor. John Doe is true professional who does his work really well. Thanks John!</p>
                        <p><span>Shakthi kkk</span></p>
                        <p>XXX</p>
                    </div>
                    <div className='card'>
                        <img src={pandiyan} alt='user1'/>
                        <p>In just 2 very short meetings with John he managed to find the solution personally catered to my situation and expectations. Punctual, well informed and very reliable.</p>
                        <p><span>Ramakrishna c</span></p>
                        <p>XXX</p>
                    </div>
                    <div className='card'>
                        <img src={pandiyan} alt='user1'/>
                        <p>A very professional financial advisor, who is true to his word. John has demonstrated a high amount of integrity in the time I have known him, and he is fast to respond to my concerns.</p>
                        <p><span>Gokul R</span></p>
                        <p>XXX</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
