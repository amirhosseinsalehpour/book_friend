"use client";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { updateChallengeGoal } from "../_redux/bookSlice";
import Image from "next/image";

export default function ReadingChallenge() {
  const { goal, current } = useSelector(
    (state) => state.books.challengeProgress
  );
  const dispatch = useDispatch();
  const [newGoal, setNewGoal] = useState(goal);

  const progress = goal > 0 ? Math.round((current / goal) * 100) : 0;

  const handleGoalChange = (e) => {
    setNewGoal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateChallengeGoal(Number(newGoal)));
  };

  return (
    <div className="text-black w-full flex justify-between items-center border rounded-3xl p-5">
      <div className="flex flex-col ">
        <h3 className="font-medium text-2xl mb-5">هدف مطالعه ماهانه</h3>

        <form
          onSubmit={handleSubmit}
          className="w-full flex justify-center items-center gap-2 py-5"
        >
          <div className="relative w-full">
            <label
              htmlFor="goal"
              className="absolute -top-3.5 right-4 bg-white px-1 text-sm text-gray-500"
            >
              تعداد کتاب
            </label>
            <input
              className="text-black border border-gray-300 rounded-lg w-full py-2 pr-4 pl-2 focus:outline-none focus:border-teal-600"
              type="number"
              id="goal"
              value={newGoal}
              onChange={handleGoalChange}
              min="1"
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <button
              type="submit"
              className=" bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition w-full"
            >
              به روز رسانی
            </button>
          </div>
        </form>

        <p className="text-center">میزان پیشرفت چالش</p>
        <div className=" progress-bar-container w-full  bg-gray-300 mt-2 rounded-full mx-auto">
          <div
            className="progress-bar bg-teal-600 h-4 rounded-full"
            style={{
              width: `${progress}%`,
              transition: "width 0.5s ease-in-out",
            }}
          ></div>
        </div>
        <p className="mt-2 text-sm text-gray-600">
          نوار پیشرفت: {current} کتاب خوانده شده
        </p>
      </div>

      <Image
        className="hidden md:flex"
        src="/003.png"
        alt="logo"
        width={298}
        height={204}
      />
    </div>
  );
}
