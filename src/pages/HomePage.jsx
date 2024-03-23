import { useEffect, useState } from "react";
import BaseTemplate from "../templates/BaseTemplate";
import CategoryList from "../components/CategoryList";
import ThreadFragment from "../components/ThreadFragment";
import { myFirebase } from "../models/MyFirebase";
import Pagination from "../fragments/Pagination";


export default function HomePage() {
  const [threads, setThreads] = useState([]);
  const [filteredThreads, setFilteredThreads] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [threadsPerPage] = useState(5);

  useEffect(() => {
    const getThreads = async () => {
      const threads = await myFirebase.getThreads();
      setThreads(threads);
      setFilteredThreads(threads);
    };

    getThreads();
  }, []);

  const handleCategoryChange = (selectedCategories) => {
    if (selectedCategories.includes('All')) {
      // If 'All' is selected, show all threads
      setFilteredThreads(threads);
    } else {
      // Filter threads based on selected categories
      const filtered = threads.filter(thread =>
        selectedCategories.includes(thread.threadTag)
      );
      setFilteredThreads(filtered);
    }
  };

  // Get current threads based on pagination
  const indexOfLastThread = currentPage * threadsPerPage;
  const indexOfFirstThread = indexOfLastThread - threadsPerPage;
  const currentThreads = filteredThreads.slice(indexOfFirstThread, indexOfLastThread);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <BaseTemplate>
        <div className="row gx-3">
          <div className="col-2">
            <div className="p-3">
              <CategoryList onCategoryChange={handleCategoryChange}/>
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              {currentThreads.map((thread, index) => (
                <ThreadFragment thread={thread} key={index}/>
              ))}
            </div>
            <Pagination
              itemsPerPage={threadsPerPage}
              totalItems={filteredThreads.length}
              paginate={paginate}
            />
          </div>
        </div>
      </BaseTemplate>
    </div>
  );
}
