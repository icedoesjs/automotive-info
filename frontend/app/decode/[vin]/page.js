import { checkNested, loopOptions, properWord, yearsSince, getColors } from "../../../utils/func";
import "../../../styles/pages/vehicle.css";
import {Claim} from '../../../components/ClaimVehicle.component';
import secrets from "@/secrets";

async function getVin(vin) {
    const res = await fetch(`https://auto.dev/api/vin/${vin}`, {
        cache: "force-cache",
    });
    return res.json();
}

async function checkStatus(vin) {
    const res = await fetch(`https://simple-salvage-vin-check.p.rapidapi.com/?vin=${vin}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': secrets.XRapidSalvageTitle,
            'X-RapidAPI-Host': "simple-salvage-vin-check.p.rapidapi.com"
        }
    });
    return res.json()
}

export default async function VinPage(params) {
    const response = await getVin(params.params.vin);
    let v_data = {
        make: response.make.name,
        make_logo: `https://www.carlogos.org/car-logos/${response.make.name.toLowerCase()}-logo.png`,
        model: response.model.name,
        engine: response.engine.name,
        cylinders: response.engine.cylinder,
        fuel: response.engine.fuelType,
        horsepower: response.engine.horsepower,
        transmission: response.transmission.transmissionType,
        transmission_speeds: response.transmission.numberOfSpeeds,
        drive: response.drivenWheels,
        doors: response.numOfDoors,
        class: response.categories.vehicleSize,
        style: response.categories.vehicleStyle,
        year: response.years[0].year,
    };

    // This could definently be cleaned up
    if (!checkNested(response, "mpg", "city")) {
        v_data.mpg_city = "Unknown";
        v_data.mpg_hway = "Unknown";
    } else {
        v_data.mpg_city = response.mpg.city + " MPG";
        v_data.mpg_hway = response.mpg.highway + " MPG";
    }

    if (!checkNested(response, "price", "baseMsrp")) {
        v_data.msrp = "Unknown";

    } else {
        v_data.msrp = "$" + response.price.baseMsrp + " (Estimated)";
    }

    if (!checkNested(response, "price", "usedPrivateParty")) {
        v_data.trade_in = "Unknown";
        v_data.private_party = "Unknown";
    } else {
        v_data.trade_in = "$" + response.price.usedTradeIn + " (Estimated)";
        v_data.private_party = "$" + response.price.usedPrivateParty + " (Estimated)";
    }

    if (!checkNested(response, "transmission", "transmissionType")) {
        v_data.transmission = "AUTOMATIC";
        v_data.transmission_speeds = 6;
    } else {
        v_data.transmission = response.transmission.transmissionType;
        v_data.transmission_speeds = response.transmission.numberOfSpeeds;
    }

    if (response.engine.name == "Engine") {
        v_data.engine = response.engine.size + "L " + response.engine.cylinder + " Cylinder"
    }
    let colors = getColors(response.colors[0].options);
    let options = loopOptions(response.options);
    v_data.options = options;
    v_data.colors = colors;
    const salvage = await checkStatus(params.params.vin);

    let salvage_warning = <p className="text-muted">The title for <span className="vin-number">{params.params.vin}</span> came back as a clean title</p>;
    if (salvage) {
        salvage_warning = <p className="text-muted">The title for <span className="salvage">{params.params.vin}</span> came back as a salvage title</p>;
    }

    return (
        <div>
            <div className="top-container">
                <h2>We found a {v_data.year} {v_data.make} {v_data.model}</h2>
                {salvage_warning}
                <Claim make={v_data.make} model={v_data.model} year={v_data.year} />
            </div>
            <div className="make-info">
                <div className="info-header">
                    <img src={v_data.make_logo} className="make-logo" />
                </div>
                <div className="row row-cols-4 card-rows">
                    <div className="info-card">
                        <h5 className="card-head">VIN Number</h5>
                        <span className="info-text text-muted">{params.params.vin}</span>
                    </div>
                    <div className="info-card">
                        <h5 className="card-head">Make</h5>
                        <span className="info-text text-muted">{v_data.make}</span>
                    </div>
                    <div className="info-card">
                        <h5 className="card-head">Model</h5>
                        <span className="info-text text-muted">{v_data.model}</span>
                    </div>
                    <div className="info-card">
                        <h5 className="card-head">Year</h5>
                        <span className="info-text text-muted">{v_data.year} ({yearsSince(v_data.year)})</span>
                    </div>
                    <div className="info-card">
                        <h5 className="card-head">Engine</h5>
                        <span className="info-text text-muted">{v_data.engine}</span>
                    </div>
                    <div className="info-card">
                        <h5 className="card-head">Cylinders</h5>
                        <span className="info-text text-muted">{v_data.cylinders} Cylinders</span>
                    </div>
                    <div className="info-card">
                        <h5 className="card-head">Fuel Type</h5>
                        <span className="info-text text-muted">{properWord(v_data.fuel)}</span>
                    </div>
                    <div className="info-card">
                        <h5 className="card-head">Horsepower</h5>
                        <span className="info-text text-muted">{v_data.horsepower} HP</span>
                    </div>
                    <div className="info-card">
                        <h5 className="card-head">Transmission</h5>
                        <span className="info-text text-muted">{v_data.transmission}</span>
                    </div>
                    <div className="info-card">
                        <h5 className="card-head">Transmission Speeds</h5>
                        <span className="info-text text-muted">{v_data.transmission_speeds} Speeds</span>
                    </div>
                    <div className="info-card">
                        <h5 className="card-head">Drive Type</h5>
                        <span className="info-text text-muted">{properWord(v_data.drive)}</span>
                    </div>
                    <div className="info-card">
                        <h5 className="card-head">Number Of Doors</h5>
                        <span className="info-text text-muted">{v_data.doors} Doors</span>
                    </div>
                    <div className="info-card">
                        <h5 className="card-head">Vehicle Class</h5>
                        <span className="info-text text-muted">{v_data.class}</span>
                    </div>
                    <div className="info-card">
                        <h5 className="card-head">Vehicle Style</h5>
                        <span className="info-text text-muted">{v_data.style}</span>
                    </div>
                    <div className="info-card">
                        <h5 className="card-head">MPG (City)</h5>
                        <span className="info-text text-muted">{v_data.mpg_city}</span>
                    </div>
                    <div className="info-card">
                        <h5 className="card-head">MPG (Highway)</h5>
                        <span className="info-text text-muted">{v_data.mpg_hway}</span>
                    </div>
                    <div className="info-card">
                        <h5 className="card-head">MSRP (New)</h5>
                        <span className="info-text text-muted">{v_data.msrp}</span>
                    </div>
                    <div className="info-card">
                        <h5 className="card-head">Trade In Value</h5>
                        <span className="info-text text-muted">{v_data.trade_in}</span>
                    </div>
                    <div className="info-card">
                        <h5 className="card-head">Private Sale</h5>
                        <span className="info-text text-muted">{v_data.private_party}</span>
                    </div>
                </div>
                <div className="colors-header">
                    <h3>Optional Vehicle Colors</h3>
                </div>
                <div className="colors-container">
                    <table className="color-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Color Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {v_data.colors?.map(c => {
                                return (
                                    <tr key={c.split(":")[1]}>
                                        <td>{c.split(":")[1]}</td>
                                        <td>{c.split(":")[0]}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="options-container">
                    <div className="options-head">
                        <h3>Optional Vehicle Packages or Addons</h3>
                    </div>
                    <ul className="options-list">
                        {v_data.options?.map(o => {
                            return (
                                <li key={o}>
                                    {o}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="info-container">
                    <div className="info-head">
                        <h3>How was this information found?</h3>
                        <p className="text-muted">Using your vehicle identification number, we can submit a GET request to our API which in turns gives us
                            all the information displayed, we use mutiple apis and cache the data to provide the fastest and most
                            reliable data we can. You can see how the API uses your vehicle identification number to decode the
                            string given below in the image.</p>
                    </div>
                    <img src="https://www.autocheck.com/vehiclehistory/images/vin-decode.jpg" alt="How a VIN is decode" className="vin-decode"/>
                </div>
            </div>
        </div>
    );
}
