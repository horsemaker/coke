import React from "react";
import { CATEGORY } from "../../constants";
import { useCategories, useFilters } from "../../contexts";
import "./Categories.css";

export const Categories = () => {
  const { categories } = useCategories();
  const {
    filters: { category },
    dispatchFilters,
  } = useFilters();

  return (
    <div className="categories">
      {categories.map(({ _id, categoryName }) => (
        <div key={_id} className="category">
          <input
            className="category-input"
            type="radio"
            name="categories"
            id={categoryName}
            checked={category && category === categoryName}
            onChange={() =>
              dispatchFilters({ type: CATEGORY, payload: categoryName })
            }
          />
          <label className="category-label" htmlFor={categoryName}>
            {categoryName}
          </label>
        </div>
      ))}
    </div>
  );
};
