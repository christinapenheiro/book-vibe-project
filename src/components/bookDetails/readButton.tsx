"use client"
import { BooksContext } from "@/context/BooksContext";
import IBooks from "@/types/type";
import { useContext } from "react";



export interface ReadButtonProps {
    book: IBooks
}

export default function ReadButton({ book }: ReadButtonProps) {
    
    const {readBooks,setReadBooks} = useContext(BooksContext)

    const handleReadBooks = () => { 
    setReadBooks([...readBooks,book])

    console.log(readBooks)
    }

    return (     
        <button className="btn btn-primary flex-1" onClick={handleReadBooks}> Read Now </button>      
    );
}