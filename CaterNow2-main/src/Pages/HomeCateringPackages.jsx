// src/Pages/HomeCateringPackages.jsx
import React from "react";
import { useParams } from "react-router-dom";
import CateringDetails from "../components/CateringDetails";
import HomeCaterers from "../data/HomeCatering.json?import";

const HomeCateringPackages = () => {
    const { id } = useParams();
    const caterer = HomeCaterers.find((c) => String(c.id) === String(id));

    if (!caterer) {
        return <h2>Caterer Not Found</h2>;
    }

    return <CateringDetails caterer={caterer} />;
};

export default HomeCateringPackages;
