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
		case "UPDATE_USER":
		  case "GET_DATA_USER":
			return {
				...globalState,
				authStatus: true,
				singleUser: action.payload
			}

			case "DELETE_USER":
				return {
					...globalState,
					authStatus: false,
					singleUser: action.payload
				}

		default: 
			return globalState
	}
}

export default reducer