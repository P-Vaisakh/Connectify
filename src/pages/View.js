import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const View = () => {
  const params = useParams();
  const { ph } = params;

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("/db.json");
    setData(response.data.contacts.find((contact) => contact.mobile == ph));
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="view-container">
      {data ? (
        <>
          {
            <div className="view-details">
              <div className="profile-container"><img src={data.profile} alt="" /></div>
              <div className="view-details-text">
                <h1>Name : {data.name}</h1>
                <h3>Email : {data.email}</h3>
                <h3>Mobile : {data.mobile}</h3>
                <h3>Location : {data.location}</h3>
              </div>
            </div>
          }
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default View;
