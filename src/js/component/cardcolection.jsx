import React from "react";
import Card from "./card";

function CardColection() {
    let datos = [{cardtitle:"Bench",carddescription:"Residence certainly elsewhere something she preferred cordially law",cardimg:"https://picsum.photos/id/32/325/300"},
        {cardtitle:"Book",carddescription:"lorAge his surprise formerly mrs perceive few stanhill moderateem2",cardimg:"https://picsum.photos/id/24/325/300"},
        {cardtitle:"Pier",carddescription:"Of in power match on truth worse voice would. Large.",cardimg:"https://picsum.photos/id/144/325/300"},
        {cardtitle:"Ocean",carddescription:"By expect it result silent in formal of. Ask eat questions abilities.",cardimg:"https://picsum.photos/id/74/325/300"},
    ]

    return (
    <div className="container justify-content-center text-center p-0 mt-4">    
        <div className="row row-cols-1 row-cols-md-4 g-4">
            {datos.map((item,index)=>(<Card key={index} cardimg={item.cardimg} cardtitle={item.cardtitle} carddescription={item.carddescription}/>))}
        </div>
    </div>    
    )   
}

export default CardColection;