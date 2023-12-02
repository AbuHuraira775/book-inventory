import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from "flowbite-react";

export const EditBooks = () => {
  const {id} = useParams()
  const {author,imageUrl,category,bookDescription,bookTitle,bookPdfUrl} = useLoaderData()
  
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

  const [selectedBookCategory, setselectedBookCategory] = useState(categories[0]);

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setselectedBookCategory(event.target.value);
  };

  //handle form submission
  const handleUpdate = (e)=>{
    e.preventDefault()
    const form = e.target

    const bookTitle = form.bookTitle.value
    const author = form.author.value
    const imageUrl = form.imageUrl.value
    const category = form.categoryName.value
    const bookDescription = form.bookDescription.value
    const bookPdfUrl = form.bookPdfUrl.value

    const updatedBookObj = {
      bookTitle,author,imageUrl,category,bookDescription,bookPdfUrl
    }
    console.log(updatedBookObj)

  fetch(`http://localhost:3000/book/${id}`,{
    method:"PATCH",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedBookObj)
  }).then(res=>res.json()).then(data=>
    console.log(data),
    alert("Book is updated successfully"))

  }
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Update Book Data</h2>

      {/* form  */}
      <form onSubmit={handleUpdate} className="flex lg:w-[700px] flex-col flex-wrap gap-4">
        {/* 1st Row  */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            {/* book title  */}
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              type="text"
              placeholder="Book Title"
              defaultValue={bookTitle}
              required
            />
          </div>

          <div className="lg:w-1/2">
            {/* author name */}
            <div className="mb-2 block">
              <Label htmlFor="author" value="Author Name" />
            </div>
            <TextInput
              id="author"
              name="author"
              type="text"
              placeholder="Author Name"
              defaultValue={author}
              required
            />
          </div>
        </div>

        {/* 2nd Row  */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            {/* imageUrl  */}
            <div className="mb-2 block">
              <Label 
              htmlFor="imageUrl" 
              value="Image URL" />
            </div>
            <TextInput
              id="imageUrl"
              name="imageUrl"
              type="text"
              placeholder="Image URL"
              defaultValue={imageUrl}
              required
            />
          </div>

          <div className="lg:w-1/2">
            {/* category */}
            <div className="mb-2 block">
              <Label 
              htmlFor="inputState" 
              value="Book Category" />
            </div>

            <Select
              id="inputState"
              name="categoryName"
              className="w-full rounded"
              value={selectedBookCategory}
              defaultValue={category}
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
              <Label 
              htmlFor="bookDescription" 
              value="Book Description" />
            </div>

            <Textarea 
            id="bookDescription"
            name = "bookDescription"
            placeholder="Write your book description..." 
            defaultValue={bookDescription}
            required rows={6}
            className="w-full rounded p-3" />
          </div>

        {/* 4th Row  */}

        <div>
        <div className="mb-2 block">
          <Label 
          htmlFor="bookPdfUrl" 
          value="Book Pdf URL" />
        </div>
        <TextInput 
        id="bookPdfUrl" 
        name="bookPdfUrl"
        type="text" 
        placeholder="Book Pdf URL"
        defaultValue={bookPdfUrl}
        required shadow />
      </div>

      <Button type="submit" className="mt-5">Update Book</Button>

      </form>
    </div>
  )
}
