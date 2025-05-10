import { useEffect, useState } from "react";
import AddBookForm from "./AddBookForm";
import BookCard from "./BookCard";

interface Book {
  id: number;
  bookName: string;
  bookAuthor: string;
  bookPrice: number;
  bookGenre: string;
}

const Books = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/books");
      const data = await res.json();
      setBooks(data.datas);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleAddBook = async (book: Omit<Book, "id">) => {
    try {
      const res = await fetch("http://localhost:3000/api/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book),
      });
      if (res.ok) fetchBooks();
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  const handleDeleteBook = async (id: number) => {
    try {
      const res = await fetch(`http://localhost:3000/api/books/${id}`, {
        method: "DELETE",
      });
      if (res.ok) fetchBooks();
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div>
      <h2>Books</h2>
      <AddBookForm onAdd={handleAddBook} />
      {books.map((book) => (
        <BookCard key={book.id} {...book} onDelete={handleDeleteBook} />
      ))}
    </div>
  );
};

export default Books;
