import React from 'react'

export default function About(props) {
   
    let myStyle ={
        color: props.mode === 'dark'? 'white': 'black',
        backgroundColor: props.mode === 'dark'? '#212529': 'white',
        transition: '0.6s'
    }

  return (
    <div class="container my-3 p-0 rounded-2" style={myStyle}>
        <div className="accordion rounded-2" id="accordionExample" style={myStyle}>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                    <strong> Analyze Your text </strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Case Converter gives you a way to analyze your text quickly and efficiently. 
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                <strong>Free to use </strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Case Converter is a free character counter tool that provides instant character count & word count statistics for a given text. Case Converter reports the number of words and characters. 
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                    <strong> Browser Compatible </strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. 
                </div>
                </div>
            </div>
        </div>
        {/* <button type="button" class="btn btn-danger my-2 mx-2" onClick={colorChange}>{initialText}</button> */}
    </div>
  )
}
