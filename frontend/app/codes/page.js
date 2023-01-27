import '../../styles/pages/codes.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default async function Codes() {
    return (
        <div>
            <div className="top-container">
                <h1>Vehicle Code Reader</h1>
                <p className="top-caption text-muted">Find out what your <span className="obd">OBD-II</span> code means.</p>
                <div className='input-container'>
                    <form action="/api/codes" method="POST">
                        <div className="box-container">
                            <input type="text" name="code" className="code-input text-purple" placeholder='Enter your trouble code'></input>
                            <input type="submit" value="Search" className="submit-btn text-muted"></input>
                        </div>
                    </form>
                </div>
            </div>
            <div className='middle-container'>
                <h2>Most common OBD-II codes</h2>
                <a href="/codes/P0129" className="card-link">
                <div className="card code-card">
                    <div className="card-body">
                        <h5 className="card-title">P0129</h5>
                        <p className="card-text code-description text-muted">Coolant thermostat temperature too low (thermostat malfunction)</p>
                    </div>
                </div>
                </a>
                <a href="/codes/p0171" className="card-link">
                <div className="card code-card">
                    <div className="card-body">
                        <h5 className="card-title">P0171</h5>
                        <p className="card-text code-description text-muted">System running too lean (too much air, not enough fuel)</p>
                    </div>
                </div>
                </a>
                <a href="/codes/p0300" className="card-link">
                <div className="card code-card">
                    <div className="card-body">
                        <h5 className="card-title">P0300</h5>
                        <p className="card-text code-description text-muted">Random cylinder misfire detected by PCM</p>
                    </div>
                </div>
                </a>
                <a href="/codes/p0442" className='card-link'>
                <div className="card code-card">
                    <div className="card-body">
                        <h5 className="card-title">P0442</h5>
                        <p className="card-text code-description text-muted">Evaporative Emission (EVAP) system small leak detected</p>
                    </div>
                </div>
                </a>
                <a href="/codes/p0430" className='card-link'>
                <div className="card code-card">
                    <div className="card-body">
                        <h5 className="card-title">PO430</h5>
                        <p className="card-text code-description text-muted">Catalyst system low efficency bank 2</p>
                    </div>
                </div>
                </a>
                <a href="/codes/p0420" className='card-link'>
                <div className="card code-card">
                    <div className="card-body">
                        <h5 className="card-title">P0420</h5>
                        <p className="card-text code-description text-muted">Catalyst system low efficency</p>
                    </div>
                </div>
                </a>
                <a href="/codes/po301" className='card-link'>
                <div className="card code-card">
                    <div className="card-body">
                        <h5 className="card-title">PO301</h5>
                        <p className="card-text code-description text-muted">Engine Cylinder 1 misfire detected</p>
                    </div>
                </div>
                </a>
                <a href="/codes/p0302" className='card-link'>
                <div className="card code-card">
                    <div className="card-body">
                        <h5 className="card-title">PO302</h5>
                        <p className="card-text code-description text-muted">Engine Cylinder 2 misfire detected</p>
                    </div>
                </div>
                </a>
                <a href="/codes/p0303" className='card-link'>
                <div className="card code-card">
                    <div className="card-body">
                        <h5 className="card-title">PO303</h5>
                        <p className="card-text code-description text-muted">Engine Cylinder 3 misfire detected</p>
                    </div>
                </div>
                </a>
                <a href="/codes/p0304" className='card-link'>
                <div className="card code-card">
                    <div className="card-body">
                        <h5 className="card-title">PO304</h5>
                        <p className="card-text code-description text-muted">Engine Cylinder 4 misfire detected</p>
                    </div>
                </div>
                </a>
                <div className='code-meaning'>
                    <h4>What is OBD-II</h4>
                    <p className='tellus text-muted'>In 1996 auto manufactures implemented a universal system to read system faults called OBD-II. This system
                        mandated all vehicles have the common connector to read the codes and vehicle information. The OBD-II system
                        works by using a central computer system (ECM) and a large host of sensors throughout the vehicle. The OBD sensors
                        are located in many places like the motor, transmission, all vehicle electronics, emissions (EVAP) system and
                        many other locations where an issue could arise. When a fault is detected by the computer, the engine's
                        operating conditions are recorded (known as "freeze frame data") and stored in the system until the fault
                        is cleared or repaired. One thing to note is, if a fault's data is sitting in the vehicles memory and a
                        higher priority fault occurs, the vehicle's previous fault data will be overwritten by the new more important
                        fault's freeze frame data. The ECM may also perform self-checks to check for repaired codes and clear any.</p>
                </div>
                <div className="resources">
                    <h4>Helpful pages</h4>
                    <ul>
                        <li className="list-item"><a href="https://www.kbb.com/obd-ii/on-board-diagnostics-guide/">OBD-II detailed explanation</a></li>
                        <li className="list-item"><a href="https://aviondemand.com/insider/anatomy-of-the-dtc-obd2-codes-explained/">What codes mean</a></li>
                        <li className="list-item"><a href="https://www.geotab.com/blog/obd-ii/#:~:text=1968%20—%20The%20first%20OBD%20computer,set%20of%20diagnostic%20test%20signals.">OBD History</a></li>
                        <li className="list-item"><a href="https://www.launchtech.co.uk/support/information/dtc-codes-list/">All DTC codes</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
