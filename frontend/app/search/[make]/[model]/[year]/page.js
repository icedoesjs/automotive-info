// Very very limited on data due to all apis being paid 
import '../../../../../styles/pages/vehicle.css';
import secrets from "../../../../../secrets";
import { properWord } from "../../../../../utils/func";

export default async function ViewVehicle(params) {
    const make = params.params.make;
    const model = params.params.model;
    const year = params.params.year;

    async function getData(model) {
        const res = await fetch(`https://api.api-ninjas.com/v1/cars?limit=1&model=${model}`, {
            headers: {
                'X-Api-Key': secrets.NinjasAPI
            }
        });
        return res.json();
    }

    const car = await getData(model)
    if (car[0].transmission == "a") car[0].transmission = "Automatic";
    if (car[0].transmission == "m") car[0].transmission = "Manual";
    car[0].displacement = car[0].displacement + ".0" + "L";

    return (
        <div>
            <div className="top-container">
                <h1>{properWord(car[0].make)} {properWord(car[0].model)}</h1>
            </div>
            <div className="make-info">
                <div className="info-header">
                    <img src={`https://www.carlogos.org/car-logos/${car[0].make}-logo.png`} className="car-img" />
                </div>
                <div className='row row-cols-4 card-rows'>
                    <div className="info-card">
                        <h5 className="card-head">Make</h5>
                        <span className="info-text text-muted">{properWord(car[0].make)}</span>
                    </div>
                    <div className="info-card">
                        <h5 className="card-head">Model</h5>
                        <span className="info-text text-muted">{properWord(car[0].model)}</span>
                    </div>
                    <div className="info-card">
                        <h5 className="card-head">Model Year</h5>
                        <span className="info-text text-muted">{car[0].year}</span>
                    </div>
                    <div className="info-card">
                        <h5 className="card-head">Displacement</h5>
                        <span className="info-text text-muted">{car[0].displacement}</span>
                    </div>
                    <div className="info-card">
                        <h5 className="card-head">Number Of Cylinders</h5>
                        <span className="info-text text-muted">{car[0].cylinders}</span>
                    </div>
                    <div className="info-card">
                        <h5 className="card-head">Drive Type</h5>
                        <span className="info-text text-muted">{car[0].drive}</span>
                    </div>
                    <div className="info-card">
                        <h5 className="card-head">Fuel Type</h5>
                        <span className="info-text text-muted">{properWord(car[0].fuel_type)}</span>
                    </div>
                    <div className="info-card">
                        <h5 className="card-head">Transmission (Mainly)</h5>
                        <span className="info-text text-muted">{car[0].transmission}</span>
                    </div>
                    <div className="info-card">
                        <h5 className="card-head">City MPG</h5>
                        <span className="info-text text-muted">{car[0].city_mpg}MPG</span>
                    </div>
                    <div className="info-card">
                        <h5 className="card-head">Highway MPG</h5>
                        <span className="info-text text-muted">{car[0].highway_mpg}MPG</span>
                    </div>
                    <div className="info-card">
                        <h5 className="card-head">Combined MPG</h5>
                        <span className="info-text text-muted">{car[0].combination_mpg}MPG</span>
                    </div>
                </div>
                <div className="info-container">
                    <div className="info-head">
                        <h3>How was this information found?</h3>
                        <p className="text-muted">Using the model name and make, we can search an API to return the information we need and want, it then is sorted
                        to find any issues, formatted properly and sent over to you on this page. We try to gather all the information we can but sometimes we 
                        hit barriers we cannot cross.</p>
                        <h3>How to get more information</h3>
                        <p className="text-muted">We try to provide as much data as available to us, but it can be hard. If you would like to see even more detailed
                        information about your vehicle or a vehicle in general please view our VIN decoder which is a simple and easy VIN decoder. The VIN decoder provides
                        extended information about your vehicle and everything in-between.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}