import { useState } from "react";

function App() {
  const [text, setText] = useState("11");

  return (
    <div className="App">
      <input
        type="text"
        onChange={({ target: { value } }) => {
          setText(value);
        }}
        value={text}
      />
    </div>
  );
}

export default App;
