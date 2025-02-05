import {connectDB} from "@/util/database"

export default async function handler(request, response){
    if(request.method == 'POST'){ 
        if(request.body.title == ''){
            return response.status(500).json('제목을 입력해주세요')
        }
        try{
            const client = await connectDB;
            const db = client.db("forum")
            let result = await db.collection('post').insertOne(request.body, function(err, res){
            })
            response.status(200).redirect(302, '/list')
        }
        catch(error){
            //db 오류시 실행할 코드
        }
        
    }
}