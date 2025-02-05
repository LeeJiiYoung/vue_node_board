import {connectDB} from "@/util/database"
import Link from "next/link"
import DetailLink from "./DetailLink";

export default async function list() {

    const client = await connectDB;
    const db = client.db("forum")
    let result = await db.collection('post').find().toArray()

    return (
        <div className="list-bg">
            {
                result.map((i, index) => {
                    const url = `/detail/${i._id}`;
                    return (
                        <div className="list-item" key={index}>
                            <Link href={'/detail/' + i._id} prefetch={false}>{i.title}</Link>
                            <DetailLink id={i._id.toString()}/>
                            <p>{i.content}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}