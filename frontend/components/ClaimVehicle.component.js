"use client";
import { useState } from 'react';

export function Claim({make, model, year, email}) {
    const [aText, setAText] = useState("Add To Garage");
    const [aLink, setALink] = useState("#");

    async function postData(data) {
        const res = await fetch('/api/claim', {
            method: 'POST',
            body: JSON.stringify(data)
        });
        return res.json()
    }

    async function claimVehicle() {
        let data = {
            "email": email,
            "make": make,
            "model": model,
            "year": year
        }
        let res = await postData(data);
        if (res.code.code === 200) {
            setAText("In Your Garage");
            setALink("/garage")
        } else {
            return;
        }
    }


    return (
        <a href={aLink} onClick={claimVehicle} className="is-yours">{aText}</a>
    )
}
