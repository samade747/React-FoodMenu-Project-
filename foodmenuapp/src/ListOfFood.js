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
        {foodList.map((food) => (
                    <div style={{width:"34%", display:"flex", justifyContent:"center"}}>
                        <Food foodDetail={food} />
                    </div>
                ))}
            </div>
            <div style={{textAlign:"center"}}>
               <p>We're open until 22:00. Come visit us or order online.</p>
               <button style={{padding:"8px 14px",border:"none", backgroundColor:"#efcc00 ", fontFamily:"sans-serif"}}>Order now</button>
               <br/>
               <br/>
            </div>
      </>
   )
}





