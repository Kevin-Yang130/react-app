import Button from "./Button";
import Alert from "./Alert";

function App() {
  let displayAlert = false;

  return (
    <>
      <div>
        {displayAlert && <Alert> You Touched the Button </Alert>}
        <Button onClick={() => (displayAlert = true)}>
          Click me to show the alert
        </Button>
      </div>
    </>
  );
}

export default App;
