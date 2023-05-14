import * as React from 'react';
import { useState,useEffect } from 'react';
import Question from './Question';
// import { toast,ToastContainer } from 'react-toastify';
// //  import 'react-toastify/dist/hooks/'

const questions=[
    {
        question:'1. In which year did World War II begin?',
        choices:['1775-1975','2000-2005','1939-1945','I do not know'],
        answer:'1939-1945'
    },
    {
        question:"2. Which planet in our solar system is known as the Red Planet?",
        choices:['Earth','Mars','Venus','I do not know'],
        answer:'Mars'
    },
    {
        question:'3. Which famous physicist developed the theory of relativity?',
        choices:['Isaac Newton','Albert Einstein','Max Planck','I do not know'],
        answer:'Albert Einstein'
    },
    {
        question:'4. Who wrote the novel "To Kill a Mockingbird"?',
        choices:['Harper Lee','William Shakespeare','Virginia Woolf','I do not know'],
        answer:'Harper Lee'
    },
    {
        question:'5. What is the largest mammal in the world?',
        choices:['Hippopotamus','Blue Whale','Elephant','I do not know'],
        answer:'Blue Whale'
    },
    {
        question:'6. Who wrote the play "Hamlet"?',
        choices:['Harper Lee','William Shakespeare','Virginia Woolf','I do not know'],
        answer:'William Shakespeare'
    },
    {
        question:'7. Which language has the most native speakers worldwide?',
        choices:['English','French','Mandarin Chinese','I do not know'],
        answer:'Mandarin Chinese'
    },
    {
        question:"8. What is the capital city of France?",
        choices:['Paris','London','NewYork','I do not know'],
        answer:'Paris',
    },
    {
        question:'9. Who was the first president of the United States?',
        choices:['George Washington','John Adams','Thomas Jefferson','I do not know'],
        answer:'George Washington'
    },
    {
        question: '10. What is the boiling point of water?',
        choices: ['100°C', '0°C', '50°C','I do not know'],
        answer: '100°C',
    },
    {
        question: '11. What is the largest planet in our solar system?',
        choices: ['Mars', 'Jupiter', 'Venus','I do not know'],
        answer: 'Jupiter', 
    },
    {
        question:'12. Which famous painting was created by Leonardo da Vinci?',
        choices:['The Last Supper','The Mona Lisa','The Last Supper','I do not know'],
        answer:'The Mona Lisa'
    },
    {
        question:'13. What is the name of the worlds highest mountain?',
        choices:['Mount Godwin-Austen','Mount Everest','Kangchenjunga','I do not know'],
        answer:'Mount Everest'
    },
    {
        question:'14. Which animal is the fastest land animal on earth?',
        choices:['Cheetah','Sailfish','Brown hare','I do not know'],
        answer:'Cheetah'
    },
    {
        question:'15. What is the current prime minister of Canada',
        choices:['Jean Chrétien','Stephen Harper','Justin Trudeau','I do not know'],
        answer:'Justin Trudeau'
    }
]

const Quiz: React.FC=()=>{
    const [currentQuestion, setCurrentQuestion]=useState(0);
    const [score, setScore]=useState(0);
    const [time, setTime] = useState(60); 
   
      
    const handleAnswer=(answer:string)=>{
        if(answer===questions[currentQuestion].answer){
            setScore(score+1)
        }
        const nextQuestion=currentQuestion+1;
         if(nextQuestion <questions.length){
            setCurrentQuestion(nextQuestion);
         }else{
            // toast.success(``)
            alert(`Quiz finished. You scored ${score}/${questions.length}`);
            }
    };
    useEffect(() => {
        const timer = setTimeout(() => {
          if (time > 0) {
            setTime(time - 1);
          }
        }, 1000);
        if (time === 0) {
          clearTimeout(timer);
             alert(`Time is over: Scored ${score}/${questions.length}`)
        }
        return () => clearTimeout(timer);
      }, [time]);
    return(
        <div className='flex flex-col gap-48'>
            <h1 className='text-center text-yellow-500 font-extrabold text-6xl'>Guiz-S</h1>
            {/* <button className='start-button bg-yellow-500 text-purple-900 w-16 font-bold'>Start</button> */}
            {currentQuestion<questions.length?(
                <div>
            <p className='font-bold'>Time remaining: {time} seconds</p>
                <Question
                       question={questions[currentQuestion].question}
                       choices={questions[currentQuestion].choices}
                       answer={questions[currentQuestion].answer}
                       onAnswer={handleAnswer}
                />
                </div>
            ):(
                <p>Quiz finished. You scored {score}/{questions.length}</p>
            )
        }
        </div>
    )
}
export default Quiz;