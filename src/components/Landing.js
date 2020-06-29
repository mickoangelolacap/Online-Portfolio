import React, {useState} from 'react'
// import ReactDOM from 'react-dom'
import scrolldown from '../images/scrolldown.gif'

const Landing = () => {

	const [darkMode, setDarkMode] = useState(true)

	let button
	let strike
	let show

	if (darkMode) {
		button = "Don't you dare Click!"
		strike = null
		show = "d-none"
	}
	else {
		button = "There you Go."
		strike = "strikethrough"
		show = "show"
	}

	return (
			
			<section id="landing" className="p-4 px-md-5 mx-md-5">
				<h1 className="pt-5">Let's turn your <span className={strike}>Imagination</span> <span className={show}>Idea</span> </h1>
				<h1 className="pb-4">into <span className={strike}>Reality</span> <span className={show}>The <span className="text-warning">Real Thing</span></span></h1>
				<button className="btn btn-outline-warning p-3" onClick={()=>{setDarkMode(!darkMode)}}>{button}</button>
				<a href="#about" className="text-center d-block pt-4 pt-md-5 mt-md-5">
					<img src={scrolldown} alt=""/>
				</a>
			</section>

		)
}

export default Landing