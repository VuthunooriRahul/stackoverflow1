import React from 'react'
import QuestionsDetails from './QuestionsDetails'
const DisplayAnswers=({question})=>{
    return(
        <div>
            {
                question.answer.map((ans)=>(
                        <div className='display-ans' key={ans._id}>
                                <p>{ans.answerBody}</p>
                        </div>
                ))
            }

        </div>
    )
}
export default DisplayAnswers