import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact_style.scss';
import Laptop from '../../Photos/Laptop.svg'


const ContactMe = () => {

    const form = useRef();

    const SendEmail = (e) => {
        e.preventDefault();


        emailjs
            .sendForm('service_i8p933h', 'template_15f3ggt', e.target, 'XtFaKb_zt6d3dAKgB')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                e.target.classList.add("success");
                e.target.classList.remove("error");

            }, (error) => {
                console.log(error.text);
                e.target.classList.add("error");
                e.target.classList.remove("success");
            });
    };

    return (
        <div className='ContactMe'>
            <div className="ContactInfo">
                <div className="ContactUnderline" ><h1 className="Title">Contact Me</h1></div>
                <p>Hi! I'd love the opportunity to speak with you!</p>
                <img className="ContactPhoto" src={Laptop} alt="" draggable='false'/>
            </div>
            <form className='ContactForm' onSubmit={SendEmail}>
                <input placeholder='Name' type="text" className="name" name="name" required/>
                <input placeholder='Email' type="Email" className="email" name="email" required/>
                <textarea placeholder='Message' type="text" className="message" name="message" required/>
                <span id='successBox' className='successBox'>Thanks! I'll be in touch soon.</span>
                <span id='errorBox' className='errorBox'>Sorry, there is something wrong. Please try again soon or email me directly at zkrevis@gmail.com.</span>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ContactMe