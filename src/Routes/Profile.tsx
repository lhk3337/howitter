import React, { useState } from "react";
import { Iprops, TFormEvent, TChangeEvent } from "types";
import * as Style from "styles/Routes/ProfileStyle";

const Profile = ({ userObj, refreshUser }: Iprops) => {
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

  const onChange = (event: TChangeEvent) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };

  const onSubmit = async (event: TFormEvent) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({
        displayName: newDisplayName,
      });
      refreshUser();
    }
  };
  return (
    <Style.Container>
      <form onSubmit={onSubmit}>
        <Style.Input onChange={onChange} type="text" autoFocus placeholder="Display name" value={newDisplayName} />
        <Style.Submit type="submit" value="사용자 업데이트 " placeholder="Update profile" />
      </form>
    </Style.Container>
  );
};

export default Profile;
