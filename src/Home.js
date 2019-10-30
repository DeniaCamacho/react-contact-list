import React from "react"
import users from "./user"
import { Link } from "react-router-dom"

function Home(props) {
  return (
    <ul>
      <header>My Peeps</header>
      {users.map(user => (
        <li className="names" key={"user-tab" + user.id}>
          <Link to={"/contact/" + user.id}>
            <img alt="thumbnailPics" src={user.picture.thumbnail} />
            <div className="cont">
              {user.name.first} {user.name.last}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Home
