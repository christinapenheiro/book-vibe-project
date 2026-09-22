import type IBooks from "@/types/type";
import Image from "next/image";

export interface BookCardProps {
  book: IBooks;
}

export default function BookCard({ book }: BookCardProps) {
  const tags : string[] = Array.isArray(book.tags)
    ? book.tags
    : typeof book.tags === "string"
      ? book.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean)
      : ["Fiction", "Best Seller"];

  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto shadow-sm hover:shadow-xl transition-all duration-300 border border-base-200 flex flex-col justify-between">
      {/* Aspect-ratio fixed container for Next.js Image */}
      <figure className="relative h-60 w-full overflow-hidden bg-base-200">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </figure>

      <div className="card-body p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h2
              className="card-title text-base font-semibold line-clamp-1 flex-1"
              title={book.bookName}
            >
              {book.bookName}
            </h2>
            <span className="btn-success bg-[#23BE0A] shrink-0 p-1 rounded-xl px-2">
              {book.category}
            </span>
          </div>

          <p className="text-sm text-base-content/70 line-clamp-3">
            A captivating read exploring themes, characters, and insightful
            narratives.
          </p>
        </div>

        <div className="card-actions justify-end mt-4 pt-2 border-t border-base-100">
          {tags.length > 0 ? (
            tags.map((tag: string, idx: number) => (
              <span key={idx} className="badge badge-outline text-xs">
                {tag}
              </span>
            ))
          ) : (
            <>
              <span className="badge badge-outline text-xs">Fiction</span>
              <span className="badge badge-outline text-xs">Best Seller</span>
            </>
          )}
        </div>
        <div className="card-actions pt-3 border-base-200">
          <button
            type="button"
            className="btn btn-primary w-full gap-2 text-sm font-medium shadow-xs hover:shadow-md active:scale-[0.98] transition-all duration-200"
          >
            <span>View Details</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
