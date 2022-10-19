import { useEffect, useState } from "react";
import axios from "axios";
import classNames from "classnames";
import UserSlide from "./UserSlide";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("https://randomuser.me/api/?results=5");
    setUsers(response.data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="carouselExampleCaptions" className="carousel slide w-50 mx-auto" data-bs-ride="false">
      <div className="carousel-indicators">
        {users.map((user, i) => (
          <button
            key={i}
            className={classNames({ active: i == 0 })}
            aria-current={i == 0 ? "true" : ""}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={i}
            aria-label={"Slide " + i}></button>
        ))}
      </div>
      <div className="carousel-inner">
        {users.map((user, i) => (
          <UserSlide key={i} user={user} i={i} />
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
export default UserList;
