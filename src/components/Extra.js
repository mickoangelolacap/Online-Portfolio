import React from 'react'
// import ReactDOM from 'react-dom'
import extra from '../images/extra.png'
import MACLWR from '../images/MACLWY.png'

const Extra = () => {

	return (
			
			<section id="extra" className="py-5 container-fluid">
				<div className="row">
					<div className="col-lg-5 isa">
						<img className="logo my-5" src={MACLWR} alt=""/>
						<div className="p-md-5 text-center mt-4">
							<h2>DO YOU HAVE ANYTHING IN MIND?</h2>
							<button className="btn-lg btn-warning px-5 mt-4" data-toggle="modal" data-target="#exampleModalCenter">Let's Talk!</button>
						</div>
					</div>
					<div className="col-lg-6 p-0 dalawa">
						<img className="img img-fluid" src={extra} alt=""/>
					</div>
					<div className="col-lg-1 p-0 tatlo">

					</div>
				</div>
			</section>

		)
}

export default Extra