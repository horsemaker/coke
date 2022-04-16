import { createContext, useContext, useState, useEffect } from "react";
import { getCategories } from "../services";

const CategoriesContext = createContext();

const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const getCategoriesResponse = await getCategories();
      if (getCategoriesResponse !== undefined) {
        setCategories(getCategoriesResponse);
      }
    })();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  );
};

const useCategories = () => {
  const context = useContext(CategoriesContext);

  if (context === undefined) {
    throw new Error("useCategories must be used within a CategoriesProvider");
  }

  return context;
};

export { CategoriesProvider, useCategories };
