import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

function Shop() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center ">All Books Are Here</h2>

      <div  className="grid gap-8 my-12 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 grid-cols-1 ">
        {books.map((book) => {
          return (
            <Card className="p-3"key={book._id}>
              <img src={book.imageUrl} alt="" className="h-60 " />
              <h5 className="text-1xl font-bold tracking-tight">
                <p>{book.bookTitle}</p>
              </h5>
              <p className="font-normal text-gray-700 text-gray-400">
                {/* <p>{book.bookTitle}</p> */}
              </p>

              <Link
                to={`/book/${book._id}`}
                className="bg-blue-700 font-semibold text-white py-2 rounded text-center h-12"
              >
                <button className="">Buy Now</button>
              </Link>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Shop;
