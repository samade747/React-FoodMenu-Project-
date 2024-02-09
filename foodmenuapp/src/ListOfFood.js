import { useState } from "react";
import Food from "./Food";
export default function ListOfFood(){

    const [foodList, setFoodList] = useState([{
        srceImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbqCu60rMA3vQcBoBlViKr_NHu3a7YrpyBa3boQEmFdeMug_6u0WOQk6-jYaoxOS5mQVU&usqp=CAU",
        foodName: "Burger",
        description: 'Chicken Burger',
        remaining: 10,
    },
    {
        srceImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYeUuxCU829keVK54cvBFGp5KvVtsUgimW-QE2E7EBxg&s",
        foodName: "Burger",
        description: 'Chicken Burger',
        remaining: 10,   
    },
    {
        srceImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEDPcsX2Qdm6KCFNxXF-0w4vvgUmdEQQOtnIuc81M-QQ&s",
        foodName: "Burger",
        description: 'Chicken Burger',
        remaining: 10,

    },
    {
        srceImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaxY3dfBzKl0qhsLd0xxFUndqAotkubAoGCwfBtpYtnQ&s",
        foodName: "Burger",
        description: 'Chicken Burger',
        remaining: 10,
    },
    {
        srceImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8osB8-I7ZLq5vRl0qTMvc6_vtWU4VSxsnGScXHszKmRHxGW6uVfGBPvvuNqJDL1Y9oM&usqp=CAU",
        foodName: "Burger",
        description: 'Chicken Burger',
        remaining: 10,
    },
    {
        srceImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8osB8-I7ZLq5vRl0qTMvc6_vtWU4VSxsnGScXHszKmRHxGW6uVfGBPvvuNqJDL1Y9oM&usqp=CAU",
        foodName: "Burger",
        description: 'Chicken Burger',
        remaining: 10,    
    }]);
return (
    <>
    <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: "center"}}>
        {foodList.map((food) => (
                    <div style={{width:"38%", display:"flex", justifyContent:"center"}}>
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





