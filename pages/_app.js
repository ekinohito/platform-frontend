import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import {Provider, useDispatch} from "react-redux";
import store from "../store";
import {useEffect} from "react";
import {setQuestions, setToken} from "../reducers/exam";
import * as PropTypes from "prop-types";

function LocalStorage({children}) {
    const dispatch = useDispatch()
    useEffect(() => {
        const token = localStorage.getItem('token')
        const questions = localStorage.getItem('questions')
        if (token) {
            dispatch(setToken(token))
        }
        if (questions) {
            dispatch(setQuestions(JSON.parse(questions)))
        }
    }, [])
    return children;
}

function MyApp({ Component, pageProps }) {
  return (
      <Provider store={store}>
          <LocalStorage>
              <Component {...pageProps} />
              <div className="bg-red bg-blue-primary bg-gray bg-blue-dark bg-blue-secondary invisible"/>
          </LocalStorage>
      </Provider>
      )
}

export default MyApp
