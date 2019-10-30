import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./App.css"
import Home from "./Home"
// import users from "./user"
import Contact from "./Contact"

function App() {
  return (
    <Router>
      <div id="container">
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/contact/:id" component={Contact} />
        </main>
      </div>
    </Router>
  )
}

export default App
