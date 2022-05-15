import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import ControllerPage from "../ControllerPage/ControllerPage";

function CustomRoutes() {
    return (
        <Routes>
            <Route path="/Home" element={<ControllerPage page="Home"/>} />
            <Route path="/Experience" element={<ControllerPage page="Experience"/>} />
            <Route path="/Projects" element={<ControllerPage page="Projects"/>} />

            <Route
                path="/*"
                element={<Navigate to="/Home" replace />}
            />
        </Routes>
    )
}

export default CustomRoutes;