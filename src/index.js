import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Allie Long"
      img="https://th.bing.com/th/id/OIP.S8MeR4MdlgQbIkH3L1GJtAHaHa?w=188&h=188&c=7&r=0&o=5&pid=1.7"
      tel="+987 654 321"
      email="long@allie.com"
    />
  </div>,
  document.getElementById("root")
);
