import {connectDB} from "@/util/database"

export default async function handler(request, response){
    console.log(123)
    if(request.method == 'GET'){
        const client = await connectDB;
        const db = client.db("forum")
        let result = await db.collection('post').find().toArray()
        response.status(200).json(result)
    }
}