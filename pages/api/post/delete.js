import {connectDB} from "@/util/database"
import {ObjectId} from "mongodb"

export default async function handler(request, response){
    if(request.method == 'DELETE'){ 
        try{
            let json = JSON.parse(request.body)
            let data = {_id : ObjectId.createFromHexString(json._id)}
            const client = await connectDB;
            const db = client.db("forum")
            let result = await db.collection('post').deleteOne(data)
            if(result.deletedCount > 0){
                response.status(200).json('삭제 성공')
            }
            else{
                response.status(500).json('삭제 실패')
            }
        }
        catch(error){
            response.status(500).json(request.body)
        }
    }
}