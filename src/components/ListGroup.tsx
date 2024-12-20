import { useState } from "react";

function ListGroup() {
  let cities = ["New York", "London", "Tokyo", "Miami", "San Jose"];

  let [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <div>
        <h1>List</h1>
        {cities.length === 0 && <p> no item found. </p>}
        <ul className="list-group">
          {cities.map((city, index) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={city}
              onClick={() => {
                setSelectedIndex(index);
              }}
            >
              {city}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListGroup;
