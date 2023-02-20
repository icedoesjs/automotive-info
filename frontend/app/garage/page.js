import '../../styles/pages/garage.css';
import { properWord } from '../../utils/func';
import { Remove } from '../../components/RemoveVehicle.component';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../pages/api/auth/[...nextauth]';


async function getGarage(email) {
    const res = await fetch(`http://localhost:5000/garage/${email}`);
    return res.json()
}

async function sortGarage(email) {
    let data = await getGarage(email);
    let garage = [];
    for (const prop in data) {
        garage.push(`${data[prop].year} ${properWord(data[prop].make)} ${properWord(prop)}`)
    };
    return garage;
}

export default async function Garage() {
    const session = await getServerSession(authOptions);
    const garage = await sortGarage(session?.user.email);
    return (
        <div>
            <div className='top-container'>
                <h1>Your Garage</h1>
                <p className='text-muted'>View your saved vehicles right here, it's like a virtual garage</p>
            </div>
            <div className="middle-container">
                {!garage.length ? <div className="message-container"><h3>No vehicles are in your garage</h3></div> : garage?.map(v => {
                    return (
                        <div className="card vehicle-card" key={v}>
                            <img alt={v} src={`https://cdn.imagin.studio/getImage?customer=usiceyydev&make=${v.split(" ")[1]}&modelFamily=${v.split(" ")[2]}&modelYear=${v.split(" ")[0]}&fileType=png`} />
                            <div className="card-body">
                                <h5 className="card-title">{v}</h5>
                            </div>
                            <div className="card-footer vehicle-card-footer">
                                <small className="text-muted"><a className="vehicle-card-link text-muted" href={`/search/${v.split(" ")[1]}/${v.split(" ")[2]}/${v.split(" ")[0]}`}>View vehicle →</a></small>
                                <small className="text-muted"><Remove make={v.split(" ")[1]} model={v.split(" ")[2]} year={v.split(" ")[0]} email={session?.user.email}/></small>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}
