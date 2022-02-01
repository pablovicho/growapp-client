import React, {useContext, useEffect, useState} from 'react'

import { Navigate } from 'react-router-dom'

import UserContext from '../context/User/UserContext'


export default function AuthRoute({ component: Component, ...props }) {
    
	const userCtx = useContext(UserContext)
    const { authStatus, verifyingToken } = userCtx

    const [loading, setLoading] = useState(true)

	useEffect(() => {
		async function fetchData() {
		  // You can await here
		  await verifyingToken()
		  setLoading(false)
		  // ...
		}
		fetchData();
	  }, [authStatus]); // Or [] if effect doesn't need props or state

    return (
		
		<>
{/* aquí quisiera que llegara a /profile/:id, pero no encuentro una forma clara de lograr meter el id. Voy en {`/profile/${userData._id}`}*/}
			{
				authStatus ?
				(<Navigate replace to="/"/>)
				:
				(<Component/>)
			}
		</>
    )
    
}