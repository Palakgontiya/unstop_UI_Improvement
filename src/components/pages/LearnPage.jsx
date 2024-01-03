import { useEffect } from "react";

const Learn = ()=>{

    useEffect(() => {
        document.title = "learn";
      }, []);
      
    return <div>Learn Page</div>
}

export default Learn