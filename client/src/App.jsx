import { useState } from "react";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.API_KEY;

const FormComponent = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  const handleInput1Change = (event) => {
    setInput1(event.target.value);
  };

  const handleInput2Change = (event) => {
    setInput2(event.target.value);
  };

  const handleInput3Change = (event) => {
    setInput3(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const apiUrl = `https://api.apollo.io/v1/people/match?first_name=${input1}&last_name=${input2}&organization_name=${input3}&api_key=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={input1} onChange={handleInput1Change} />
      <input type="text" value={input2} onChange={handleInput2Change} />
      <input type="text" value={input3} onChange={handleInput3Change} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
