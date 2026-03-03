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
import styled from "styled-components";

const WrapperStyle=styled.div`
    width: 80vw;
    margin: auto;
    background-color: #e7eaf6;
`;

const ContainerStyle=styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }  
`;


function Root(){
    return(
        <WrapperStyle>
            <Header/>
            <ContainerStyle>
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
            </ContainerStyle>
            <Footer/>
        </WrapperStyle>
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
