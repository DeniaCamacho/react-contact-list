import React from "react"
import users from "./user"

function Contact(props) {
  const id = props.match.params.id
  const user = users.find(user => user.id === id)

  return (
    <div>
      <div className="imgbox">
        <div className="arrow">&#8592;</div>
        <img alt="contactPics" src={user.picture.large} />
      </div>
      <p>
        {user.name.first} {user.name.last}
      </p>
      <p className="email">{user.email}</p>
      <p>{user.cell}</p>
      <p>
        {user.location.city},{user.location.state}
      </p>
    </div>
  )
}

export default Contact
