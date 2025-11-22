import React, { useState } from 'react'
import { BarLoader } from "react-spinners"

const NewForm = () => {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  const handleTextareaChange = (e) => {
    setAnswer(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (error) {
      setError(error.message);
      setStatus("typing")
    }
  }

  if(status === "submitting") {
    return <div style={{
      display: "flex",
      height: "100vh",
      width: "100vw",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <BarLoader />
    </div>
  }


  return (
    <>
      {
        status === "success" ? 
        <p>Success</p> 
        :
        <>
          <h2>Quiz</h2>
          <p>
            Guess the password??
          </p>
          <form onSubmit={handleSubmit}>
            <textarea
              value={answer}
              onChange={handleTextareaChange}
              disabled={status === "submitting"}
            />
            <br />
            <button
              disabled={status === "submitting"}
            >Submit</button>
          </form>

          {error && <p style={{color: "red"}}>{error}</p>}
        </>
      }
    </>
  );
}

function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(answer.toLowerCase() === "1234abcd"){
        resolve();
      } else {
        reject(new Error("Wrong password!"));
      }
    }, 2000);
  })
}

export default NewForm