// Home Page
"use client";
import './global.css';
import '../styles/pages/index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faMagnifyingGlass, faCar } from '@fortawesome/free-solid-svg-icons';
import LoginBtn from './Login.button';
import { useSession } from 'next-auth/react';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
    const { data: session, status } = useSession();
    var email = session?.user?.email
    const {data, error} = useSWR(`http://localhost:5000/addtodb/${email}`, fetcher);
    if (error) console.log(error)
    return (
        <div>
            <div className="head-container">
                <div className="left">
                    <h1 className="head-text">Automotive Info</h1>
                    <p className="head-caption text-muted">Simple yet powerful tools to get all the information about vehicles of any type and help you make the correct purchase when looking for a new vehicle.</p>
                    <LoginBtn style="colored"/>
                </div>
                <div className="right">
                    <img src="https://res.cloudinary.com/carsxe/image/upload/f_auto,fl_lossy,q_auto/v1576606578/carsxe-api/undraw_by_my_car_ttge_o6dva1.svg" />
                </div>

            </div>
            <div className="site-features">
                <div className="left-features">
                    <h2 className="feature-head">Data we provide</h2>
                    <p className="feature-caption text-muted">We use a handful of RESTFUL APIS to provide the best and most accurate data we can, our data is constantly updated to enclose as much vehicles as possible.</p>
                    <h4 className="feature-title">Year, Make and Model</h4>
                    <p className="feature-info text-muted">Of course we provide the basics, with data constantly being updated to never leave a car behind.</p>
                    <h4 className="feature-title">Engine, Trims and Features</h4>
                    <p className="feature-info text-muted">The engine information, vehicle packages and basic features are always provided.</p>
                    <h4 className="feature-title">MPG, Pricing and Styles</h4>
                    <p className="feature-info text-muted">Extended data is shown on every thing the vehicle can offer and extra information needed.</p>
                </div>
                <div className="right-features">
                    <img className="features-img" src="https://autocanadaprod-com.cdn-convertus.com/uploads/sites/9/2020/01/img2.png" />
                </div>
            </div>
            <div className="site-pages px-4">
                <h2 className="pages-title">Shop smarter, not harder.</h2>
                <p className="pages-caption text-muted">Don't let salesman sell you just anything, find information on our site and gather knowledge on your next purchase.</p>
                <div className="row">
                    <div className="page-card p-3 m-2">
                        <div className='icon-holder'>
                            <FontAwesomeIcon icon={faCar} className="page-card-icon" />
                        </div>
                        <h4 className="page-title">VIN Number Decoder</h4>
                        <p className="page-description text-muted">Input and VIN and get returned all the information about the vehicle connected to the provided vin.</p>
                        <a href="/decode">Decode a VIN →</a>
                    </div>
                    <div className="page-card p-3 m-2">
                        <div className='icon-holder'>
                            <FontAwesomeIcon icon={faWrench} className="page-card-icon" />
                        </div>
                        <h4 className="page-title">Vehicle Code Reader</h4>
                        <p className="page-description text-muted">Read and view possible solutions to OBD-II codes being thrown, we will show you mechanics near you who can fix the problem.</p>
                        <a href="/codes">Read OBD-II Code →</a>
                    </div>
                    <div className="page-card p-3 m-2">
                        <div className='icon-holder'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="page-card-icon" />
                        </div>
                        <h4 className="page-title">Search Specific Vehicle</h4>
                        <p className="page-description text-muted">Input your vehicle of choice and recieve all the information we can find, see MPG, packages, styles, engine, trims and pricing.</p>
                        <a href="/search">Search Vehicles →</a>
                    </div>
                </div>
            </div>
            <div className="sign-up">
                <div className='left-signup'>
                    <h2 className="signup-today">Sign up for our newletter, we wont spam</h2>
                    <p className="signup-caption">We provide daily automotive information and help with common issues, why not sign up?</p>
                </div>
                <div className="right-signup">
                <button type="button" className="btn btn-signup"><span className="bi bi-google"></span>&nbsp;Subscribe with Google</button>
                </div>
            </div>
        </div>
    )
}
