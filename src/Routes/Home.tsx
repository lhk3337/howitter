import { dbService } from "firebaseAPI";
import React, { useEffect, useState } from "react";
import { TFormEvent, TChangeEvent, IhowitterMessage } from "types/type";

const Home = () => {
  const [howitter, setHowitter] = useState<string>("");
  const [howitters, setHowitters] = useState<IhowitterMessage[]>([]);

  const getHowitters = async () => {
    const dbHowitter = await dbService.collection("howitter").get();
    dbHowitter.forEach((document) => {
      const howitterObject = {
        ...document.data(),
        id: document.id,
      };
      setHowitters((prev: any) => [howitterObject, ...prev]);
    });
  };
  useEffect(() => {
    getHowitters();
  }, []);
  const onSubmit = async (event: TFormEvent) => {
    event.preventDefault();
    await dbService.collection("howitter").add({
      message: howitter,
      createAt: Date.now(),
    });
    setHowitter("");
  };

  const onChange = (event: TChangeEvent) => {
    const {
      target: { value },
    } = event;

    setHowitter(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={howitter} onChange={onChange} placeholder="What's on your mind?" maxLength={120} />
        <input type="submit" value="HoWitter" />
      </form>
      <div>
        {howitters.map((howitter: IhowitterMessage) => (
          <div key={howitter.id}>
            <h4>{howitter.message}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
