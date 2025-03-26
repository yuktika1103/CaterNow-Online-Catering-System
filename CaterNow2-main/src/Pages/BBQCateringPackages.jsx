// src/Pages/BBQCateringPackages.jsx
import React from "react";
import { useParams } from "react-router-dom";
import CateringDetails from "../components/CateringDetails";
import BBQCaterers from "../data/BBQCatering.json?import";


const BBQCateringPackages = () => {
    const { id } = useParams(); // Get the caterer ID from the URL
    const caterer = BBQCaterers.find((c) => String(c.id) === String(id));

    if (!caterer) {
        return <h2>Caterer Not Found</h2>;
    }

    return <CateringDetails caterer={caterer} />;
};

export default BBQCateringPackages;
