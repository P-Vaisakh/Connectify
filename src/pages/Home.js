import React, { useEffect, useState } from "react";
import "../styles/hello.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("db.json");
    setData(response.data.contacts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      <div className="home-container">
        <div className="hero-text">
          <h1>Lonely ? Connectify</h1>
          <h3>And make new friends</h3>
        </div>
        <div className="img-container">
          <img src="https://i.postimg.cc/Y9tQzcRZ/hello.jpg" alt="" />
        </div>
      </div>
      <div className="add">
        <h1 >Connect</h1>
        <div className="add-new">
          {data.length > 0 ? (
            data.map((contact, index) => <Card contact={contact} key={index}></Card>)
          ) : (
            <div className="add-new">
              <h3>no one to add new</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
};


const Card = ({contact}) => {
  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src={contact.profile} alt="" />
        </div>
        <div className="card-text">
          <h2>{contact.name}</h2>
          <h5>
            <i className="fa-solid fa-location-dot" style={{color: "#fefefe", marginRight:"10px"}}></i>
            {contact.location}
          </h5>
          <Link to={`/view/${contact.mobile}`}><button>Know more</button></Link>
        </div>
      </div>
    </>
  );
}


export default Home;
