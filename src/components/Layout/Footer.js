import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
	return (
	<div className="h-10 bg-blue-500">
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        
          <div className="mt-8 flex justify-center space-x-6">

            <a href="https://github.com/pablovicho" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Github</span>
              <FontAwesomeIcon className="h-sm w-auto" viewBox="300 0 24 24" icon={faGithub} />
            </a>

            <a href="linkedin.com/in/pablo-valdes-b950066b/" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">faLinkedin</span>
              <FontAwesomeIcon className="h-sm w-auto" viewBox="0 0 24 24" icon={faLinkedin} />
            </a>

            <a href="https://twitter.com/pablovicho" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <FontAwesomeIcon className="h-sm w-auto" viewBox="-250 0 24 24" icon={faTwitter} />
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
    </div>
	)
}