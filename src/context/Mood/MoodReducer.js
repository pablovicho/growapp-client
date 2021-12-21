const reducer = (globalState, action) => {
    switch (action.type) {
  
      case "GET_MOODS":
        return {
          ...globalState,
          moods: action.payload,
        };
  
      case "GET_MOOD":
        case "UPDATE_MOOD":
        return {
          ...globalState,
          singleMood: action.payload,
        };
  
      default:
        return globalState;
    }
  };
  
  export default reducer;
  