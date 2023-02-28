"use client";
import styles from './styles/a.module.css';

export function Remove({make, model, year, email}) {
    async function removeVehicle() {
        let data = {
            make: make,
            model: model,
            year: year,
            email: email
        }
        const res = await fetch('/api/delete', {
            method: 'POST',
            body: JSON.stringify(data)
        });
        return res.json()
    }


    return (
        <a className={styles.remove} onClick={removeVehicle}>Remove vehicle →</a>
    )

}

