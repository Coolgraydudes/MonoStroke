import { useParams } from "react-router";
import data from "../data/data.json";

export default function CourseDetail() {
  const { id } = useParams();

  const course = data.find((item) => item.id === Number(id));

  if (!course) {
    return <h1 className="text-center mt-20 text-xl">Course not found</h1>;
  }

  return (
    <div className="min-h-screen px-6 py-16">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        <div className="border rounded-xl overflow-hidden">
          <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-full object-cover"
          />
        </div>

        <div>
          
          <span className="text-sm border px-3 py-1 rounded-full font-mono-me">{course.level}</span>

          <h1 className="text-4xl font-serif mt-4 mb-6">{course.title}</h1>

          <div className="space-y-2 text-gray-600 mb-8">
            <p>{course.lessons} Lessons</p>
            <p>Duration {course.duration}</p>
          </div>

          <button className="border-2 border-black px-8 py-2 rounded-lg font-mono-me hover:bg-black hover:text-white transition">
            Start Course
          </button>
        </div>
      </div>
    </div>
  )
} 