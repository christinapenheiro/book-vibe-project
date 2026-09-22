import type IBooks from "@/types/type";

export interface PageProps {
  params: Promise<{ id: string }>;
}

const getBooks = async (): Promise<IBooks[]> => {
  const res = await fetch("http://localhost:3000/data/booksData.json");
  const booksData: IBooks[] = await res.json();
  return booksData;
};

export default async function BookCardPage({ params }: PageProps) {
  const { id } = await params;
  const booksData = await getBooks();
  const book = booksData.find((data: IBooks) => String(data.bookId) === id);

  return (
  <div>
    
  </div>
  );
}
