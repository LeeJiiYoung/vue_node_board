export default async function handler(request, response){
    if(request.method == 'GET'){
        const date = new Date().toISOString();
        response.status(200).json(date);
    }
}