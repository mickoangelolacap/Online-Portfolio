import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import MACLWR from '../images/MACLWR.png'
import scrolldown from '../images/scrolldownb.gif'

const Footer = () => {

	return (
			
			<section id="footer" className="container-fluid">
				<div className="row">
					<div className="col-md-10 foot">
						<div className="row p-5">
							<div className="col-md-4 d-lg-block d-none p-5">
								<h1>PHONE</h1>
								<p>+63956-872-0280</p>
								<h1 className="mt-5 pt-5">ADDRESS</h1>
								<p>Binangonan, Rizal, Philippines</p>
								
							</div>
							<div className="col-md-6 col-12 d-lg-none py-4 pr-5">
								<h1>PHONE</h1>
								<p>+63956-872-0280</p>
								<h1 className="mt-md-5 pt-md-5">ADDRESS</h1>
								<p>Binangonan, Rizal, Philippines</p>
								<h1 className="mt-md-5 pt-md-5">EMAIL</h1>
								<p>mickoangelolacap@gmail.com</p>
								<h1 className="mt-md-5 pt-md-5">FOLLOW ME!</h1>
								<span className="social-media">
			                        <a href="https://www.facebook.com/mickoangelolacap" target="_blank">
			                            <i className="fab fa-facebook-square"></i>
			                        </a>
			                        <a href="https://www.instagram.com/mickoangelolacap/" target="_blank">
			                            <i className="fab fa-instagram"></i>
			                        </a>
			                        <a href="https://www.twitter.com/angelolacap" target="_blank">
			                            <i className="fab fa-twitter"></i>
			                        </a> 
			                        <a href="https://www.linkedin.com/in/mickoangelolacap" target="_blank">
			                            <i className="fab fa-linkedin"></i>
			                        </a>
			                        <a href="https://github.com/mickoangelolacap" target="_blank">
			                            <i className="fab fa-github"></i>
			                        </a>
			                    </span>
							</div>
							<div className="col-md-4 d-lg-block d-none p-5">
								<h1>EMAIL</h1>
								<p>mickoangelolacap@gmail.com</p>
								<h1 className="mt-5 pt-5">FOLLOW ME!</h1>
								<span className="social-media">
			                        <a href="https://www.facebook.com/mickoangelolacap" target="_blank">
			                            <i className="fab fa-facebook-square"></i>
			                        </a>
			                        <a href="https://www.instagram.com/mickoangelolacap/" target="_blank">
			                            <i className="fab fa-instagram"></i>
			                        </a>
			                        <a href="https://www.twitter.com/angelolacap" target="_blank">
			                            <i className="fab fa-twitter"></i>
			                        </a> 
			                        <a href="https://www.linkedin.com/in/mickoangelolacap" target="_blank">
			                            <i className="fab fa-linkedin"></i>
			                        </a>
			                        <a href="https://github.com/mickoangelolacap" target="_blank">
			                            <i className="fab fa-github"></i>
			                        </a>
			                    </span>
							</div>
							<div className="col-lg-4 col-md-6 col-12 text-center hi">
								<h2>Say Hi.</h2>
								<img className="img-fluid ml-5 my-4" src={MACLWR} alt=""/>
								<span>&copy; 2020 | Micko Angelo <strong className="text-danger">C.</strong> Lacap </span>
							</div>
						</div>
					</div>
					<div className="col-md-2 col-12 d-flex align-items-end justify-content-center goup">
						<a href="#scrollspy" className="text-center d-block pt-5 mt-5">
							<img src={scrolldown} alt=""/>
						</a>
					</div>
				</div>
			</section>

		)
}

export default Footer

// <a href="https://gitlab.com/mickoangelolacap" target="_blank">
//     <i className="fab fa-gitlab"></i>
// </a>