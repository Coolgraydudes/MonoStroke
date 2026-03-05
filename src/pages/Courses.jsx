import { Link } from "react-router";
import data from "../data/data.json";

export default function Course() {
  const levelColors = {
    Beginner: "bg-green-100 text-green-700",
    Intermediate: "bg-yellow-100 text-yellow-700",
    Advanced: "bg-red-100 text-red-700",
  };

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="h-[40vh] items-center text-center">
        <h1 className="text-5xl font-mono-me font-black text-center mb-10">
          Mono<span className="font-serif">Courses </span>
        </h1>
          <div>
            <input className="border w-100 p-2 rounded-md" type="text" name="" id="" placeholder="Search Courses..."/>
            <button className="bg-black border-2 text-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition ml-2 font-mono-me">Search</button>
          </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {data.map((course) => (
          <Link
            key={course.id}
            to={`/courses/${course.id}`}
          >
            <div
              key={course.id}
              className="relative bg-white rounded-xl border overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-44 object-cover"
              />

              <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full ${levelColors[course.level]}`}>
                {course.level}
              </span>

              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 line-clamp-1">
                  {course.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {course.lessons} lessons • {course.duration}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}