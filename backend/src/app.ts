import 'express-async-errors';
import * as cors from 'cors';
import * as express from 'express';
import routes from './routes';
import errorHandler from './middlewares/errors.middleware';

export default class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();
  }
  
  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };
    
  this.app.get('/test', (_req, res) => res.json({ message: 'Hello World!' }));
  this.app.use(express.json());
  this.app.use(accessControl);
  this.app.use(cors());
  this.app.use('/users', routes.userRouter);
  this.app.use('/accounts', routes.accountRouter);
  this.app.use('/transactions', routes.transactionRouter);
  this.app.use('/token', routes.verifyTokenRoute);
  this.app.use('/', (_req, res) => res.status(404).json({ message: 'Not Found' }));

  this.app.use(errorHandler);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}
