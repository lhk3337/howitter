import { dbService } from "firebaseAPI";
import React, { useEffect } from "react";
import { Iprops } from "types";

const Profile = ({ userObj }: Iprops) => {
  const getMyHowitters = async () => {
    const howitters = await dbService
      .collection("howitter")
      .where("creatorId", "==", userObj.uid) // filtering
      .orderBy("createAt")
      .get();
    console.log(howitters.docs.map((doc) => doc.data()));
  };
  useEffect(() => {
    getMyHowitters();
  }, []);

  return <div>Profile</div>;
};

export default Profile;
