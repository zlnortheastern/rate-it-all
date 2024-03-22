import { useEffect, useState } from "react";
import BaseTemplate from "../templates/BaseTemplate";
import ThreadInfoBoard from "../components/ThreadInfoBoard";
import ObjectFragment from "../components/ObjectFragment";
import { useParams } from "react-router-dom";
import { myFirebase } from "../models/MyFirebase";

export default function ThreadPage() {
  const { threadId } = useParams();
  const [ thread, setThread ] = useState({
    threadTag: "",
    threadImage: "",
    threadTitle: "",
    threadDescription: "",
    objects: [],
    id: "",
  });

  useEffect(() => {
    const getThread = async(threadId) => {
      const thread = await myFirebase.getThread(threadId);
      setThread(thread);
    };
    getThread(threadId);
  }, [threadId]);

  return (
    <div>
      <BaseTemplate>
        <div className="row gx-3">
          <div className="col-md-4">
            <div className="p-3">
              <ThreadInfoBoard thread={thread} />
            </div>
          </div>
          <div className="col-md-8">
            <div className="p-3">
              {thread.objects.map((object, index) => (
                <ObjectFragment
                  object={object}
                  key={index}
                  objectId={index}
                  threadId={threadId}/>
              ))}

            </div>
          </div>
        </div>
      </BaseTemplate>
    </div>
  );
}