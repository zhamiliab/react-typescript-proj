import React, { useState } from "react";
import { IProduct } from "../models";
import axios, { AxiosError } from "axios";
import { ErrorMessage } from "./ErrorMessage";

const productData: IProduct = {
  title: "test product",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
  rating: {
    rate: 3.9,
    count: 120,
  },
};

interface CreateProductProps {
  onCreate: (product: IProduct) => void;
}

export function CreateProduct({ onCreate }: CreateProductProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    if (value.trim().length === 0) {
      setError("Please enter a value");
      return;
    }
    productData.title = value;
    const response = await axios.post<IProduct>(
      "https://fakestoreapi.com/products",
      productData
    );
    onCreate(response.data);
  };

  // onchange didnt work this way so I used inline event target value instead on line 53
  // const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //   setValue(event.target.value);
  // };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter your product title"
        value={value}
        // onChange={changeHandler}
        onChange={(event) => setValue(event.target.value)}
      />
      {error && <ErrorMessage error={error} />}
      <button
        type="submit"
        className="py-2 px-4 border bg-yellow-400 hover:text-white "
      >
        Create
      </button>
    </form>
  );
}

//  1:20 min find the errors in here
// https://www.youtube.com/watch?v=OJ16BaPC6VI&t=5s
