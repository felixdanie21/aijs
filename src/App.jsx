import { useState } from "react";
import { requestToGroqAI } from './utils/groq';
import {Light as SyntaxHighlighter} from "react-syntax-highlighter";
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './App.css'
function App() {
  const [data, setData] = useState('');
  const handleSubmit = async() => {
    const content = document.getElementById('content');
    const ai = await requestToGroqAI(content.value);
    setData(ai);
  };
return (
  <main className="max-w-xl w-full mx-auto flex flex-col min-h-[80vh] justify-center items-center">
    <h1 className="text-4xl text-indigo-500">Felix Daniel AI</h1>
    <form className="flex flex-col gap-4 py-4 w-full">
      <input 
      placeholder="ketik permintaan disini..."
      className='py-2 px-4 rounded-md text-md'
      id='content' 
      type="text"
      />
      <button
      onClick={handleSubmit}
      type="button"
      className="bg-indigo-500 text-white px-4 py-2 font-bold 
      rounded-md">Send</button>
    </form>
    <div className="max-w-xl">

    <SyntaxHighlighter language="swift" style={darcula} wrapLongLines = {true}>{data.toString()}</SyntaxHighlighter>
    </div>
  </main>
);
}

export default App
