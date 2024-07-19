import React from "react";
import Card from "./Card";
import Data from "./Data"

export default function MainContent(){

    const CardList = Data.map(x=>{
        return <Card {...x}/>
    })

    return (
        <>
            <div className="cardlist-container">
                {CardList}
            </div>
        </>
    )
}