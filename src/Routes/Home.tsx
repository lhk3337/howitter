import { dbService } from "firebaseAPI";
import React, { useEffect, useState } from "react";
import { TFormEvent, TChangeEvent, IhowitterMessage, hoWitterInfo } from "types/type";
import { Iprops } from "types/type";

const Home = ({ userObj }: Iprops) => {
  const [howitter, setHowitter] = useState<string>("");
  const [howitters, setHowitters] = useState<IhowitterMessage[]>([]);

  useEffect(() => {
    dbService
      .collection("howitter")
      .orderBy("createAt", "desc")
      .onSnapshot((snapshot) => {
        const howitterArray = snapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            } as hoWitterInfo)
        );
        setHowitters(howitterArray);
      });
  }, []);
  const onSubmit = async (event: TFormEvent) => {
    event.preventDefault();
    await dbService.collection("howitter").add({
      message: howitter,
      createAt: Date.now(),
      creatorId: userObj.uid,
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
