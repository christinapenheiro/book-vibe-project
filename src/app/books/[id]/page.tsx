import ReadButton from "@/components/bookDetails/readButton";
import type IBooks from "@/types/type";
import Image from "next/image";

interface PageProps {
  params: Promise<{ id: string }>;
}

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/data/booksData.json");
  const booksData = await res.json();
  return booksData;
};

const BookCardPage = async({ params }: PageProps) => {
  const { id } = await params;
  const booksData = await getBooks();
  const book = booksData.find((data: IBooks) => String(data.bookId) === String(id));
  console.log(book)

  return (
    <div>
      <main className="min-h-screen bg-base-200 py-12">
        {" "}
        <div className="container mx-auto px-4">
          {" "}
          {/* Main Book Section */}{" "}
          <div className="bg-base-100 rounded-2xl shadow-lg overflow-hidden">
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 md:p-10">
              {" "}
              {/* Book Image */}{" "}
              <div className="flex justify-center items-center bg-base-200 rounded-xl p-8">
                {" "}
                <Image
                  src={book.image}
                  alt={book.bookName}
                  width={350}
                  height={500}
                  className="rounded-lg shadow-xl object-cover"
                />{" "}
              </div>{" "}
              {/* Book Information */}{" "}
              <div className="flex flex-col justify-center">
                {" "}
                {/* Category */}{" "}
                <div className="mb-3">
                  {" "}
                  <span className="badge badge-primary badge-lg">
                    {" "}
                    {book.category}{" "}
                  </span>{" "}
                </div>{" "}
                {/* Title */}{" "}
                <h1 className="text-3xl md:text-4xl font-bold mb-3">
                  {" "}
                  {book.bookName}{" "}
                </h1>{" "}
                {/* Author */}{" "}
                <p className="text-lg text-base-content/70 mb-5">
                  {" "}
                  By <span className="font-semibold">{book.author}</span>{" "}
                </p>{" "}
                {/* Rating */}{" "}
                <div className="flex items-center gap-3 mb-6">
                  {" "}
                  <div className="rating rating-sm">
                    {" "}
                    {[1, 2, 3, 4, 5].map((star) => (
                      <input
                        key={star}
                        type="radio"
                        className="mask mask-star-2 bg-orange-400"
                        checked={Math.round(book.rating) === star}
                        readOnly
                        aria-label={`${star} star`}
                      />
                    ))}{" "}
                  </div>{" "}
                  <span className="font-semibold">
                    {" "}
                    {book.rating} / 5{" "}
                  </span>{" "}
                </div>{" "}
                {/* Review */}{" "}
                <p className="text-base-content/80 leading-relaxed mb-7">
                  {" "}
                  {book.review}{" "}
                </p>{" "}
                {/* Book Details */}{" "}
                <div className="grid grid-cols-2 gap-4 border-t border-base-300 pt-6">
                  {" "}
                  <div>
                    {" "}
                    <p className="text-sm text-base-content/60">
                      Publisher
                    </p>{" "}
                    <p className="font-semibold">{book.publisher}</p>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <p className="text-sm text-base-content/60">
                      {" "}
                      Published{" "}
                    </p>{" "}
                    <p className="font-semibold">
                      {" "}
                      {book.yearOfPublishing}{" "}
                    </p>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <p className="text-sm text-base-content/60">
                      {" "}
                      Total Pages{" "}
                    </p>{" "}
                    <p className="font-semibold"> {book.totalPages} </p>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <p className="text-sm text-base-content/60">Tags</p>{" "}
                    <p className="font-semibold">{book.tags}</p>{" "}
                  </div>{" "}
                </div>{" "}
                {/* Action Buttons */}{" "}
                <div className="flex gap-3 mt-8">
                  {" "}
                  <ReadButton book={book}></ReadButton>
                  <button className="btn btn-outline flex-1">
                    {" "}
                    Add to Wishlist{" "}
                  </button>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            {/* Bottom Description */}{" "}
            <div className="border-t border-base-300 p-6 md:p-10">
              {" "}
              <h2 className="text-2xl font-bold mb-4">
                {" "}
                About this book{" "}
              </h2>{" "}
              <p className="leading-7 text-base-content/75">
                {" "}
                {book.review}{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </main>
    </div>
  );
}

export default BookCardPage;
