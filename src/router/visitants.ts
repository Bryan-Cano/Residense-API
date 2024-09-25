import express from 'express';

import { getAllVisitants, deleteVisitants, updateVisitantsById, visitantsRegister} from '../controllers/visitants';
//import { createVisitants } from 'db/visitants';


export default (router: express.Router) => {

    router.post('/visitants', visitantsRegister);
    router.get('/visitants', getAllVisitants);
    router.patch('/visitants/:id', updateVisitantsById);
    router.delete('/visitants/:id', deleteVisitants);
    
    
}