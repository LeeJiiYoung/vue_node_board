import {connectDB} from "@/util/database"
import {ObjectId} from "mongodb"

export default async function Edit(props){

    const client = await connectDB;
    const db = client.db("forum")
    let result = await db.collection('post').findOne({_id: ObjectId.createFromHexString(props.params.id)})

    return (
        <div>
            <h4>수정페이지</h4>
            <form action="/api/post/update" method="POST">
                <input type="hidden" name="_id" defaultValue={result._id.toString()}/>
                <input name="title" placeholder="제목" defaultValue={result.title}></input>
                <input name="content" placeholder="내용" defaultValue={result.content}></input>
                <button type="submit">수정</button>
            </form>
        </div> 
    )
}