import { NavLink, Outlet } from "react-router"

export default function MainLayout() {
    return(
        <>

            <div className="flex flex-row  justify-between items-center mx-12">
                <h1 className="font-serif"><span className="font-mono-me font-bold">Mono</span>Stroke</h1>

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

            <footer>
                
            </footer>
        </>
    )
}