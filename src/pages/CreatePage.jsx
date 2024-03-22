import BaseTemplate from "../templates/BaseTemplate";
import ThreadForm from "../components/ThreadForm";
import { myFirebase } from "../models/MyFirebase";
import { useNavigate } from "react-router-dom";

export default function CreatePage() {
  const navigate = useNavigate();
  const onCreateThread = (threadData) => {
    const { threadTitle, threadTag, threadImage, threadDescription, objects } = threadData;
    myFirebase.addThread({ threadTitle, threadTag, threadImage, threadDescription, objects });
    navigate("/");
  };

  return (
    <div>
      <BaseTemplate>
        <ThreadForm onCreateThread={onCreateThread} />
      </BaseTemplate>
    </div>
  );
}