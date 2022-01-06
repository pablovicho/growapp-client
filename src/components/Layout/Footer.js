import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
// import "@fortawesome/fontawesome-svg-core/styles.css"
// import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core"
// fontAwesomeConfig.autoAddCss = false

export default function Footer() {
	return (
	<>
      <footer className="bg-white">
        <div className="mx-auto py-12 px-0 overflow-hidden lg:px-8">
        
          <div className="mt-0 flex relative justify-center space-x-7 space-y-5 mr-5">
          
            <a href="https://github.com/pablovicho" className=" text-gray-400 hover:text-gray-500">
            <span className="sr-only">Github</span>
              <FontAwesomeIcon className="absolute top-0 object-cover" icon={faGithub} />
            </a>
         
            <a href="https://linkedin.com/in/pablo-valdes-b950066b/" className="text-gray-400 socialIcons fa-fw hover:text-gray-500">
              <span className="sr-only">faLinkedin</span>
              <FontAwesomeIcon className="absolute top-0 object-cover" icon={faLinkedin}/>
            </a>

            <a href="https://twitter.com/pablovicho" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <FontAwesomeIcon className="absolute top-0 object-cover" icon={faTwitter} />
            </a>

          </div>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; 2021. Todos los derechos reservados.
          </p>
          <p className="text-center text-base text-gray-400">
            Esta es una app ficticia con objetivos académicos y de aprendizaje.
          </p>
        </div>
      </footer>
    </>
	)
}