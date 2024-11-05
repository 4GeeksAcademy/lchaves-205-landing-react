import React from "react";
import Welcome from "./welcome";
import CardColection from "./cardcolection";
import Card from "./card";
// //include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
function Container()  {
	return (
		<div className="container w-75">
			<Welcome/>
            <CardColection/>
		</div>
	)
}

export default Container;