
import Image from 'next/image'
const fetchComments = async (id)=>{

    await new Promise(resolve=> setTimeout(resolve, 1000))

    // throw new Error('Error al cargar los comentarios')

    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        // cache: 'no-store'
        next:{
            revalidate: 60
        }
    })
        .then(res => res.json());
}
export default async function Post({params}){
    const {id}= params;
    const comments = await fetchComments(id);
    return (
        <ul style={{background: '#444', fontSize:'10px'}}>
            {
                comments.map(comment =>(
                    <li key={comment.id}>
                        <Image width='50' height='50' alt={comment.name} src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`} />
                        <h4>{comment.name}</h4>
                        <small>{comment.body}</small>
                    </li>
                ))
            }
        </ul>
    )
}