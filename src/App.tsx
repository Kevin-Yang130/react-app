import ListGroup from "./components/ListGroup";

function App() {
  let cities = ["New York", "London", "Tokyo", "Miami", "San Jose"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
