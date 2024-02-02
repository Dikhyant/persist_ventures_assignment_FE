import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../../pages/LandingPage/LandingPage";
import NavBar from "../../components/common/NavBar/NavBar";

type AppRoutesProps = {

}

const AppRoutes: React.FC<AppRoutesProps> = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route 
                    path="/"
                    element={
                        <Suspense fallback={<h1>Loading ....</h1>}>
                            <LandingPage />
                        </Suspense>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;