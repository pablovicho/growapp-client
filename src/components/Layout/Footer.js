import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
// import "@fortawesome/fontawesome-svg-core/styles.css"
// import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core"
// fontAwesomeConfig.autoAddCss = false

export default function Footer() {
	return (
	<div className="h-10 bg-blue-500">
      <footer className="bg-white">
        <div className="max-w-7xl  mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        
          <div className="mt-0 flex relative justify-center space-x-7 space-y-5 mr-12">
          
            <a href="https://github.com/pablovicho" className=" text-gray-400 hover:text-gray-500">
            <span className="sr-only">Github</span>
              <FontAwesomeIcon className="absolute top-0 object-cover h-sm w-sm" viewBox="500 0 24 24" icon={faGithub} />
            </a>
         

          <div>
            <a href="https://linkedin.com/in/pablo-valdes-b950066b/" className="text-gray-400 socialIcons fa-fw hover:text-gray-500">
              <span className="sr-only">faLinkedin</span>
              <FontAwesomeIcon className="absolute top-0 object-cover h-sm w-sm" viewBox="0 0 24 24" icon={faLinkedin}/>
            </a>
          </div>

          <div>
            <a href="https://twitter.com/pablovicho" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <FontAwesomeIcon className="absolute top-0 object-cover h-sm w-sm" viewBox="-450 0 24 24" icon={faTwitter} />
            </a>
          </div>

          </div>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; 2021. Todos los derechos reservados.
          </p>
          <p className="text-center text-base text-gray-400">
            Esta es una app ficticia con objetivos académicos y de aprendizaje.
          </p>
        </div>
      </footer>
    </div>
	)
}