import Button from "./Button";
import Alert from "./Alert";
import { useState } from "react";

function App() {
  let [displayAlert, setDisplayAlert] = useState(false);

  return (
    <>
      <div>
        {displayAlert && (
          <Alert onClose={() => setDisplayAlert(false)}>
            {" "}
            You touched the button{" "}
          </Alert>
        )}
        <Button onClick={() => setDisplayAlert(true)}>
          Click me to show the alert
        </Button>
      </div>
    </>
  );
}

export default App;
