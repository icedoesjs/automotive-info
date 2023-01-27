export default async function remove(req, res) {

    async function removeVehicle(make, model, year, email) {
        const res = await fetch(`http://localhost:5000/removevehicle/${make}/${model}/${year}/${email}`);
        return res.json()
    }
    const body = JSON.parse(req.body);
    let code = await removeVehicle(body.make.toLowerCase(), body.model.toLowerCase(), body.year, 'jgrim524@gmail.com');
    res.redirect('/garage', 200);
}