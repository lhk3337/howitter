import { dbService, storageService } from "firebaseAPI";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TFormEvent, TChangeEvent, hoWitterInfoType, FileReaderEvent, Iprops } from "types";
import Howitter from "Components/Howitter";
const Home = ({ userObj }: Iprops) => {
  const [howitter, setHowitter] = useState<string>("");
  const [howitters, setHowitters] = useState<hoWitterInfoType[]>([]);
  const [attachment, setAttachment] = useState<string | null>();

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
  const onFileChange = (event: TChangeEvent) => {
    const {
      target: { files },
    } = event;
    const fileOne = files![0];

    const reader = new FileReader();
    reader.onloadend = (finishedEvent: FileReaderEvent) => {
      //1. 파일 읽기가 완료 되면 아래의 코드가 실행
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result); // finishedEvent.currentTarget.result 값을 attachment로 넘김(사진 파일을 읽고 나서 나타남)
    };

    reader.readAsDataURL(fileOne); //2. 파일을 읽어 버퍼에 저장
    // 파일 관련 객체(reader)
  };

  const onClearImage = () => setAttachment(null);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={howitter} onChange={onChange} placeholder="What's on your mind?" maxLength={120} />
        <input type="file" accept="image/*" onChange={onFileChange} />
        <input type="submit" value="HoWitter" />
        {attachment && (
          <div>
            <button onClick={onClearImage}>Clear</button>
            <img src={attachment} width="50px" height="50px" />
          </div>
        )}
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
