import React from 'react'
import "./pdf.scss";

export default function pdf() {
    return (
        <div className="pdf">
         <embed src="myassets/MyResume1.pdf" type="application/pdf" height="100%" width="88%"/>
        </div>
    )
}
