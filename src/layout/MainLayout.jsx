import { NavLink, Outlet } from "react-router"

export default function MainLayout() {
    return(
        <>

            <div className="flex flex-row  justify-between items-center mx-12">
                <h1 className="font-serif"><span className="font-mono-me font-bold text-xl">Mono</span>Stroke</h1>

                <nav className="p-4 flex justify-center gap-4">
                    <NavLink to="/" className={({isActive}) => isActive ? "font-bold border-b-2 border-black" : "hover:text-blue-600"} >Home</NavLink>
                    <NavLink to="/courses" className={({isActive}) => isActive ? "font-bold border-b-2 border-black" : "hover:text-blue-600"}>Courses</NavLink>
                    <NavLink to="/about" className={({isActive}) => isActive ? "font-bold border-b-2 border-black" : "hover:text-blue-600"}>About</NavLink>
                </nav>

                <button>Log In</button>
            </div>

            <main>
                <Outlet/>
            </main>

            <footer className="border-t mt-20 py-10 px-10">

                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">


                    <div>
                        <h2 className="text-xl font-serif">
                            <span className="font-mono-me font-bold">Mono</span>Stroke
                        </h2>

                        <p className="text-sm text-gray-600 mt-3">
                            A creative space to learn drawing, improve skills, 
                            and explore the art of illustration.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-3">Explore</h3>

                        <div className="flex flex-col gap-2 text-sm">
                            <NavLink to="/" className="hover:underline">Home</NavLink>
                            <NavLink to="/courses" className="hover:underline">Courses</NavLink>
                            <NavLink to="/about" className="hover:underline">About</NavLink>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-3">Connect</h3>

                        <div className="flex flex-col gap-2 text-sm">
                            <a href="#" className="hover:underline">Instagram</a>
                            <a href="#" className="hover:underline">Twitter</a>
                            <a href="#" className="hover:underline">Discord</a>
                        </div>
                    </div>

                </div>

                {/* bottom */}
                <div className="text-center text-sm text-gray-500 mt-10">
                    © {new Date().getFullYear()} MonoStroke. All rights reserved.
                </div>

            </footer>
        </>
    )
}