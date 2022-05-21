import React from "react";
import "./Cards.css";

const Cards = ({ title, color, backgroundImage, note, isList, list }) => {
  console.log(list);
  return (
    <div style={{ backgroundColor: color }} className="cards">
      <h1>{title}</h1>

      {isList ? (
        <div>
          This is list
          {list.map((x) => {
            if (x.done) {
              return <div>{x.text}</div>;
            } else {
              return (
                <div style={{ textDecoration: "line-through" }}>{x.text}</div>
              );
            }
          })}
        </div>
      ) : (
        <div>{note}</div>
      )}
      <div className="showOnHover">
        <div>Pinned</div>
        <div>Color</div>
        <div>Image</div>
        <div>Delete</div>
      </div>
    </div>
  );
};

export default Cards;
