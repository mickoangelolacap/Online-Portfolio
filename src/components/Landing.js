import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import scrolldown from '../images/scrolldownb.gif'

const Landing = () => {

	const [darkMode, setDarkMode] = useState(true)

	let button
	let dark

	if (darkMode) {
		button = {style: "btn btn-outline-dark p-3",name: "Don't you dare click"}
		dark = {style: "px-5 mx-5", light: "pt-5"}
	}
	else {
		button = {style: "btn btn-outline-light p-3",name: "Okay you've gone Dark"}
		dark = {style: "px-5 mx-5 bg-dark", light: "pt-5 text-light"}
	}

	return (
			
			<section id="landing" className="p-4 px-lg-5 mx-lg-5">
				{/*<h3 className="pb-5">Micko Angelo <strong className="text-danger">C.</strong> Lacap</h3>*/}
				<h1 className="pt-md-5 mt-md-4 pt-5">Let's turn your <strike>Imagination</strike> Idea </h1>
				<h1 className="pb-4">into <strike>Reality A</strike> The <span className="text-danger">Real Thing</span></h1>
				<button className={button.style} onClick={()=>{setDarkMode(!darkMode)}}>{button.name}</button>
				<a href="#about" className="text-center d-block pt-4 pt-md-5 mt-md-5">
					<img src={scrolldown} alt=""/>
				</a>
			</section>

		)
}

export default Landing