import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();
   setTimeout(() => {
       router.push("/");

   },3000)

    useEffect(() => {

    }, [])
    return ( 
        <div className="not-found">
            <h1>Ooooops...</h1>
            <h2>That page cannot be found</h2>
            <p>Go back to the <Link href="/"><a>HomePage</a></Link> </p>
        </div>
     );
}
 
export default NotFound;