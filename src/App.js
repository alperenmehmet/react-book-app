import React, { useState } from "react";
import bookdata from "./bookdata";
import BookList from "./BookList";

function App() {
  const [books, setBooks] = useState(bookdata);
  return (
    <main>
      <section className="container">
        <h2>{books.length} Books Listed</h2>
        <BookList books={books} className="main" />
      </section>
    </main>
  );
}

export default App;
