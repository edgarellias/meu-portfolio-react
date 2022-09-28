import { HomePage } from "../screens/HomePage";
import { Projects } from "../screens/Projects";
import { Technologies } from "../screens/Technologies";
import { Contact } from "../screens/Contact";
import { Routes, Route } from "react-router-dom";

export const ROUTES = () => {
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="projetos" element={<Projects />} />
            <Route path="tecnologias" element={<Technologies />} />
            <Route path="contato" element={<Contact />} />
        </Routes>
    )
}