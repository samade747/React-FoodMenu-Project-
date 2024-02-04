import { useState } from "react";
import Food from "./Food";
export default function ListOfFood(){

    const [foodList, setFoodList] = useState([{
        srceImg: "",
        foodName: "Burger",
        description: 'Chicken Burger',
        remaining: 10,
    },
    {
        srceImg: "",
        foodName: "Burger",
        description: 'Chicken Burger',
        remaining: 10,   
    },
    {
        srceImg: "",
        foodName: "Burger",
        description: 'Chicken Burger',
        remaining: 10,

    },
    {
        srceImg: "",
        foodName: "Burger",
        description: 'Chicken Burger',
        remaining: 10,
    },
    {
        srceImg: "",
        foodName: "Burger",
        description: 'Chicken Burger',
        remaining: 10,
    },
    {
        srceImg: "",
        foodName: "Burger",
        description: 'Chicken Burger',
        remaining: 10,    
    }]);
return (
    <>
    <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: "center"}}>
        


    </div>  
    </>
)

}





