import React, { useState } from "react";
import { dbService, storageService } from "firebaseAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { howitterObjsType, TChangeEvent, TFormEvent } from "types";
import * as Style from "styles/Components/HowitterStyle";

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
    <Style.Container>
      {editing ? (
        <>
          <Style.FormSubmit onSubmit={onSubmit}>
            <Style.FormInput
              type="text"
              value={newHowitter}
              onChange={onChange}
              placeholder="Edit your howitter"
              required
            />
            <Style.SubmitInput type="submit" value="업데이트 하기" />
          </Style.FormSubmit>
          <Style.CancelBtn onClick={togleEditing}>취 소</Style.CancelBtn>
        </>
      ) : (
        <>
          <Style.Message>{howitterObj.message}</Style.Message>
          {howitterObj.attachmentUrl && <Style.ProfileImg src={howitterObj.attachmentUrl} />}
          {isOwner && (
            <Style.HowitterAction>
              <span onClick={onDeleteClick}>
                <FontAwesomeIcon icon={faTrash} />
              </span>
              <span onClick={togleEditing}>
                <FontAwesomeIcon icon={faPencilAlt} />
              </span>
            </Style.HowitterAction>
          )}
        </>
      )}
    </Style.Container>
  );
};

export default Howitter;
