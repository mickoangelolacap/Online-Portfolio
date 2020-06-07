import React from 'react'
import ReactDOM from 'react-dom'
import dp from '../images/dp.jpg'
import image1 from '../images/image1.png'
import react from '../images/react.png'
import html from '../images/html.png'
import css from '../images/css.png'
import js from '../images/js.png'
import bootstrap from '../images/bootstrap.png'
import jquery from '../images/jquery.png'
import mongodb from '../images/mongodb.png'
import nodejs from '../images/nodejs.png'
import mysql from '../images/mysql.png'
import php from '../images/php.png'
import graphql from '../images/graphql.png'
import apollo from '../images/apollo.png'
import laravel from '../images/laravel.png'
import gitlab from '../images/gitlab.png'
import heroku from '../images/heroku.png'
import figma from '../images/figma.png'
import canva from '../images/canva.png'
import autocad from '../images/autocad.png'
import sketchup from '../images/sketchup.png'
import photoshop from '../images/photoshop.png'
import filmora from '../images/filmora.png'
import barchart from '../images/barchart.png'

const About = () => {

	return (

			<section id="about">
				<div id="carouselExampleIndicators" className="carousel slide my-5" data-ride="carousel">
				  <ol className="carousel-indicators">
				    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
				    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
				  </ol>
				  <div className="carousel-inner">
				    <div id="minimal" className="carousel-item text-center active">
				      <h1 className="pt-5">MINIMALIST.</h1>
				      <h1 className="d-lg-none">MINIMALIST.</h1>
				      <h1 className="d-lg-none">MINIMALIST.</h1>
				      <h1 className="d-md-none">MINIMALIST.</h1>
				      <h1 className="d-md-none">MINIMALIST.</h1>
				      
				      <span>I'M NOT, I JUST WANT IT CLEAN.</span>
				    </div>
				    <div id="me" className="carousel-item text-center">
				    	<div className="row">
							<div className="col-12">
						    	<img className="img-fluid" src={dp} alt=""/>
							</div>
							<div className="col-12 me2">
						    	<h3 className="aboutname">Micko Angelo <span className="text-danger">C.</span> Lacap</h3>
						    	<h1 className="p-2 font-weight-bold">Hey! I'm a Full-Stack Web Developer.</h1>
							</div>
							<div className="col-12 me3">
						    	<button id="closer" className="btn btn-danger py-2 px-4 mt-2" data-toggle="modal" data-target="#exampleModalCenter">Get Closer</button>
							</div>
				    	</div>
				    </div>
				  </div>
				  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
				    <span className="sr-only">Previous</span>
				  </a>
				  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
				    <span className="sr-only">Next</span>
				  </a>
				</div>

				<div id="about2" className="container mb-5 py-5">
					<div className="row">
						<div className="col-lg-5 p-md-0 p-4">
							<h1 className="text-danger">About.</h1>
							<img className="img-fluid" id="image1" src={image1} alt=""/>
						</div>
						<div id="skills" className="col-lg-7 text-center">
							<h2>Front End</h2>
							<figure>
								<img src={react} alt="react"/>
								<figcaption>React</figcaption>
							</figure>
							<figure>
								<img src={js} alt=""/>
								<figcaption>JavaScript</figcaption>
							</figure>
							<figure>
								<img src={html} alt=""/>
								<figcaption>HTML</figcaption>
							</figure>
							<figure>
								<img src={css} alt=""/>
								<figcaption>CSS</figcaption>
							</figure>
							<figure>
								<img src={bootstrap} alt=""/>
								<figcaption>Bootstrap</figcaption>
							</figure>
							<figure>
								<img src={jquery} alt=""/>
								<figcaption>jQuery</figcaption>
							</figure>
							<h2>Back End</h2>
							<figure>
								<img src={mongodb} alt=""/>
								<figcaption>MongoDB</figcaption>
							</figure>
							<figure>
								<img src={nodejs} alt=""/>
								<figcaption>Node.js</figcaption>
							</figure>
							<figure>
								<img src={mysql} alt=""/>
								<figcaption>MySQL</figcaption>
							</figure>
							<figure>
								<img src={php} alt=""/>
								<figcaption>PHP</figcaption>
							</figure>
							<figure>
								<img src={graphql} alt=""/>
								<figcaption>GraphQL</figcaption>
							</figure>
							<figure>
								<img src={apollo} alt=""/>
								<figcaption>Apollo</figcaption>
							</figure>
							<figure>
								<img src={laravel} alt=""/>
								<figcaption>Laravel</figcaption>
							</figure>
							<h2>Other</h2>
							<figure>
								<img src={gitlab} alt=""/>
								<figcaption>Gitlab</figcaption>
							</figure>
							<figure>
								<img src={heroku} alt=""/>
								<figcaption>Heroku</figcaption>
							</figure>
							<figure>
								<img src={figma} alt=""/>
								<figcaption>Figma</figcaption>
							</figure>
							<figure>
								<img src={canva} alt=""/>
								<figcaption>Canva</figcaption>
							</figure>
							<figure>
								<img src={autocad} alt=""/>
								<figcaption>AutoCAD</figcaption>
							</figure>
							<figure>
								<img src={sketchup} alt=""/>
								<figcaption>Sketchup</figcaption>
							</figure>
							<figure>
								<img src={photoshop} alt=""/>
								<figcaption>Photoshop</figcaption>
							</figure>
							<figure>
								<img src={filmora} alt=""/>
								<figcaption>Filmora</figcaption>
							</figure>
						</div>
					</div>
				</div>

				<div id="about3" className="container-fluid py-5 text-center my-5">
					<h1 className="pb-5">Random <strong className="text-danger">Facts.</strong></h1>
					<img className="img-fluid" src={barchart} alt=""/>
				</div>
			</section>

		)
}

export default About