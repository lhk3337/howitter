import React, { useEffect, useState } from "react";
import { dbService } from "firebaseAPI";

import { hoWitterInfoType, Iprops } from "types";
import Howitter from "Components/Howitter";
import HowitterFactory from "Components/HowitterFactory";
const Home = ({ userObj }: Iprops) => {
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

  return (
    <div>
      <HowitterFactory userObj={userObj} />
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
