"use client";
import { useState } from 'react';
import styles from './styles/inputs.module.css'

export function Make({ makes, models, year }) {
    const [selected, setSelected] = useState("Acura");

    const changeSelected = (e) => {
        setSelected(e.target.value);
    }

    let makesModels = null;
    let options = null;

    if (selected) {
        let makeIndex = makes.indexOf(selected);
        makesModels = models[makeIndex];
    }

    if (makesModels) {
        options = makesModels.map((m) => <option key={m}>{m}</option>);
    }

    return (
        <div>
            <select onChange={changeSelected} className={styles.make} name="make">
            {makes.map(m => {
                return (
                    <option key={m}>{m}</option>
                )
            })}
            </select>
            <select className={styles.model} name="model">
                {
                    options
                }
            </select>
        </div>
    )
}