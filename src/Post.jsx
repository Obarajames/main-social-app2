import React from "react";

export default function Post(){

    return(
        <div className="post-items">
        <h3 className="post-title"><strong>{}</strong></h3>
        <img src="../images/lambo1.jpg" alt=""  />
        <div className="post-icons">
        <img 
            src={`../images/${starIcon}`} 
            className="card--favorite"
            onClick={toggleFavorite}
        />
        

        </div>
    </div>
    )
}