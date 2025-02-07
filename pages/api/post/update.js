import {connectDB} from "@/util/database"
import {ObjectId} from "mongodb"

export default async function handler(request, response){
    if(request.method == 'POST'){ 
        if(request.body.title == ''){
            return response.status(500).json('제목을 입력해주세요')
        }
        try{
            let data = {title : request.body.title, content : request.body.content}
            const client = await connectDB;
            const db = client.db("forum")
            let result = await db.collection('post').updateOne({_id : ObjectId.createFromHexString(request.body._id)}, {$set : data})
            response.status(200).redirect(302, '/list')
        }
        catch(error){
            response.status(500).json(request)
        }
    }
}