import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    const {
      currentTarget: { value },
    } = e;
    setValue(value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Hello", value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={value} onChange={onChange} />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;
