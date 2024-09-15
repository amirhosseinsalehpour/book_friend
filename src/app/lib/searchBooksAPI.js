class ApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode;
  }
}

export const searchBooksAPI = async (title, author) => {
  let query = "";

  if (!title && !author) {
    return [];
  }

  if (title && author) {
    query = `https://openlibrary.org/search.json?title=${title}&author=${author}`;
  } else if (title) {
    query = `https://openlibrary.org/search.json?title=${title}`;
  } else if (author) {
    query = `https://openlibrary.org/search.json?author=${author}`;
  }

  try {
    const response = await fetch(query);

    if (!response.ok) {
      throw new ApiError("خطا در بارگزاری داده", response.status);
    }

    const data = await response.json();

    if (!data.docs || data.docs.length === 0) {
      throw new ApiError("کتاب مدنظر یافت نشد", 404);
    }

    return data.docs;
  } catch (error) {
    if (error instanceof ApiError) {
      console.error(
        `API Error: ${error.message} (status: ${error.statusCode})`
      );
    } else {
      console.error("Unexpected Error:", error);
    }

    return {
      error: true,
      message: error.message,
      statusCode: error.statusCode || 500,
    };
  }
};
