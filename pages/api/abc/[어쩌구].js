import { connectDB } from "@/util/database"

export default async function handler(request, response) {
    response.status(200).json(result)
}