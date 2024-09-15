import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateBookStatus } from "../_redux/bookSlice";
import Image from "next/image";

export default function BookItem({ book }) {
  const dispatch = useDispatch();
  const [selectedStatus, setSelectedStatus] = useState(book.status);

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setSelectedStatus(newStatus);
    dispatch(updateBookStatus({ id: book.id, status: newStatus }));
  };

  return (
    <li className="bg-gray-100 p-4 rounded-lg shadow-lg flex flex-col items-center">
      <div className="w-24 h-36 mb-4">
        <Image
          src={book.cover || "/default-book-cover.jpg"}
          alt={`${book.title} cover`}
          width={96}
          height={144}
          objectFit="cover"
          className="rounded"
        />
      </div>

      <h3 className="text-center text-lg font-medium mb-2 text-black">
        {book.title}
      </h3>
      <p className="text-center text-black mb-4">نویسنده: {book.author}</p>

      <div className="w-full">
        <label className="block mb-2 text-sm font-medium text-black">
          وضعیت:
        </label>
        <select
          value={selectedStatus}
          onChange={handleStatusChange}
          className="w-full p-2 border rounded-lg text-black"
        >
          <option value="currently reading">در حال مطالعه</option>
          <option value="favorite">علاقه مندی</option>
          <option value="read">خوانده شده</option>
        </select>
      </div>
    </li>
  );
}
