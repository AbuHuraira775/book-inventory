import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Label,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";

export const UploadBooks = () => {
  const categories = [
    "Fiction",
    "Sports",
    "Science",
    "Magic",
    "Programming",
    "Art",
    "Business",
    "Fantasy",
    "Memoir",
    "Non-Fiction",
    "Horror",
    "Religion",
    "History",
    "Travel",
  ];

  const [selectedBookCategory, setselectedBookCategory] = useState(
    categories[0]
  );

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setselectedBookCategory(event.target.value);
  };

  //handle form submission
  const handleSubmission = (e) => {
    e.preventDefault();
    const form = e.target;

    const bookTitle = form.bookTitle.value;
    const author = form.author.value;
    const imageUrl = form.imageUrl.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPdfUrl = form.bookPdfUrl.value;

    const bookObj = {
      bookTitle,
      author,
      imageUrl,
      category,
      bookDescription,
      bookPdfUrl,
    };
    console.log(bookObj);

    // send data to db

    fetch("http://localhost:3000/upload-book", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookObj),
    })
      .then((res) => res.json())
      .then(alert("uploaded book "));

    form.reset();
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload a Book</h2>

      {/* form  */}
      <form
        onSubmit={handleSubmission}
        className="flex lg:w-[700px] flex-col flex-wrap gap-4"
      >
        {/* 1st Row  */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            {/* book title  */}
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" className="text-base"/>
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              type="text"
              placeholder="Book Title"
              required
            />
          </div>

          <div className="lg:w-1/2">
            {/* author name */}
            <div className="mb-2 block">
              <Label htmlFor="author" value="Author Name"  className="text-base"/>
            </div>
            <TextInput
              id="author"
              name="author"
              type="text"
              placeholder="Author Name"
              required
            />
          </div>
        </div>

        {/* 2nd Row  */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            {/* imageUrl  */}
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="Image URL" className="text-base" />
            </div>
            <TextInput
              id="imageUrl"
              name="imageUrl"
              type="text"
              placeholder="Image URL"
              required
            />
          </div>

          <div className="lg:w-1/2">
            {/* category */}
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" className="text-base" />
            </div>

            <Select
              id="inputState"
              name="categoryName"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {categories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {/* 3rd Row  */}

        <div className="">
          {/* book Description  */}
          <div className="mb-2 block ">
            <Label htmlFor="bookDescription" value="Book Description" className="text-base" />
          </div>

          <Textarea
            id="bookDescription"
            name="bookDescription"
            placeholder="Write your book description..."
            required
            rows={6}
            className="w-full rounded p-3"
          />
        </div>

        {/* 4th Row  */}

        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPdfUrl" value="Book Pdf URL" className="text-base" />
          </div>
          <TextInput
            id="bookPdfUrl"
            name="bookPdfUrl"
            type="text"
            placeholder="Book Pdf URL"
            required
            shadow
          />
        </div>

        <Button type="submit" className="mt-5">
          Upload Book
        </Button>
      </form>
    </div>
  );
};
