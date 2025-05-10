import { useState } from "react";

interface AddBookFormProps {
  onAdd: (book: {
    bookName: string;
    bookAuthor: string;
    bookPrice: number;
    bookGenre: string;
  }) => void;
}

const AddBookForm = ({ onAdd }: AddBookFormProps) => {
  const [bookName, setBookName] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookPrice, setBookPrice] = useState<number>(0);
  const [bookGenre, setBookGenre] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({ bookName, bookAuthor, bookPrice, bookGenre });
    setBookName("");
    setBookAuthor("");
    setBookPrice(0);
    setBookGenre("");
  };

  const inputStyle = {
    padding: "8px",
    margin: "5px",
    border: "2px solid #4a90e2",
    borderRadius: "4px",
    backgroundColor: "#f0f8ff",
    color: "#333",
  };

  const buttonStyle = {
    padding: "8px 16px",
    backgroundColor: "#4a90e2",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="Book Name"
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
        required
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Author"
        value={bookAuthor}
        onChange={(e) => setBookAuthor(e.target.value)}
        required
        style={inputStyle}
      />
      <input
        type="number"
        placeholder="Price"
        value={bookPrice || ""}
        onChange={(e) => {
          const value = e.target.value;
          setBookPrice(value === "" ? 0 : parseFloat(value));
        }}
        required
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Genre"
        value={bookGenre}
        onChange={(e) => setBookGenre(e.target.value)}
        required
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>
        Add Book
      </button>
    </form>
  );
};

export default AddBookForm;