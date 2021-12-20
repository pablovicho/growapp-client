const reducer = (globalState, action) => {


	switch (action.type) {

		case "REGISTRO_EXITOSO":
		case "LOGIN_EXITOSO":
			localStorage.setItem("token", action.payload)

			return {
				...globalState,
				authStatus: true
			}

		case "LOGOUT_USUARIO":
            localStorage.removeItem("token")

            return {
                ...globalState,
                user: null,
                authStatus: null,
                msg: action.payload,

        }
		case "UPDATE_User":
		case "GET_DATA_USER":
			return {
				...globalState,
				authStatus: true,
				currentUser: action.payload
			}

		default: 
			return globalState

	}


}

export default reducer