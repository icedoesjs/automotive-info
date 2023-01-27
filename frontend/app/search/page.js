import '../../styles/pages/search.css';
import { Make } from '../../components/SelectMake.component';
import { getMakes, getModels } from '@/utils/func';

async function getMakesAndModels() {
    const res = await fetch(`https://auto.dev/api/models`);
    return res.json();
};

export default async function Search() {
    const data = await getMakesAndModels();
    const makes = getMakes(data);
    const models = getModels(data);
    return (
        <div>
            <div className="top-container">
                <h1>Search A Vehicle</h1>
                <p className="top-caption text-muted">See all the information needed about a <span className="vehicle">vehicle</span> in seconds, it's that easy</p>
            </div>
            <div className="search-container">
                <form action="/api/search" method="POST">
                    <Make makes={makes} models={models} year="2000" />
                    <input type="submit" value="View Vehicle" className="btn search-btn"></input>
                </form>
            </div>
            <div className="middle-container">
                <h2>How to find the right vehicle</h2>
                <p className='text-muted'>Buying a vehicle is a long and difficult process where you need to ask yourself many questions related to what
                you will be using the vehicle for or will it suit your lifestyle and habits. Review the questions below to help you start getting an idea
                of what vehicle may suit you and what is the best type of vehicle for your lifestyle.</p>
                <div className='questions-container'>
                    <h4>Will I be driving this vehicle a lot?</h4>
                    <p className='text-muted'>Are you driving your new ride mainly to work or is it more of a daily grocery getter. This simple
                    question will help you sort out what you really need out of the vehicle from a reliability standpoint, this question is one of the most
                    important questions when buying a car.</p>
                    <h4>Power Or Fuel Economy?</h4>
                    <p className='text-muted'>When answering this you really need to look into your driving style, do you like speed and power or do you
                    like a cheap fill-up at the pump? Smaller cars usually use a four-cylinder engine which tends to deliver the best fuel economy in the market,
                    but they often dont deliver the power and smoothness of larger engines. SUV's, some trucks and some small cars may use V6 which tends to deliver
                    power but slightly lower MPG vs a four-cylinder, a great example of this is the 2004 Acura TL which provides great power for what it's used in
                    and delivers an ultimately smooth ride with the sacrifice of MPG. V8's are usually in larger trucks and some sports cars like the 5.0 Mustang GT,
                    they are a great source of power but a large cost of MPG, but hey you can never beat the sound. You may also look into hybrids which tend to use
                    electric and a traditional gas engine to switch between leading to huge savings when coming to your gas bill. You may even look into diesels which
                    we will admit are mainly used for power, specfically torque but they also provide great highway fuel economy.</p>
                    <h4>How Much Cargo Or People Do You Carry?</h4>
                    <p className='text-muted'>If hauling cargo is important you may want to look into a pickup truck for heavy loads or material you don't want inside 
                    your new ride. SUV's or Wagons also offer a load of space but of course you may want to avoid putting dirty material inside when transporting something.
                    Short Bed trucks are a great in-between, they offer space in the cab as well as a shorter bed, you can still haul stuff but they aren't as long and 
                    fuel consuming.</p>
                </div>
                <div className="resources">
                    <h4>Helpful pages</h4>
                    <ul>
                        <li className="list-item"><a href="https://www.edmunds.com/car-buying/10-steps-to-finding-the-right-car-for-you.html">Finding the right car</a></li>
                        <li className="list-item"><a href="https://driverbase.com/recommendation/step1">Car finder quiz</a></li>
                        <li className="list-item"><a href="https://www.kbb.com/cars-for-sale/all">Cars for sale</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
