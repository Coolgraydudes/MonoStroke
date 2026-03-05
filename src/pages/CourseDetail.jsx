import { useParams } from "react-router";
import data from "../data/data.json";

export default function CourseDetail() {
  const { id } = useParams();

  const course = data.find((item) => item.id === Number(id));

  if (!course) {
    return <h1>Course not found</h1>;
  }

  return (
    <div className="min-h-screen py-12 px-6">
        <div>
            <img src={course.image} alt={course.title} className="w-full rounded-xl" />
        </div>
    </div>
  );
}