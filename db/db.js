import { MongoClient } from 'mongodb';
const MONGOURL = 'mongodb+srv://sumit:test@inotebook.la6ft.mongodb.net/deepthought?retryWrites=true&w=majority'


//  for connecting the database to the  server
 export async function connetomongo(MONGOURL) {
    let mongoClient;
    try {
        mongoClient = new MongoClient(MONGOURL);
        console.log("Connecting... to mongodb");
        await mongoClient.connect();
        console.log('Connected to mongodb ');

        return mongoClient;
    } catch (error) {
        console.log('Connection to MongoDB Atlas failed!', error)
        process.exit();
    }
}

export async function curd() {
    let mongoClient;
    try {
        mongoClient =  await connetomongo(MONGOURL)
        const db = mongoClient.db('school');
        const collection = db.collection('students');

        return collection;
    } catch(error) {
        console.log("Eror occured here", error);
    }
}

// async function createstudent(collection) {
//     const studentdocument = {
//         name: "SUMIT kumar",
//         number: "invincible",
//         birthdate: new Date(2000, 11, 20),
//         address: { street: 'Pike Lane', city: 'Los Angeles', state: 'CA' },
//         number: 99,
//     }
//     await collection.insertOne(studentdocument);
// }

// // connetomongo(MONGOURL);

// curd();








