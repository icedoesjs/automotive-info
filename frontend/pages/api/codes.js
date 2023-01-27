export default async function handler(req, res) {
    const body = req.body;
    res.redirect(307, `/codes/${body.code}`)
}