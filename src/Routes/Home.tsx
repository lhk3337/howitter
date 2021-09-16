import { dbService } from "firebaseAPI";
import React, { useEffect, useState } from "react";
import { TFormEvent, TChangeEvent, hoWitterInfoType, Iprops } from "types";
import Howitter from "Components/Howitter";
const Home = ({ userObj }: Iprops) => {
  const [howitter, setHowitter] = useState<string>("");
  const [howitters, setHowitters] = useState<hoWitterInfoType[]>([]);

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
            } as hoWitterInfoType)
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
        {howitters.map((howitter: hoWitterInfoType) => (
          <>
            <Howitter key={howitter.id} howitterObj={howitter} isOwner={howitter.creatorId === userObj.uid} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Home;
