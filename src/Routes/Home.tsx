import { dbService } from "firebaseAPI";
import React, { useState } from "react";
import { TFormEvent, TChangeEvent } from "types/type";

const Home = () => {
  const [howitter, setHowitter] = useState<string>("");
  const onSubmit = (event: TFormEvent) => {
    event.preventDefault();
  };

  const onChange = (event: TChangeEvent) => {
    const {
      target: { value },
    } = event;

    setHowitter(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={howitter} onChange={onChange} placeholder="What's on your mind?" maxLength={120} />
      <input type="submit" value="HoWitter" />
    </form>
  );
};

export default Home;
