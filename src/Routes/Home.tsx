import React, { useEffect, useState } from "react";
import { dbService } from "firebaseAPI";
import Howitter from "Components/Howitter";
import HowitterFactory from "Components/HowitterFactory";
import { hoWitterInfoType, Iprops } from "types";
import * as Style from "styles/Routes/HomeStyle";

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
    <Style.Container>
      <HowitterFactory userObj={userObj} />
      <Style.Items>
        {howitters.map((howitter: hoWitterInfoType) => (
          <Howitter key={howitter.id} howitterObj={howitter} isOwner={howitter.creatorId === userObj.uid} />
        ))}
      </Style.Items>
    </Style.Container>
  );
};

export default Home;
