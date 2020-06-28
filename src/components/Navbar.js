import React from 'react'
import ReactDOM from 'react-dom'
import logo from '../images/MACL.png'
import swal from 'sweetalert';

const alert = (e) => {
	swal({
     title: "Message received. Thanks!",
     text: "I'll be in touch with you shortly.",
     type: "success"
     })
	e.preventDefault();
}

const Navbar = () => {

	return (

			<nav id="scrollspy" className="navbar navbar-expand-lg navbar-light p-4 p-md-5 p-lg-5 mx-lg-5">
				<a className="navbar-brand" href="/">
					<img src={logo} alt="MACL"/>
				</a>

				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav ml-auto">
						<ul className="nav nav-pills">
						    <li className="nav-item">
						      <a className="nav-link" href="#about">About</a>
						    </li>
						    <li className="nav-item">
						      <a className="nav-link" href="#featured">Featured</a>
						    </li>
						    <li className="nav-item">

						      <a className="nav-link text-danger" data-toggle="modal" data-target="#exampleModalCenter">
						      Let's Talk</a>

								<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
								  <div className="modal-dialog modal-dialog-centered" role="document">
								    <div className="modal-content bg-dark p-4">
								      <div className="modal-body">
								        <button type="button" className="close text-light" data-dismiss="modal" aria-label="Close">
								          <span aria-hidden="true">&times;</span>
								        </button>
								        	<h3 className="text-light">Thanks for reaching out <strong className="text-danger">!</strong></h3>


											<form id="subform" className="p-4" onSubmit={(e)=> alert(e)} action="mailto:mickoangelolacap@gmail.com">
											  <div className="form-group">
											      <label className="text-light" htmlFor="validationServer01">Name</label>
											      <input type="text" className="form-control" id="validationServer01" placeholder="Name" required/>
											  </div>
											  <div className="form-group">
											      <label className="text-light" htmlFor="validationServer02">Email</label>
											      <input type="email" className="form-control" id="validationServer02" placeholder="Email" required/>
											  </div>
											   <div className="form-group">
											      <label className="text-light" htmlFor="validationServer03">How can I help?</label>
											      <textarea className="form-control" id="validationServer03" placeholder="Message" required/>
											  </div>
											  
											  <button className="btn btn-danger px-5 mt-4" type="submit">Send</button>
											</form>
											
											<hr className="bg-danger"/>
											<div className="social-media text-center">
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
						                    </div>

								      </div>
								    </div>
								  </div>
								</div>

						    </li>
						    <li className="nav-item">
						      <a className="nav-link" href="https://drive.google.com/file/d/1mec3mxJt6NgOy4gy4cNjO0ylLsGLyVQP/view?usp=sharing" target="_blank">Resume</a>
						    </li>						    
						</ul>
					</div>
				</div>
			</nav>

		)
}

export default Navbar