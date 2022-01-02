// ESTADO GLOBAL (O STORE). TODO LO QUE TENGA QUE VER CON MOODS ESTARÁ GUARDADO AQUÍ

// LA ARQUITECTURA QUE SE UTILIZA PARA GENERAR EL ESTADO GLOBAL SE LE CONOCE COMO ARQUITECTURA DE FLUX

//

import { useContext, useReducer } from "react"; //es como useState
import MoodContext from "./MoodContext";
import MoodReducer from "./MoodReducer";
import axiosClient from "../../config/axios";
import moment from "moment"

const MoodState = (props) => {
  // 1. Estado inicial

  const initialState = {
    moods: [],
    singleMood: {
      _id: "",
      moodEntry: "",
	    comment: "",
      date: new Date(),
      month: moment().format("MMM"),
      day: moment().format("DD"),
      userId: ""
  }
}
  // 2. Configuración de reducer y creación del estado global
  const [globalState, dispatch] = useReducer(MoodReducer, initialState); //MoodReducer son todas las funciones que van a alterar el estado inicial
  //dipatch es una fución que cambia el estado global, le da los datos reales al reducer para que haga su propia función

  // 3. Funciones de cambio en estado global
//datos reales que le vas a pasar para cambiar el estado global
  const getMoods = async() => {
    const res = await axiosClient.get("moods/readall")
    const list = res.data.data
    localStorage.setItem("moods", list)
    console.log("obteniendo moods")
    dispatch({
      type: "GET_MOODS",
      payload: list, 
    });
  }

const getMood = async(moodId) => {
  const res = await axiosClient.get(`moods/readone/${moodId}`)
  const selectedMood = res.data.data
dispatch({
  type:"GET_MOOD",
  payload:selectedMood
})
}

const crearMood = (async(form, userId) => {
  const res = await axiosClient.post("moods/create", form)
  console.log("mood creado con éxito", res)
})


const updateMood = async (form, moodId) => {
  const res = await axiosClient.put(`moods/edit/${moodId}`, form)
  const updatedMood = res.data.data
  dispatch({
    type: "UPDATE_MOOD",
    payload: updatedMood
  })
}

const deleteMood = async (form, moodId) => {
  // const userId = form.userId
  const deletedMood  = await axiosClient.delete(`moods/delete/${moodId}`, form)
  dispatch({
    type: "DELETE_MOOD",
    payload: deletedMood
    })
}

  // 4. Retorno. para que pueda retornar todos los datos, necesitamos un provider: da acceso a db
  return (
    <MoodContext.Provider
      value={{
        //las llaves para llamar js; llama un objeto, con el valor de moods
        moods: globalState.moods,
        singleMood: globalState.singleMood,
        getMoods,
        getMood,
        crearMood,
        updateMood,
        deleteMood
      }}
    >
      {props.children} {/*todos los children tendrán acceso a value*/}
    </MoodContext.Provider>
  );
};


export default MoodState;
