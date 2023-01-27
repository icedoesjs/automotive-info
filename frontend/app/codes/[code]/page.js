import '../../../styles/pages/code.css';
import secrets from "../../../secrets";

async function getCodeData(code) {
    const options = {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': secrets.XRapidCodeReader,
            'X-RapidAPI-Host': 'car-code.p.rapidapi.com'
        },
        cache: "force-cache"
    }

    const res = await fetch(`https://car-code.p.rapidapi.com/obd2/${code}`, options);
    return res.json();
};


export default async function CodePage(params) {
    const data = await getCodeData(params.params.code.toUpperCase());
    return (
        <div>
            <div className="top-container">
                <h1>Trouble Code Information</h1>
                <p className="text-muted">You are viewing information for trouble code <span className="code">{params.params.code.toUpperCase()}</span>, see information below</p>
            </div>
            <div className="middle-container">
                <div className="code-help">
                    <h2>What does {params.params.code.toUpperCase()} mean?</h2>
                    <p className="text-muted code-help">DTC (Diagnostic Trouble Code) {params.params.code.toUpperCase()} means "{data.definition}". Even though {params.params.code.toUpperCase()} is a generic code, it can show up on many makes and models.</p>
                    <p className="note-help text-muted"><span className="note">Note:</span> the definition of the provided code may change depending on who the vehicle was manufactured by. It is suggested to consult your repair manual or a mechanic for more information.</p>
                </div>
                <div className="code-causes">
                    <h3>{params.params.code.toUpperCase()} Possible Causes</h3>
                    <p className="text-muted">There can be many possible causes that may trigger the mentioned code. Here are some possible causes:</p>
                    <ul className="causes-list">
                        {data.cause?.map(c => {
                            return (
                                <li key={c} className="text-muted">
                                    {c}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="how-found">
                    <h3>How are codes found?</h3>
                    <p className="text-muted">The concept is pretty simple and straight forward, the on-board computer uses many sensors throught multiple parts
                        of the vehicle to find and provide faults. The information is then stored to keep that code alive when the vehicle is turned off and on
                        as well as keep the check engine light on. The concept was introducted in the 80's and letter became standard and required. The data can be
                        accessed via a OBD-II scanning tool which plugs into the OBD-II port in your vehicle (see image below). The tool can clear codes, read them and some can even
                        provide real time data on the code. This information is very helpful to mechanics who can know what the issue is before doing any work.</p>
                    <img className="location-image" alt="OBD-II Port Location" src="https://helpcenter.spytec.com/hc/article_attachments/360064292391/obd_port.png" />
                </div>
                <div className="helpful-links">
                <h3>Helpful Links</h3>
                    <ul>
                        <li className="list-item"><a href="https://repairpal.com">Mechanic Finder</a></li>
                        <li className="list-item"><a href={`https://google.com/search?q=${params.params.code}`}>Google {params.params.code.toUpperCase()}</a></li>
                        <li className="list-item"><a href={`https://repairpal.com/obd-ii-code-${params.params.code}`}>Full Diagnostic</a></li>
                        <li className="list-item"><a href="https://www.verizon.com/support/knowledge-base-210135/#:~:text=The%20OBD-II%20port%20is%20usually%20located%20under%20the%20dashboard,indicated%20by%20numbers%204%20-%209.">Find Your OBD-II Port</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}