module.exports = app => {
    app.get('/', (req, res) => res.json({status: 'Pronto para uma nova experiência? Vem com a gente!'}));
}
