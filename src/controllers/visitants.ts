import express from 'express';

import { getVisitantsByDpi, createVisitants } from '../db/visitants';
import { deleteVisitantsById, getVisitanstById, getVisitants } from '../db/visitants';
import visitants from 'router/visitants';



export const getAllVisitants = async(req: express.Request,  res: express.Response) => {
    try{
        const visitants = await getVisitants();

        return res.status(200).json(visitants);

    }catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
};


//OJO con delete deteVisitantsById
export const deleteVisitants = async (req: express.Request, res: express.Response) => {
    try{
        const { id } = req.params;
        const deleteVisitants  = await deleteVisitantsById (id);
        //const deleteVisitantsById= await deleteVisitantsById(id);
        return res.json(deleteVisitantsById);

    }catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
}

export const getVisitantById = async (req: express.Request, res: express.Response) => {
    try{
        const { id } = req.params;
        const response  = await getVisitanstById (id);
        //const deleteVisitantsById= await deleteVisitantsById(id);
        return res.json(response);

    }catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
}


export const updateVisitantsById = async (req: express.Request, res: express.Response) => {
    try{
        const { id } = req.params;
        const { name, lastname, house, dpi} = req.body;

        if(!id){
            return res.sendStatus(400);
        }

        const visitants = await getVisitanstById(id);

        visitants.name = name;
        visitants.lastname = lastname;
        visitants.house = house;
        visitants.dpi = dpi;

        await visitants.save();
        return res.status(200).json(visitants).end();

    }catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
}


export const visitantsRegister = async(req: express.Request, res: express.Response) => {
    try{
        const {name, lastname, house , dpi} = req.body;

        if(!name || !lastname || !house || !dpi){
            return res.sendStatus(400);
        }
        const visitants = await createVisitants({
            name,
            lastname,
            house,
            dpi,
        });

        return res.status(200).json(visitants).end();

    }catch(error){
        console.log(error);
        return res.sendStatus(400);
     }
}