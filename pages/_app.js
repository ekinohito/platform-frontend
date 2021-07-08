import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import {Provider, useDispatch} from "react-redux";
import store from "../store";
import {useEffect} from "react";
import {setToken} from "../reducers/exam";
import * as PropTypes from "prop-types";

function LocalStorage({children}) {
    const dispatch = useDispatch()
    useEffect(() => {
        const cache = localStorage.getItem('token')
        if (cache) {
            console.log(cache)
            dispatch(setToken(cache))
        }
    }, [])
    return children;
}

function MyApp({ Component, pageProps }) {
  return (
      <Provider store={store}>
          <LocalStorage>
              <Component {...pageProps} />
          </LocalStorage>
      </Provider>
      )
}

export default MyApp
