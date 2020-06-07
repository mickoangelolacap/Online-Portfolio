import React from 'react'
import ReactDOM from 'react-dom'
import logo from '../images/MACL.png'
import SweetAlert from 'react-bootstrap-sweetalert';

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

											<form className="p-4">
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

								      </div>
								    </div>
								  </div>
								</div>

						    </li>
						    <li className="nav-item">
						      <a className="nav-link" href="https://drive.google.com/file/d/10XHvPrhqjifLY3Y5OOOyK5HKf5VI5TB_/view?usp=sharing" target="_blank">Resume</a>
						    </li>						    
						</ul>
					</div>
				</div>
			</nav>

		)
}

export default Navbar