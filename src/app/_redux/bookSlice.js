import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  personalShelf: [], 
  challengeProgress: {
    goal: 5, 
    current: 0, 
  },
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.personalShelf.push(action.payload); 
    },
    updateBookStatus: (state, action) => {
      const { id, status } = action.payload;
      const book = state.personalShelf.find((book) => book.id === id); 

      if (book) {
      
        if (book.status !== "read" && status === "read") {
          state.challengeProgress.current += 1;
        }
        if (book.status === "read" && status !== "read") {
          state.challengeProgress.current -= 1;
        }
        
        book.status = status;
      }
    },
    updateChallengeGoal: (state, action) => {
      state.challengeProgress.goal = action.payload;
    },
  },
});

export const { addBook, updateBookStatus, updateChallengeGoal } =
  bookSlice.actions;
export default bookSlice.reducer;
