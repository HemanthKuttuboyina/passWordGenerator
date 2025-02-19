import { useState , useCallback, useEffect, useRef} from 'react'

import './App.css'
import { use } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllow,setNumAllow] = useState(false)
  const [splchar,setSplchar] = useState(false)
  const [pass,setPass] = useState("")
  const inputRef = useRef(null)

  const copyToClipboard = () => {
    inputRef.current?.select();
    window.navigator.clipboard.writeText(pass);
  }

  const clipboard = () =>{
    copyToClipboard()
  ,[pass]}

  // ----------------------------------------------------
  const PasswordGen = useCallback(()=>{
    let pas = "";
    let allow = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let num = "0123456789"
    let splChar = "!@#$%^&*()_+{}:<>?/"

    if(numAllow){
      allow += num
    }
    if(splchar){
      allow += splChar
    }
    for(let i = 1;i<length;i++)
    {
      let randomChar = Math.floor(Math.random() * allow.length+1)
      pas += allow.charAt(randomChar)
    }
    setPass(pas)
  },[length,numAllow,splchar,setPass])
  useEffect(()=>{PasswordGen()},[length,numAllow,splchar,PasswordGen])
  
  return (
    <>
      <div id='container'>
        
         <div>
            <input
            type="text"
            placeholder='password'
            value={pass}
            class="txt-box"
            ref={inputRef}
            readOnly
            />
            <button type="button" class='cpy' onClick={clipboard}>copy</button>
          </div>
          <br />
          
          <div>
            <input 
            type="range" 
            min={6}
            max={20}
            value={length}
            onChange={(h)=>{setLength(h.target.value)}}
            />
            <label htmlFor="">length:{length}</label>
            <input type="checkbox" value={numAllow} onChange={()=>{setNumAllow((prev)=> !prev)}}/>

          
            <label htmlFor="">Numbers</label>
            <input type="checkbox" value={splchar} onChange={()=>{setSplchar((prev)=> !prev)}}/>
            <label htmlFor="">SpecialChar</label>
          </div>
        
      </div>
    </>
  )
}

export default App
