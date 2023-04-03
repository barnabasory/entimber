import { createContext, useState } from "react";
import data from "../HomePage/Popular/data";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState(data);

  return (
    <div>
      <DataContext.Provider value={{ posts, setPosts }}>
        {children}
      </DataContext.Provider>
    </div>
  );
};

export default DataContext;
