import ReadingChallenge from "./_components/ReadingChallenge";
import CurrentlyReadingBooks from "./_components/CurrentlyReadingBooks";

export default function Home() {
  return (
    <div className="container mx-auto p-4 grid w-full grid-cols-1 gap-4 ">
      <div className="w-full md:col-span-12">
        <ReadingChallenge />
      </div>
      <div className="col-span-1">
        <h1 className="text-black font-semibold text-2xl py-5">
          کتاب های در حال مطالعه
        </h1>
        <CurrentlyReadingBooks />
      </div>
    </div>
  );
}
