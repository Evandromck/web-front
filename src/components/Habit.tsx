import React from "react";

interface HabitProps {  //informando que o componente pode receber um numero 
    company: number

}
    

export function Habit(props: HabitProps) { //aqui informando que vai receber uma interface

    return (
     
     <div className="bg-zinc-50 w-10 h-10 text-black">{props.company}</div> //aqui é a informação do componete

    )
        
    


}