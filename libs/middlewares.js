import bodyParser from 'body-parser'
import cors from 'cors'

module.exports = app => {
  app.set('port', process.env.PORT || '3000');
  app.set('json spaces', 4);
  app.use(bodyParser.json());
  app.use((req, res, next) => {
    delete req.body.id;
    next();
  });
  app.use(cors({ origin: '*' }));
}
