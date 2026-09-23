"use client";
import type IBooks from "@/types/type";
import { ReactNode, useState, createContext } from "react";

interface BooksContextType {
  readBooks: IBooks[];
  setReadBooks: React.Dispatch<React.SetStateAction<IBooks[]>>;
  wishList: IBooks[];
  setWishlist: React.Dispatch<React.SetStateAction<IBooks[]>>;
}





export const BooksContext = createContext<BooksContextType | undefined>(undefined);



const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<IBooks[]>([]);
  const [wishList, setWishlist] = useState<IBooks[]>([]);

  const readWishBooksData : BooksContextType = {
    readBooks,
    setReadBooks,
    wishList,
    setWishlist,
  };

  return (
    <BooksContext.Provider value={readWishBooksData}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;
