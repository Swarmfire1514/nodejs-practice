interface BookCardProps {
  id: number;
  bookName: string;
  bookAuthor: string;
  bookPrice: number;
  bookGenre: string;
  onDelete: (id: number) => void;
}

const BookCard = ({ id, bookName, bookAuthor, bookPrice, bookGenre, onDelete }: BookCardProps) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
      <h3>{bookName}</h3>
      <p>Author: {bookAuthor}</p>
      <p>Price: ${bookPrice}</p>
      <p>Genre: {bookGenre}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default BookCard;
