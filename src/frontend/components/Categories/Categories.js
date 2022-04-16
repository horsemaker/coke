import React from "react";
import { useCategories } from "../../contexts";
import "./Categories.css";

export const Categories = () => {
  const { categories } = useCategories();

  return (
    <div className="categories">
      {categories.map(({ _id, categoryName }) => (
        <div key={_id} className="category">
          <input
            className="category-input"
            type="radio"
            name="categories"
            id={categoryName}
          />
          <label className="category-label" htmlFor={categoryName}>
            {categoryName}
          </label>
        </div>
      ))}
    </div>
  );
};
