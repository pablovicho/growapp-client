import React, {useContext} from 'react'
import UserContext from '../context/User/UserContext'



export default function Home() {

	const ctx = useContext(UserContext)

	const {
		verifyingToken
	} = ctx

	return (
		<div>
			Este es el Home

		</div>
	)
}