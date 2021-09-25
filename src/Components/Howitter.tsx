import React, { useState } from "react";
import { dbService, storageService } from "firebaseAPI";
import { howitterObjsType, TChangeEvent, TFormEvent } from "types";

const Howitter = ({ howitterObj, isOwner }: howitterObjsType) => {
  //isOwner는 작성자 인지 판별
  const [editing, setEditing] = useState<boolean>(false);
  const [newHowitter, setNewHowitter] = useState(howitterObj.message);

  const onDeleteClick = async () => {
    const ok = window.confirm("메시지를 삭제 하시겠습니까?");
    if (ok) {
      await dbService.doc(`howitter/${howitterObj.id}`).delete(); //메시지 삭제
      if (howitterObj.attachmentUrl) {
        await storageService.refFromURL(howitterObj.attachmentUrl).delete(); //파일 삭제
      }
    }
  };

  const togleEditing = () => setEditing((prev) => !prev);

  const onSubmit = async (event: TFormEvent) => {
    event.preventDefault();
    await dbService.doc(`howitter/${howitterObj.id}`).update({
      message: newHowitter,
    });
    setEditing(false);
  };

  const onChange = (event: TChangeEvent) => {
    const {
      target: { value },
    } = event;
    setNewHowitter(value);
  };
  return (
    <div>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input type="text" value={newHowitter} onChange={onChange} placeholder="Edit your howitter" required />
            <input type="submit" value="업데이트 하기" />
          </form>
          <button onClick={togleEditing}>취 소</button>
        </>
      ) : (
        <>
          <h4>{howitterObj.message}</h4>
          {howitterObj.attachmentUrl && <img src={howitterObj.attachmentUrl} width="50px" height="50px" />}
          {}
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>삭제 하기</button>
              <button onClick={togleEditing}>수정 하기</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Howitter;
