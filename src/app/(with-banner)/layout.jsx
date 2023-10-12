import { Counter } from "./posts/Counter";

export default function PostsLayout({children}){
    return(
        <div>
            <marquee style={{color: 'purple', background:'#fff'}}>El mejor canal de Twich de programacion</marquee>
            <Counter/>
            {children}
        </div>
    )
}