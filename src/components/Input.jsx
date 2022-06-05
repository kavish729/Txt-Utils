import React, { useState } from "react";

const Input = () => {
  const [stext, setstext] = useState("");
  const handlechange = (e) => {
    setstext(e.target.value);
  };

  const handleuppercase = () => {
    let textchange = stext.toUpperCase();
    console.log(stext);
    setstext(textchange);
    console.log(textchange);
  };

  const handlelowercase = () => {
    let textchange = stext.toLowerCase();
    setstext(textchange);
  };

  const handleclearcase = () => {
    setstext(" ");
  };

  const handlecopy = () => {
    navigator.clipboard.writeText(stext);
  };

  const handleextraspace = () => {
    let newTxt = stext.split(/[ ]+/);
    setstext(newTxt.join(" "));
  };
  return (
    <div>
      <div class="mb-3 ">
        <label for="exampleFormControlTextarea1" className="form-label tarea">
          Enter your text in below Textarea
        </label>
        <textarea
          className="form-control ttt"
          id="exampleFormControlTextarea1"
          rows="3"
          onChange={handlechange}
          value={stext}
        ></textarea>
      </div>
      <div className="bbtt">
        <button
          disabled={stext.length === 0}
          type="button"
          className="btn btn-primary"
          onClick={handleuppercase}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={stext.length === 0}
          type="button"
          className="btn btn-primary"
          onClick={handlelowercase}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={stext.length === 0}
          type="button"
          class="btn btn-primary"
          onClick={handleclearcase}
        >
          Clear Text
        </button>
        <button
          disabled={stext.length === 0}
          type="button"
          class="btn btn-primary"
          onClick={handlecopy}
        >
          Copy Text
        </button>
        <button
          disabled={stext.length === 0}
          type="button"
          class="btn btn-primary"
          onClick={handleextraspace}
        >
          Remove Extra Space
        </button>
      </div>

      <div className="container">
        <h1>Your text summary</h1>
        <p>
          {stext.split(/\s+/).filter((el) => el.length !== 0).length} words and{" "}
          {stext.length} characters
        </p>
        <h2>Preview</h2>
        <p>
          {stext.length > 0
            ? stext
            : "Enter Something in the above box to preview here"}
        </p>
      </div>
    </div>
  );
};

export default Input;
