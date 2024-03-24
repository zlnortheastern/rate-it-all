import PropTypes from 'prop-types';
import { useState } from 'react';

export default function CategoryList({ onCategoryChange }) {
  const [checkedCategories, setCheckedCategories] = useState(['All']);

  const handleCategoryChange = (category) => {
    if (category === 'All') {
      if (checkedCategories.includes('All')) {
        setCheckedCategories([]);
        onCategoryChange([]);
      } else {
        setCheckedCategories(['All']);
        onCategoryChange(['All']);
      }
    } else {
      const updatedCategories = checkedCategories.includes('All')
        ? [category]
        : checkedCategories.includes(category)
        ? checkedCategories.filter((item) => item !== category)
        : [...checkedCategories, category];
      setCheckedCategories(updatedCategories);
      onCategoryChange(updatedCategories.includes('All') ? [] : updatedCategories);
    }
  
    // Automatically check "All" if all categories are unchecked
    if (checkedCategories.length === 1 && checkedCategories.includes(category)) {
      setCheckedCategories(['All']);
      onCategoryChange(['All']);
    }
  };

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
              checked={checkedCategories.includes(item)}
              onChange={() => handleCategoryChange(item)}
              disabled={item === 'All' && checkedCategories.includes('All')}
            />
            {item}
          </li>
        )}
      </ul>
    </div>
  );
}

CategoryList.propTypes = {
  onCategoryChange: PropTypes.func.isRequired,
};