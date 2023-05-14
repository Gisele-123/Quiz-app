import * as React from 'react';
 interface Props{
    question: string,
    choices:string[],
    answer:string,
    onAnswer:(answer:string)=>void
 }
 const Question: React.FC<Props>=(
    {question, choices, answer, onAnswer}
 )=>{
    return (
        <div
            className='flex justify-center align-center text-center flex-col gap-48'
        >
            <h2 className='font-bold text-white'>{question}</h2>
            <div className=''>
                {choices.map((choice)=>(
                    <button className='btn btn-success m-2 bg-yellow-400 rounded font-bold' onClick={()=>onAnswer(choice)}>{choice}</button>
                ))}
            </div>
        </div>
    )
 }
 export default Question;