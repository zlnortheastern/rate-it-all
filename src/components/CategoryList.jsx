export default function CategoryList() {
  const categoryList = [
    "All",
    "News",
    "Film",
    "TV Show",
    "Music",
    "Science",
    "Technology",
    "Game",
    "Sport",
    "E-sport",
    "Life",
    "Other"
  ];

  return (
    <div>
      <h5 className="text-center">Category List</h5>
      <ul className="list-group list-group-light">
        {categoryList.map((item, i) =>
          <li className="list-group-item" key={i}>
            <input
              className="form-check-input me-1"
              type="checkbox"
              defaultValue=""
              aria-label="..."
            />
            {item}
          </li>
        )}
      </ul>
    </div>
  );
}
