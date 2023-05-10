import React from "react";
import ReactDOM from 'react-dom';
import '../css/portalComponent.css'

function Modal({children}){
    return ReactDOM.createPortal(
        <div className="portal">
            {children}
        </div>,
        document.getElementById("modal")
    )
}

export {Modal}