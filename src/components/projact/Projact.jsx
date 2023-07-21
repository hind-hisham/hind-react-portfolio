import React from 'react'
import './projact.css';
import ProjactImg1 from '../../assets/projact/pro1.png';
import ProjactImg2 from '../../assets/projact/pro22.png';
import proOneViedo from '../../assets/projact/low-video-alsharg.mp4';
import proTowViedo from '../../assets/projact/low-video-fikra.mp4';

const Projact = () => {
  return (
    <>
    <section className="tow" id="projact">
				<div className="pro-contianer">
					<div className="pro">
						<p>Projact One</p>
						<h2>SSTC Center</h2>
						<p>
						Designing a website for an information technology center and courses consisting of 10 basic pages and a dashboard using HTML, CSS, and JS.</p>
						<div className="coll-actian">
							<a href="https://www.alshargcenter.com/">
								<span className="style"></span>
								<span className="style"></span>
								<span className="style"></span>
								Visite Website</a>
							<a href="https://github.com/hind-hisham/sstc">Github link</a>
							</div>
							</div>
							<div className="case-st">
								<img src={ProjactImg1} alt=""/>
							</div>
							 <div className="vid">
								<video src={proOneViedo} autoPlay loop></video>
							</div>
					
				</div>
			</section>
			

			<section >
				<div className="pro-contianer left-pro">
				<div className="pro">
					<p>Projact two</p>
					<h2>Fikra Media</h2>
					<p>
					Designing a website for a media company consisting of a home page and an online store using HTML, CSS, and JS.</p>
					<div className="coll-actian">
						<a href="https://hind-hisham.github.io/hind-hisham-fikra-media.github.io/">
							<span class="style"></span>
							<span className="style"></span>
							<span className="style"></span>
							Visite Website</a>
						<a href="https://github.com/hind-hisham/hind-hisham-fikra-media.github.io">Github link</a>
						 </div>
				</div>
				<div className="vid">
				<video src={proTowViedo} autoPlay loop></video>
				</div>
				<div className="case-st">
					<img src={ProjactImg2} alt="pro-img2"/>
				</div>
			</div>
				</section>
        </>
  )
}

export default Projact
