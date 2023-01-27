const tokens = require('../../secrets')

export default async function handler(req, res) {
    const body = req.body;

    if (body.state === undefined) {
        // Is a VIN
        res.redirect(307, `/decode/${body.vinnum}`)
    } else {
        // I could not find a API for this that wasn't PAID, this feature is currently disabled
        // Is a Plate
        let data = {
            plate: body.platenum,
            state: body.state
        }
        // fetch('https://platetovin.net/api/convert', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'multipart/form-data',
        //         'Authorization': tokens.platetovin
        //     },
        //     body: JSON.stringify(data)
        // }).then((res) => res.json()).then((response) => {
        //     console.log(response)
        // }).catch((e) => {
        //     console.error(e)
        // })
        res.redirect(307, `/decode`);
    }

}