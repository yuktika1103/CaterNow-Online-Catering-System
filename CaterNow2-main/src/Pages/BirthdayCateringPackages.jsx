// src/Pages/BirthdayCateringPackages.jsx
import React from "react";
import { useParams } from "react-router-dom";
import CateringDetails from "../components/CateringDetails";
import BirthdayCaterers from "../data/BirthdayCatering.json?import";

const BirthdayCateringPackages = () => {
    const { id } = useParams();
    const caterer = BirthdayCaterers.find((c) => String(c.id) === String(id));

    if (!caterer) {
        return <h2>Caterer Not Found</h2>;
    }

    return <CateringDetails caterer={caterer} />;
};

export default BirthdayCateringPackages;
