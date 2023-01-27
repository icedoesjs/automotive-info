import '../../styles/pages/decode.css';

export default async function Decoder() {
    return (
        <div>
            <div className="top-container">
                <h1>VIN Number Decoder</h1>
                <p className="top-caption text-muted">Input your <span className="vin">Vehicle Indentification Number</span> to view the vehicle.</p>
                <div className='input-container'>
                    <form action="/api/form" method="POST">
                        <div className="box-container">
                            <input type="text" name="vinnum" className="vin-input text-purple" placeholder='Enter a VIN' maxLength="17"></input>
                            <input type="submit" value="Search" className="submit-btn text-muted"></input>
                        </div>
                    </form>
                    <h3 className="text-muted"><span>Find VIN By Plate</span></h3>
                    <div className='box-container mt-3 box-plate'>
                        <form action="/api/form" id="plate-form" method="POST">
                            <input type="text" name="platenum" className="vin-input text-purple plate-input" placeholder='Currently Disabled' disabled={true}></input>
                            <select name="state" form="plate-form" id="plate-state" className="state-select text-muted">
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="MP">Northern Marina IS</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="PR">Puerto Rico</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="VI">Virgin Islands</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </select>
                            <input type="submit" value="Find VIN" className="btn btn-primary plate-btn"></input>
                        </form>
                    </div>
                </div>
            </div>
            <div className='middle-container'>
                <h2>What is a VIN and what does it do?</h2>
                <p className="vin-info text-muted">A vehicle identification number is a unique set of characters and numbers given to a vehicle when it is made.
                    The vehicle identification number is a unique combiniation of 17 letters and numbers without the letters
                    Q, I or O. Each spot in the vehicle identification number provides a piece of information
                    about the vehicle it's attached to. The vehicle identification number shows the
                    year, country of origin, factory it was made it, the make, the model and the serial number.
                </p>
                <img src="https://s.driving-tests.org/wp-content/uploads/2018/06/where-is-my-vin-full.jpg" className='whereisvin' />
                <div className='vin-standard'>
                    <h4>What information does the VIN show?</h4>
                    <p className='tellus text-muted'>Below you can see a image which puts into words how information is retrieved from a vehicle identification number.
                        The first character being where the vehicle was made, the second and 3rd showing the manufacturer, the 4th
                        through 8th being specific information about the model itself, the 9th being a security code used
                        by manufacturers, the 10th being the year of the car and the final 6 numbers is the serial number of the vehicle.</p>
                    <img src="https://www.autocheck.com/vehiclehistory/images/vin-decode.jpg" className='vininfo' />
                </div>
                <div className="resources">
                    <h4>Helpful pages</h4>
                    <ul>
                        <li className="list-item"><a href="https://www.txdmv.gov/motorists/how-to-find-the-vin#:~:text=Inside%20the%20Vehicle&text=In%20the%20driver%27s%20side%20door,a%20sticker%20in%20that%20location.">Finding a VIN</a></li>
                        <li className="list-item"><a href="https://www.drivesafeonline.org/defensive-driving/what-you-can-learn-from-vin-number">How it works</a></li>
                        <li className="list-item"><a href="https://www.fcarusa.com/TechSupport/KB/vin-year-code">Letters and years</a></li>
                        <li className="list-item"><a href="https://en.wikibooks.org/wiki/Vehicle_Identification_Numbers_(VIN_codes)/World_Manufacturer_Identifier_(WMI)">Manufacturer codes</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
