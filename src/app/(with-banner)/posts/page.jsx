import { Suspense } from "react";
import { ListOfPosts } from "./ListOfPosts";
export default async function PostPage(){

    return(
        <section>
            <Suspense fallback={<p>CARGANDOOOOO posts...</p>}>

            <ListOfPosts/>
            </Suspense>
        </section>
    )
}