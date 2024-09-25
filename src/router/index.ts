import express from 'express';

import authentication from './authentication';
import users from './users';
import visitants from './visitants';
const router = express.Router();


export default (): express.Router => {
    authentication(router);
    users (router);
    visitants(router);

    return router;
};