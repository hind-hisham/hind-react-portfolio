import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
	const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h9kxxxo', 'template_n42x4xf', form.current, 'prYDApNQbU51Zr1SQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
	  e.target.reset()
	};
  return (
    <section class="tow" id="contact">
				<div class="pro">
				<form ref={form} onSubmit={sendEmail}>
				    <span class="style"></span>
					<span class="style"></span>
					<span class="style"></span>
					<input type="text" placeholder="Name" name='name' required />
					<input type="text" placeholder="Email" name='email' required/>
					<textarea name="message" cols="30" rows="3" placeholder="Message" required></textarea>
					
					<span class="style"></span>
					<button type="submit" value="Send" class="btn">send
					<span class="style"></span>
					<span class="style"></span>
					<span class="style"></span>
					</button>

				</form>
					
					
                     <div className="decor">
					 <span class="style"></span>
					<span class="style"></span>
					 </div>
			</div>
			<div class="contact-links">
				<a href="mailto:hind.hisham.alsadig@gmail.com" target='_blank' rel='noreferrer' class="pro" ><MdEmail/></a>
				<a href="https://m.me/profile.php?id=100001076403930" target='_blank' rel='noreferrer' class="pro"><BsMessenger/></a>
				<a href="https://api.whatsapp.com/send?phone=+966507361307" target='_blank' rel='noreferrer' class="pro"><BsWhatsapp/></a>
			</div>
			</section>
  )
}

export default Contact
