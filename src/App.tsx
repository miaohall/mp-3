import Header from "./components/Header.tsx";
import Nav from "./components/Nav.tsx";
import Footer from "./components/Footer.tsx";
import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router";
import Home from "./components/mains/Home.tsx";
import Education from "./components/mains/Education.tsx";
import Volunteer from "./components/mains/Volunteer.tsx";
import Projects from "./components/mains/Projects.tsx";
import Skills from "./components/mains/Skills.tsx";
import Experiences from "./components/mains/Experiences.tsx";


function Root(){
    return(
        <>
            <Header/>
            <Nav/>
                <Routes>
                    <Route
                        path={'/'}
                        element={<Home/>}
                    />
                    <Route
                        path={'education.html'}
                        element={<Education/>}
                    />
                    <Route
                        path={'experiences.html'}
                        element={<Experiences/>}
                    />
                    <Route
                        path={'volunteer-work.html'}
                        element={<Volunteer/>}
                    />
                    <Route
                        path={'projects.html'}
                        element={<Projects/>}
                    />
                    <Route
                        path={'skills.html'}
                        element={<Skills/>}
                    />
                </Routes>
            <Footer/>
        </>
    )
}

const router = createBrowserRouter(
    [{path:"*", Component: Root}]
)

export default function App() {

    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}
