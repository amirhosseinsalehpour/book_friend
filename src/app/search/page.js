import dynamic from "next/dynamic";
import React from "react";
import { searchBooksAPI } from "../lib/searchBooksAPI";

const SearchComponent = dynamic(
  () => import("../_components/SearchComponent"),
  {
    suspense: true,
  }
);

export default async function SearchPage({ searchParams }) {
  const titleQuery = searchParams?.title || "";
  const authorQuery = searchParams?.author || "";

  const filteredBooks = await searchBooksAPI(titleQuery, authorQuery);

  return (
    <div>
      <React.Suspense fallback={<div>در حال بارگذاری ورودی‌ها...</div>}>
        <SearchComponent
          initialBooks={filteredBooks}
          initialTitle={titleQuery}
          initialAuthor={authorQuery}
        />
      </React.Suspense>
    </div>
  );
}
