"use client";

import { BooksContext } from "@/context/BooksContext";
import { useContext } from "react";
import Image from "next/image";
import IBooks from "@/types/type";

export default function Page() {
  const { readBooks } = useContext(BooksContext);

  return (
    <div className="container mx-auto">
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Read Books"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {readBooks.length === 0 ? (
            <p className="text-l text-base-content/70">
              No books to show.
            </p>
          ) : (
            readBooks.map((book: IBooks) => (
              <div className="container mx-auto" key={book.bookId}>
                <div className="card lg:card-side bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300 border border-base-200 overflow-hidden mb-5">
                  {/* Book Image */}
                  <figure className="lg:w-44 bg-base-200 flex-shrink-0">
                    <Image
                      src={book.image}
                      alt={book.bookName}
                      width={180}
                      height={260}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </figure>

                  {/* Book Information */}
                  <div className="card-body p-5">
                    <div className="flex flex-col h-full">
                      {/* Title & Category */}
                      <div>
                        <div className="flex items-start justify-between gap-3">
                          <h2 className="card-title text-xl font-bold">
                            {book.bookName}
                          </h2>

                          <span className="badge badge-primary badge-outline">
                            {book.category}
                          </span>
                        </div>

                        <p className="text-sm text-base-content/60 mt-1">
                          by {book.author}
                        </p>
                      </div>

                      {/* Review */}
                      <p className="text-sm text-base-content/70 mt-4 line-clamp-2 md:line-clamp-3">
                        {book.review}
                      </p>

                      {/* Book Details */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-5 text-sm">
                        <div>
                          <p className="text-base-content/50">Rating</p>
                          <p className="font-semibold">⭐ {book.rating}</p>
                        </div>

                        <div>
                          <p className="text-base-content/50">Pages</p>
                          <p className="font-semibold">{book.totalPages}</p>
                        </div>

                        <div>
                          <p className="text-base-content/50">Published</p>
                          <p className="font-semibold">
                            {book.yearOfPublishing}
                          </p>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="card-actions justify-between items-center mt-auto pt-5">
                        <div>
                          <p className="text-xs text-base-content/50">
                            Publisher
                          </p>
                          <p className="text-sm font-medium">
                            {book.publisher}
                          </p>
                        </div>

                        <button className="btn btn-error btn-sm">Remove</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Wishlist Books"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Wishlist Books
        </div>

        {/* <div className="container mx-auto">
        <div className="card lg:card-side bg-base-100 shadow-sm">
          <figure>
            <Image src={} alt={} width={} height={} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
      </div> */}
      </div>
    </div>
  );
}
