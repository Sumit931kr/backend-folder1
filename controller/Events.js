// import { Collection } from "mongodb";
import { curd } from "../db/db.js";

export const createvent = async (req, res) =>{

    try {
        const collection =  await curd();
        const data = req.body;
        console.log(data);
        await collection.insertOne({...data, createdAt: new Date().toISOString()});
        res.status(200).json(data)
        
    } catch (error) {
        res.status(400).json({message : error.message})
        console.log("erorr occured ", error);
    }
}

export const getevent = async (req, res) =>{

    try {
        console.log(req.params.id);
        const idd = req.params.id
        const name  = "DUCK"
        const collection =  await curd();
        // const event = await collection.find().toArray();
        // const event = await collection.find({"_id" : ObjectId(`'${idd}'`)}).toArray();
        // const event = await collection.find({ "_id" : idd}).toArray();
        // const event = await collection.find({"_id" :"6361078d2395493533fd7965"}).toArray();
        // const event = await collection.find({_id:'6361078d2395493533fd7965'}).toArray();
        // const event = await collection.find({id}).toArray();
        // const event = await collection.find( { _id: { $type: 'objectId'}, _id:idd}).toArray();
        // const event = await collection.find({name:'DUCK'}).toArray();
        // const event = await collection.find({name:'DUCK'}).toArray();
    //    const event =  await collection.findOne({_id: idd}, function(err, document) {
            // console.log(document);
        //   });
       const event =  collection.find(
            { _id: { $in: [ 5, ObjectId(idd) ] } }
         )
        console.log(event);
        res.status(200).json(event);
        // if(ispresent){
        //       const data = collection
        // }
        
    } catch (error) {
        res.status(400).json({message : error.message})
        console.log("erorr occured ", error);
    }
}
// export const updateevent = async (req, res) =>{

//     try {
        
//     } catch (error) {
        
//     }
// }
// export const deletevent = async (req, res) =>{

//     try {
        
//     } catch (error) {
        
//     }
// }


