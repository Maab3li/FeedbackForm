
import { useState } from 'react';
import './App.css';


function App() {
  const [score, setScore] = useState('0')
  const[comment,setComment] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (Number(score) <=5 && comment.length<=10) {
      alert('Please provide a comment explaining why the experience was poor')
      return
    }

    console.log('Form submitted')
    setComment('')
    setScore(0)
  }
  return (
  <div className = 'App'>
    <form onSubmit={handleSubmit}>
      <fieldset>
        <h2>Feedback Form</h2>
        <div className= 'Field'>
          <label htmlFor='score'>Score : {score} <span>&#9734;</span></label>
          <input type = 'range' min ='0' max='10' value = {score}
          onChange = {e => setScore(e.target.value)}></input>
          <div className='Field'>
            <label>Comment :</label>
          <textarea htmlFor= 'comment' value={comment} onChange={e => setComment(e.target.value)}></textarea>
          </div>
          
        </div>
        <button type ='submit' className='App'>Submit</button>
      </fieldset>
    </form>
  </div>
  )
}

export default App;
