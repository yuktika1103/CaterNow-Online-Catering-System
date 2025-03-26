// src/Pages/CorporateCateringPackages.jsx
import React from "react";
import { useParams } from "react-router-dom";
import CateringDetails from "../components/CateringDetails";
import CorporateCaterers from "../data/CorporateCatering.json?import";

const CorporateCateringPackages = () => {
    const { id } = useParams();
    const caterer = CorporateCaterers.find((c) => String(c.id) === String(id));

    if (!caterer) {
        return <h2>Caterer Not Found</h2>;
    }

    return <CateringDetails caterer={caterer} />;
};

export default CorporateCateringPackages;
