import { connectDB } from "@/util/database"
import Link from "next/link"
import DetailLink from "./DetailLink";
import ListItem from "./ListItem"

export const dynamic = 'force-dynamic'

export default async function list() {

    const client = await connectDB;
    const db = client.db("forum")
    let result = JSON.parse(JSON.stringify(await db.collection('post').find().toArray()))
    console.log(result)
    return (
        <div>
            <ListItem result={result} />
        </div>
    )
}