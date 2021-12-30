import { useReducer } from 'react'
import UserReducer from './UserReducer'
import UserContext from './UserContext'
import axiosClient from './../../config/axios'


const UserState = (props) => {

	// 1. INITIAL STATE
	const initialState = {
		// currentUser: {
		// 	nombre: "",
		// 	email: "",
		// 	password: "",
        //     terapeuta: false
		// },
		singleUser: {
			_id:"",
			nombre: "",
			email: "",
			password: "",
            terapeuta: false
		},
		authStatus: false
	}

	// 2. CONFIGURACIÓN DEL REDUCER
	const [globalState, dispatch] = useReducer(UserReducer, initialState)


	// 3. FUNCIONES
	const registerUser = async (form) => {
		const res = await axiosClient.post("users/create", form)
		console.log(res)
		const token = res.data.data
		dispatch({
			type: "REGISTRO_EXITOSO",
			payload: token
		})
	}

	const loginUser = async (form) => {
		const res = await axiosClient.post("users/login", form)
		console.log(res)
		const token = res.data.data

		dispatch({
			type: "LOGIN_EXITOSO",
			payload: token
		})
		
	}

	const verifyingToken = async () => {

		const token = localStorage.getItem("token")

		// ANEXAR TOKEN A LA SIGUIENTE PETICIÓN DE AXIOS
		if(token) {
			axiosClient.defaults.headers.common["x-auth-token"] = token
		} else {
			delete axiosClient.defaults.headers.common["x-auth-token"]
		}

		try {
			
			const res = await axiosClient.get("users/verifytoken")
			const userData = res.data.data
			dispatch({
				type: "GET_DATA_USER",
				payload: userData
			})

		} catch (error) {
			console.log(error)
		}
	}

	const logoutUser = async () => {

		dispatch({
            type: "LOGOUT_USUARIO"
        })
		window.location.replace('/')
	}

	const getUser = async(userId) => {
		const res = await axiosClient.get(`users/readone/${userId}`) //checar el server
		const selectedUser = res.data.data
	  dispatch({
		type:"GET_USER",
		payload:selectedUser
	  })
	  }

	  const updateUser = async (form, userId) => { 
		const res = await axiosClient.post(`users/edit/${userId}`, form)
		const updatedUser = res.data.data
		// console.log(updatedUser)
		dispatch({
		  type: "UPDATE_USER",
		  payload: updatedUser
		})
		window.location.replace(`../profile/${userId}`);
	  }

	
	const deleteUser = async (form, userId) => {
		const deletedUser  = await axiosClient.delete(`users/delete/${userId}`)
		dispatch({
			type: "DELETE_USER",
			payload: deletedUser
		  })
	}



	// 4. RETORNO
	return (
		<UserContext.Provider
			value={{
				// currentUser: globalState.currentUser,
				authStatus: globalState.authStatus,
				singleUser: globalState.singleUser,
				registerUser,
				loginUser,
				verifyingToken,
				logoutUser,
				getUser,
				updateUser,
				deleteUser
			}}
		>
			{props.children}

		</UserContext.Provider>
	)
}

export default UserState