// src/Pages/WeddingCateringPackages.jsx
import React from "react";
import { useParams } from "react-router-dom";
import CateringDetails from "../components/CateringDetails";
import WeddingCaterers from "../data/WeddingCatering.json?import";

const WeddingCateringPackages = () => {
    const { id } = useParams();
    const caterer = WeddingCaterers.find((c) => String(c.id) === String(id));

    if (!caterer) {
        return <h2>Caterer Not Found</h2>;
    }

    return (
        <div>
            <CateringDetails caterer={caterer} />
        </div>
    );

};

export default WeddingCateringPackages;
