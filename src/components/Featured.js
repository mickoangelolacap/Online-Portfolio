import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import adopt from '../images/adopt.png'
import adopticon from '../images/adopticon.png'
import laravel from '../images/laravel.png'
import html from '../images/html.png'
import css from '../images/css.png'
import js from '../images/js.png'
import bootstrap from '../images/bootstrap.png'
import heroku from '../images/heroku.png'
// import vantage from '../images/vantage.png'
// import vantageicon from '../images/vantageicon.png'
import mimesis from '../images/mimesis.png'
import mimesisicon from '../images/mimesisicon.png'
import gitlab from '../images/gitlab.png'
import covid from '../images/covid.png'
import covidicon from '../images/covidicon.png'
import mysql from '../images/mysql.png'
import php from '../images/php.png'
import mongodb from '../images/mongodb.png'
import react from '../images/react.png'
import nodejs from '../images/nodejs.png'
import graphql from '../images/graphql.png'
import apollo from '../images/apollo.png'

const Featured = () => {

	return (
			
			<section id="featured" className="py-5 p-4">
				<div className="container py-5">
					<div className="row">
						<div className="col-md-12 p-0" data-aos="fade-up">

							<h1 className="text-danger">Featured.</h1>
							<div className="tab-content" id="pills-tabContent">
							  <div className="tab-pane fade show active adopt" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
									<div className="row p-4 p-md-5">
										<div className="col-lg-8 img-fluid mt-5 set">
											<img className="img-fluid" src={adopt} alt=""/>
										</div>
										<div className="col-lg-4 setcontent mt-4 mt-md-5">
											<h2>Adopt-a-Fur</h2>
											<p className="py-3">Adop-a-Fur is a pet adoption web app that aims to create a community for animals.</p>
											<img src={laravel} alt=""/>
											<img src={js} alt=""/>
											<img src={html} alt=""/>
											<img src={css} alt=""/>
											<img src={bootstrap} alt=""/>
											<img src={heroku} alt=""/>
											<a href="https://adopt-a-fur.herokuapp.com/" target="_blank" className="btn btn-outline-danger d-block mt-4 px-5">View Site</a>
										</div>
									</div>
							  </div>
							  <div className="tab-pane fade vantage" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
									<div className="row p-4 p-md-5">
										<div className="col-lg-8 img-fluid mt-5 set">
											<img className="img-fluid" src={mimesis} alt=""/>
										</div>
										<div className="col-lg-4 setcontent mt-4 mt-md-5">
											<h2>Mimesis</h2>
											<p className="py-3">Mimesis is an Online / Home-based tutorial web app for aspiring Artists.</p>
											<img src={react} alt=""/>
											<img src={js} alt=""/>
											<img src={html} alt=""/>
											<img src={css} alt=""/>
											<img src={bootstrap} alt=""/>
											<img src={heroku} alt=""/>
											<img src={mongodb} alt=""/>
											<img src={nodejs} alt=""/>
											<img src={graphql} alt=""/>
											<img src={apollo} alt=""/>
											<a href="http://mimesis-macl.herokuapp.com/" target="_blank" className="btn btn-outline-danger d-block mt-4 px-5">View Site</a>
										</div>
									</div>
							  </div>
							  <div className="tab-pane fade covid" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
									<div className="row p-4 p-md-5">
										<div className="col-lg-8 img-fluid mt-5 set">
											<img className="img-fluid" src={covid} alt=""/>
										</div>
										<div className="col-lg-4 setcontent mt-4 mt-md-5">
											<h2>Covid-Watch</h2>
											<p className="py-3">Covid-Watch is a an app used to test your status during Covid Season.</p>
											<img src={html} alt=""/>
											<img src={css} alt=""/>
											<img src={js} alt=""/>
											<img src={bootstrap} alt=""/>
											<img src={heroku} alt=""/>
											<img src={mysql} alt=""/>
											<img src={php} alt=""/>
											<a href="https://macl-covid-watch.herokuapp.com/" target="_blank" className="btn btn-outline-danger d-block mt-4 px-5">View Site</a>
										</div>
									</div>
							  </div>
							</div>
						</div>
					</div>

					<ul className="nav nav-pills text-center row" id="pills-tab" role="tablist">
					  <li className="nav-item p-0 col-4 ">
					    <a className="nav-link active adopticon" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
							<img className="img-fluid" src={adopticon} alt=""/>
					    </a>
					  </li>
					  <li className="nav-item p-0 col-4">
					    <a className="nav-link vantageicon" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">
							<img className="img-fluid" src={mimesisicon} alt=""/>
					    </a>
					  </li>
					  <li className="nav-item p-0 col-4">
					    <a className="nav-link covidicon" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">
							<img className="img-fluid" src={covidicon} alt=""/>
					    </a>
					  </li>
					</ul>
	
				</div>
			</section>

		)
}

export default Featured