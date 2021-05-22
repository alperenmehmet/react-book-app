import React from "react";

const BookList = ({ books }) => {
  return (
    <>
      {books.map((books) => {
        const { id, name, writer, price, img } = books;
        return (
          <article key={id} className="book">
            <img src={img} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>BY {writer}</p>
              <p>{price}</p>
            </div>
            <row>
              <button>Add to Cart</button>
            </row>
          </article>
        );
      })}
    </>
  );
};

export default BookList;
