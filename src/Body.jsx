import React from "react"
import Data from "./Data"
import Post from "./Post"



export default function Body(){
    const [like, setLike] = React.useState({
       
        isFavorite: false
    })
    
    let starIcon = like.isFavorite ? "heart-red.png" : "heart.png"
    
    function toggleFavorite() {
        setLike(prevLike => ({
            
            isFavorite: !prevLike.isFavorite
        }))
    
    }
    return(
        <>
         <div className="main-container">
           <div className="post-container">
                <Post 
                         i   />


            <h1>hello</h1>
            </div>

         </div>
    
        </>
    )
}





