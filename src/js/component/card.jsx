import React from "react";




function Card(props) {
    // let datos = [{cardtitle:"titulo1",carddescription:"lorem1",cardimg:"https://picsum.photos/id/32/325/300"},
    //     {cardtitle:"titulo2",carddescription:"lorem2",cardimg:"https://picsum.photos/id/24/325/300"},
    //     {cardtitle:"titulo3",carddescription:"lorem3",cardimg:"https://picsum.photos/id/144/325/300"},
    //     {cardtitle:"titulo4",carddescription:"lorem4",cardimg:"https://picsum.photos/id/74/325/300"},
    // ]

    return (
        <div class="col-sm-3">
            
            <div className="card g-5 w-100">
            <img src={props.cardimg} className="card-img-top" alt="..."/>

            <div className="card-body">
            <h5 className="card-title">{props.cardtitle}</h5>
            <p className="card-text">{props.carddescription}</p>
            <a href="#" className="btn btn-primary">Find out more!</a>
            </div>
        </div>
        </div>
    )

}

export default Card;