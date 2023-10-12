export const GET = (res, req) => {
    console.log("hello")
    const data = {
        name :"san"
    }
    return new Response(data.name)
}