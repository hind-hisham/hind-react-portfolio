import React from 'react'
import './hero.css'
import CV from '../../assets/hind-front-end-cv.pdf'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithubSquare} from 'react-icons/fa'
import {FaYoutubeSquare} from 'react-icons/fa'
const Hero = () => {
  return (
    <section id="home">
			<div className="glassy">
				<span className="style"></span>
				<span className="style"></span>
				<span className="style"></span>
				<h4>Hi There..!</h4>
				<h1>I'm<span> hind hisham </span></h1>
				<h3>frontend devoloper 😎</h3>
				<p>I fell in love with codeing in 2020,I felt passion about it ,My real prize is the " WOW face " in the eyes of my clients when they see the project.</p>
				<p>My journey began withe the Knowledge I got from University.I love to create extraordinary and unique things.</p>
				<div className="coll-actian">
				<a href={CV} download><span className="style"></span>
					<span class="style"></span>
					<span class="style"></span>
					Dawnload CV</a>
				<a href='#contact' >Contact</a>
			    </div>
				<div className="links">
					<a href="https://www.linkedin.com/in/hind-hisham-20ab47236/" target='_blank' rel='noreferrer'><FaLinkedin/></a>
					<a href="https://github.com/hind-hisham" target='_blank' rel='noreferrer'><FaGithubSquare/></a>
					<a href="https://www.youtube.com/channel/UCQEKrf9snyeqtl7b8uHWN4A" target='_blank' rel='noreferrer'><FaYoutubeSquare/></a>
				</div>
				<div className="decor">
					 <span class="style"></span>
					<span class="style"></span>
					 </div>
			</div>
		</section>
  )
}

export default Hero