import { useEffect, useState } from "react";
import BaseTemplate from "../templates/BaseTemplate";
import CategoryList from "../components/CategoryList";
import ThreadFragment from "../components/ThreadFragment";
import { myFirebase } from "../models/MyFirebase";


export default function HomePage() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    const getThreads = async () => {
      const threads = await myFirebase.getThreads();
      setThreads(threads);
    };

    getThreads();
  }, []);

  return (
    <div>
      <BaseTemplate>
        <div className="row gx-3">
          <div className="col-2">
            <div className="p-3">
              <CategoryList />
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              {threads.map((thread, index) => (
                <ThreadFragment thread={thread} key={index}/>
              ))}
            </div>
          </div>
        </div>
      </BaseTemplate>
    </div>
  );
}
