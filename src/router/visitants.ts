import express from 'express';

import { getAllVisitants, deleteVisitants, updateVisitantsById, visitantsRegister, getVisitantById} from '../controllers/visitants';
//import { createVisitants } from 'db/visitants';


export default (router: express.Router) => {

    router.post('/visitants', visitantsRegister);
    router.get('/visitants/:id', getVisitantById);
    router.get('/visitants', getAllVisitants);
    router.patch('/visitants/:id', updateVisitantsById);
    router.delete('/visitants/:id', deleteVisitants);
    
}