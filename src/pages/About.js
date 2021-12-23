import React from 'react'
import logo2 from "../images/logo1.png"

export default function About() {
    return (
        <div>
			
			<div className="flex flex-row justify-center items-center">
        <div className="max-w-sm md:max-w-md lg:max-w-lg bg-orange-50 rounded overflow-hidden shadow-lg my-8 text-center">
		<img
            className="w-full"
            src="https://i2.pickpik.com/photos/790/916/941/plant-young-plants-small-plant-seedling-preview.jpg"
            alt="portada"
          />
		  
          <div className="px-6 py-4">
            <div className="font-bold text-3xl mb-2 text-lime-700 text-left mt-8">
            Todos somos como una plantita:
            </div>
            <div className="font-semibold text-2xl mb-2 text-lime-600 text-left mt-8">
            Si la cuidamos todos los días, crece
            </div>
            <div className="font-semibold text-xl mb-2 text-yellow-900 text-left mt-12">
            Y si la cuidamos juntos, crece mejor. Comparte esta app con tu pareja, o tu familia, o tu terapeuta <br/> <br/>
            y cada día haz un check up con un solo click. ¡Verás lo fácil que será platicarlo después!
            </div>
          </div>
          <div className="px-6 py-4 flex justify-center">
            <div className="mt-0 flex md:mt-0">
            </div>
          </div>
          <div className='flex justify-center'>
		  <img
            className="w-80 mt-4 text-center"
            src={logo2}
            alt="logo"
          />
		  </div>
        </div>
      </div>

		</div>
    )
}
