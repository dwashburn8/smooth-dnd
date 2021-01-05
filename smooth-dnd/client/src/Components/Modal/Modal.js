import React from "react"

function Modal(props) {
    
    

    return (
        <div id="modal-bk">
            <div id="modal-wrap">
                <div className="modal-container">
                    {props.children}
                    <a className="modal-close btn" onClick={props.modalClose}>
                        close
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Modal