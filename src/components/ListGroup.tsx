function ListGroup() {
  let cities = ["New York", "London", "Tokyo"];

  const getMessage = () => {
    return cities.length === 0 ? <p>No item found.</p> : null;
  };

  return (
    <>
      <div>
        <h1>List</h1>
        {cities.length === 0 && <p> no item found. </p>}
        <ul className="list-group">
          {cities.map((city) => (
            <li
              className="list-group-item"
              key={city}
              onClick={() => console.log(city)}
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
