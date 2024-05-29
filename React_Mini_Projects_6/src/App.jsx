import { useState } from "react";

import "./App.css";

function App() {
  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    dob: "",
    gender: "",
    prompt1: "",
    answer1: "",
  });
  const [prompts, setPropmpts] = useState([
    {
      prompt: "",
      answer: "",
      timestamp: new Date().getTime(),
    },
  ]);

  function handleInput(e) {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  }

  function handleAddPrompt() {
    setPropmpts([
      ...prompts,
      {
        prompt: "",
        answer: "",
        timestamp: new Date().getTime(),
      },
    ]);
  }

  function handlePrompt(e, i) {
    const { name, value } = e.target;
    let newPrompts = [...prompts];
    newPrompts[i][name] = value;
    setPropmpts(newPrompts);
  }

  function handlePromptDelete(e,index){
    let newPrompts = [];
    for(let i=0;i<prompts.length;i++){
      if(i!=index){
        newPrompts.push(prompts[i]);
      }
    }
    setPropmpts(newPrompts);
  }

  console.log(prompts);
  return (
    <>
      <h1>06-REACT-FORMS</h1>
      <div>
        <form style={{ width: "60vw" }}>
          <fieldset
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <legend>About You</legend>
            <label className="head">What's Your name?</label>
            <input
              id="firstname"
              name="firstname"
              placeholder="Fist Name"
              type="text"
              onChange={handleInput}
              className="margin"
            />
            <input
              id="lastname"
              name="lastname"
              type="text"
              placeholder="Last Name"
              onChange={handleInput}
              className="margin"
            />
            <label className="head">What's Your email ?</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="abc@gmail.com"
              onChange={handleInput}
              className="margin"
            />
            <label className="head">What's Your DOB ?</label>
            <input
              id="dob"
              name="dob"
              type="date"
              placeholder="Date Of Birth"
              max="2005-01-27"
              onChange={handleInput}
              className="margin"
            />
            <label className="head">What's Your Gender ?</label>
            <select
              id="gender"
              name="gender"
              className="margin"
              onChange={handleInput}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </fieldset>
          <fieldset
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <legend>Prompts</legend>
            <label className="head">Select a Prompt</label>
            {prompts.map((prompt, i) => (
              <div key={prompt.timestamp} className="flex-col">
                <select
                  id="prompt1"
                  name="prompt1"
                  onChange={(e) => handlePrompt(e, i)}
                >
                  <option value="How is war going on ?">
                    How is war going on ?
                  </option>
                  <option value="How is war2 going on ?">
                    How is war2 going on ?
                  </option>
                  <option value="How is war3 going on ?">
                    How is war3 going on ?
                  </option>
                  <option value="How is war4 going on ?">
                    How is war4 going on ?
                  </option>
                </select>
                <textarea
                  id="answer1"
                  name="answer1"
                  rows={5}
                  placeholder="Let your true colors shine through"
                  onChange={(e) => handlePrompt(e, i)}
                />
                <div>
                <button style={{ background: "red", margin: "5px", color: "#fff" }}
                type="button"
                onClick={e => handlePromptDelete(e,i)}
                >DELETE</button>
                </div>
              </div>
            ))}

            <div>
              <button
                style={{ background: "black", margin: "5px", color: "#fff" }}
                type="button"
                onClick={handleAddPrompt}
              >
                ADD PROPMT
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default App;
