import React, { useState } from "react";

const Home = () => {
  const [howitter, setHowitter] = useState<string>("");
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setHowitter(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={howitter} onChange={onChange} placeholder="What's on your mind?" maxLength={120} />
      <input type="submit" value="ho_witter" />
    </form>
  );
};

export default Home;
