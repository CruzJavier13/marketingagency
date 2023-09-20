import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Error404 from "./containers/errors/Error404.jsx"
import Home from "./containers/pages/Home.jsx"

import store from "./store.js"

import { Provider } from "react-redux"

function App() {

  return (
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="*" element={<Error404/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </Router>
      </Provider>
  )
}

export default App
