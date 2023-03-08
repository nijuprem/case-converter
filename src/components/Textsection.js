import React, {useState} from 'react'

export default function Textsection(props) {
  
  const upClick = ()=>{
    let newText = text.toUpperCase(); 
    setText(newText)
    // props.showAlert("Changed to Upper Case","success");
  }

  const lowClick = ()=>{
    let newText = text.toLowerCase(); 
    setText(newText)
    
    // props.showAlert("Changed to Lower Case","success");
  }

  const clearClick = ()=>{
    let newText = ''; 
    setText(newText)
    
    // props.showAlert("Cleared Text","success");
  }

/*
  const capitalClick = ()=>{
    let newText = text; 
    let capText = text.split('');
    // capText[0] = capText[0].toUpperCase();

    for (let i=0; i<text.length; i++){

      if(capText[i] === " "){
        
        capText[i+1] = capText[i+1].toUpperCase();

        newText = capText.join('')
        // console.log(newText)
        setText(newText)
        
    // props.showAlert("Changed to Capital Case","success");
       
      }
      

      else if (i===0){
        capText[i] = capText[i].toUpperCase();
        newText = capText.join('')
        setText(newText)
      }
    }
  }
*/

  const copyClick =() =>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied To Clipboard!", "success")
  }

  const handleOnChange = (event) =>{
    setText(event.target.value);
  }

  const [text, setText] = useState("Enter Your Text Here")

  return (
    <>
      <div className='container'>
          <div className="mb-5 mt-3">
          <h1 className={`text-${props.mode==='light'? 'dark': 'light'}`} style={{transition: '0.6s'}}>{props.heading}</h1>
              <div className="mb-3 mt-3">
                <textarea className={`form-control bg-${props.mode} text-${props.mode==='light'? 'dark': 'light'}`} id="my-box" rows="8" value={text} onChange={handleOnChange} style={{transition: '0.6s', resize: 'none', '--placeholder-color': props.color}} placeholder="Enter Your Text Here"></textarea>
              </div>
              <button disabled={text.length===0}className='btn btn-primary mx-1 my-1' onClick={upClick}>Convert To Uppercase</button>
              <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={lowClick}>Convert To Lowercase</button>
              {/* <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={capitalClick}>Capital Case</button> */}
              <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={copyClick}>Copy</button>
              <button disabled={text.length===0} className='btn btn-danger mx-1 my-1' onClick={clearClick}>Clear Text</button>
          </div>
      </div>
      <div className="contaner">
        <h2 className={`text-${props.mode==='light'? 'dark': 'light'}`}  style={{transition: '0.6s'}}> Text Summary</h2>
        <p className={`text-${props.mode==='light'? 'dark': 'light'}`} style={{transition: '0.6s'}}>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
        <p className={`text-${props.mode==='light'? 'dark': 'light'}`} style={{transition: '0.6s'}}>{text.length>0? parseFloat(0.0008 * text.split(" ").length).toFixed(3): '0'} minutes to read </p>
        <h2 className={`my-2 text-${props.mode==='light'? 'dark': 'light'}`} style={{transition: '0.6s'}}>Preview</h2>
        <p className={`text-${props.mode==='light'? 'dark': 'light'}`} style={{transition: '0.6s'}}>{text.length>0? text:'Nothing to Preview'}</p>
      </div>
    </>
  )
}
