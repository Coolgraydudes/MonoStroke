// About.jsx
export default function About() {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4 text-center">About MonoStroke</h1>
            <p className="text-gray-700 text-center mb-8">
                MonoStroke is a creative platform for artists and learners who want to master drawing step by step. 
                Explore courses, tips, and inspiration to level up your skills.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-100 p-4 rounded-xl shadow hover:shadow-lg transition">
                    <h2 className="font-semibold mb-2">Our Mission</h2>
                    <p>Empowering artists worldwide with practical and fun drawing lessons.</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-xl shadow hover:shadow-lg transition">
                    <h2 className="font-semibold mb-2">Our Vision</h2>
                    <p>To create a global community where creativity flows freely and skills grow fast.</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-xl shadow hover:shadow-lg transition">
                    <h2 className="font-semibold mb-2">Our Approach</h2>
                    <p>Step-by-step tutorials, interactive courses, and inspiration for all levels.</p>
                </div>
            </div>
        </div>
    );
}