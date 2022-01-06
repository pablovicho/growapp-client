import React from 'react'
import { Outlet } from 'react-router-dom'


import Header from './Header'
import Footer from './Footer'
import Dropdown from './Dropdown'

export default function Layout() {
	return (
		<div>
			<div className="flex flex-col h-screen justify-between">
				
				<Dropdown />
				
				<main className="mb-auto">
					<Outlet />
				</main>

				<Footer />

			</div>
		</div>
	)
}