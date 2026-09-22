import IBooks from "@/types/type";
import BookCard from "../shared/BookCard";



const BooksSection = async() => {
    const res = await fetch("http://localhost:3000/data/booksData.json");
    const booksData = await res.json()

    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
          {booksData.map((book : IBooks) => (
            <BookCard key={book.bookId || book.bookName} book={book} />
          ))}
        </div>
      </div>
    );
}


export default BooksSection