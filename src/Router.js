import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Home from './pages/Home'
import Layout from './components/Layout'
import Profile from './components/User/Profile'
import About from  './pages/About'
import Edit from './components/User/Edit'
import EditMood from './components/Moods/EditMood'
import SingleMood from './components/Moods/SingleMood'
import Scatter from './components/Moods/Scatter'

import UserState from './context/User/UserState'
import MoodState from './context/Mood/MoodState'
import Auth from './routes/Auth'
import Private from './routes/Private'

import App from "./components/Moods/App"

// 2. FUNCIÓN
const Router = () => {
	
	return (
		<>
		<UserState>
			<MoodState>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index element={<Home />} />
							<Route path="registro" element={<Auth component={Register} />}/>
							<Route path="iniciar-sesion" element={<Auth component={Login} />} />
							<Route path="profile/:id" element={<Private component={Profile} />}/>
							<Route path="editar/:id" element={<Private component={Edit} />} />
                            <Route path="sobre-nosotros" element={<About/>} />
							<Route path="moods/chart/:id" element={<Private component={Scatter}/>}/>
							<Route path="moods/:id" element={<Private component={SingleMood} />} />
							<Route path="moods/:id/edit" element={<Private component={EditMood} />} />
							<Route path="*" element={<h1>Error 404. <br/> ¡Parece que la ruta no existe!</h1>}></Route>
						</Route>
					</Routes>
				</BrowserRouter>
			</MoodState>
		</UserState>
		</>
	)
}


// 3. EXPORTACIÓN
export default Router