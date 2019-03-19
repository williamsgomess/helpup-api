module.exports = app => {
    app.db.sequelize.sync().done(() => {
        app.listen(app.get('port'), () => {
            console.log(`Help UP API = porta ${app.get('port')}`);
        });
    });
}
