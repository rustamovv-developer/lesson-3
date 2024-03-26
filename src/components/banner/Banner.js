import React, { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import img from "../../assets/images/no-work.jpg";
import "./banner.css";

function Banner() {
  const [work, setWork] = useState("");
  const [data, setData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let works = {
      id: `work-${new Date().getTime()}`,
      work,
    };
    setData((p) => [...p, works]);
    setWork("");
  };
  const handleDelete = (id) => {
    let filtiredData = data?.filter((user) => user.id !== id);
    setData(filtiredData);
  };
  let cards = data?.map((user) => (
    <div className="card" key={user.id}>
      <h2 className="card__title">{user.work}</h2>
      <div className="card__end">
        <FaRegTrashCan
          style={{ color: "white" }}
          onClick={() => handleDelete(user.id)}
          className="card__icon"
        />
      </div>
    </div>
  ));
  return (
    <section className="banner" id="banner">
      <div className="banner__info">
        <form onSubmit={handleSubmit} action="" className="banner__form">
          <input
            required
            value={work}
            onChange={(e) => setWork(e.target.value)}
            type="text"
            placeholder="Write please"
            className="banner__input"
          />
          <button className="banner__btn">Add</button>
        </form>
        <div className="wrapper">{cards}</div>
        {data.length === 0 ? (
          <div>
            <img src={img} alt="img" className="empty" />
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}

export default Banner;
