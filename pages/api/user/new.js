import {connectDB} from "@/util/database"

export default async function handler(request, response){
    if(request.method == 'POST'){ 
        if(request.body.id == ''){
            return response.status(500).json('아이디를 입력해주세요')
        }
        try{
            const client = await connectDB;
            const db = client.db("forum")
            let userList = await db.collection('user').find().toArray();
            if(userList.find((x) => x.id == request.body.id) != null){
                return response.status(500).json('아이디가 이미 있습니다.')
            }
            let result = await db.collection('user').insertOne(request.body, function(err, res){
            })
            response.status(200).json('등록되었습니다!!!')
        }
        catch(error){
            //db 오류시 실행할 코드
        }
        
    }
}