// I am unsure how to get the email of the user server-side, so I will use my email

export default async function ClaimVehicle(req, res) {
    async function saveVehicle(make, model, year, email) {
        const res = await fetch(`http://localhost:5000/addvehicle/${make}/${model}/${year}/${email}`);
        return res.json()
    }


    const body = JSON.parse(req.body);
    let code = await saveVehicle(body.make.toLowerCase(), body.model.toLowerCase(), body.year, 'jgrim524@gmail.com');
    res.status(code.code).json({code: code});
}