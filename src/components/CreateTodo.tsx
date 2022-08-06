import { FormEvent, useState } from "react";
import { Todo } from "../utils/types";

type Props = {
  onSubmit: ({ title, description }: Todo) => void;
};

export const CreateTodo = ({ onSubmit }: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <section className="w-56 h-auto flex justify-center items-center mx-auto mb-10 mt-5">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center p-4 border border-gray-400 rounded-lg shadow-lg"
      >
        <label htmlFor="title" className="text-lg font-bold">
          Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-400 rounded-lg"
        />
        <label htmlFor="description" className="text-lg font-bold mt-4">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-400 rounded-lg"
        />
        <button
          type="submit"
          className="w-full p-2 mt-4 bg-blue-500 text-white rounded-lg"
        >
          Create
        </button>
      </form>
    </section>
  );
};
