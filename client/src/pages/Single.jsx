import React from "react";
import { Link } from "react-router-dom";
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
// import { Menu } from "../components";
import "../index.css";
import { Menu } from "../components";

function Single() {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/9895332/pexels-photo-9895332.jpeg"
            alt=""
          />
          <div className="info">
            <span>username</span>
            <p>posted 2 days ago</p>  
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim .
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis maiores consequuntur omnis impedit at. Repellat modi esse aut doloremque doloribus debitis impedit voluptates consequatur, et velit voluptate facilis quam officiis. Lore Lorem100
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis non debitis quaerat impedit eum, ipsa minus amet explicabo voluptates nihil blanditiis tempore tenetur totam alias iusto ab. Odio, fugit voluptate. Lorem1909 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam animi totam voluptate, maxime ea consequuntur expedita sunt quo at quam sequi, voluptatem mollitia! Voluptatibus harum aut, libero aperiam nobis fugiat.
          </p>
      </div>
      <Menu/>
    </div>
  );
}

export default Single;
