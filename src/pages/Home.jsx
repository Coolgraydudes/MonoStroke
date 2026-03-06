import data from "../data/data.json";


export default function Home() {
    const featuredCourses = data.slice(0, 3);

    return(
        <>
            <div className="flex items-center flex-col justify-center h-[90vh]">
                <h1 className="text-9xl font-serif">
                    <span className="font-mono-me font-bold">Mono</span>Stroke
                </h1>
                <button className="px-10 py-2 border-2 rounded-xl font-mono-me mt-3.5" >Explore</button>
            </div>

            {/* <div className="py-20 px-10">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Featured Courses
                </h2>


            </div> */}

            {/* <div className="flex items-center flex-col justify-center h-screen">
                <h1 className="font-serif text-2xl">
                    <span className="font-mono-me font-bold text-5xl">W</span>ork 
                    <span className="font-mono-me font-bold text-5xl">I</span>n 
                    <span className="font-mono-me font-bold text-5xl">P</span>rogres</h1>
            </div> */}
        </>
    )
}