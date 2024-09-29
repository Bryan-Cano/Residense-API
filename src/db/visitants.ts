import mongoose from "mongoose";

const visitansSchema = new mongoose.Schema({
    name: { type: String, required: true},
    lastname: { type: String, required: true},
    dpi: { type: String, required: true},
    house: { type: String, required: true}
},
 { timestamps : true }
);

export const visitantsModel = mongoose.model('Visitants', visitansSchema);
export const getVisitants = () => visitantsModel.find();
 
//Por DPI
export const getVisitantsByDpi = (dpi: string) => visitantsModel.findOne({ dpi });

export const getVisitanstById = (id: string) => visitantsModel.findById(id);
export const deleteVisitantsById = (id:string) => visitantsModel.findOneAndDelete({ _id: id});
export const updateVisitantsById = (id: string, values: Record<string, any>) => visitantsModel.findByIdAndUpdate(id, values);
export const createVisitants = (values: Record<string, any> ) => new visitantsModel(values) 
.save().then((visitants) => visitants.toObject());