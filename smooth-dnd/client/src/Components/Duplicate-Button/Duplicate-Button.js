import React from "react"

function DuplicateButton(props) {



    return (
        <div className="duplicateContainer">
            <svg className="X" onClick={props.duplicateElement} xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="25px" height="25px" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 591.6 591.6">
                <g>
                    <g>
                        <path d="M540.6,0H153c-28.152,0-51,22.848-51,51v51H51c-28.152,0-51,22.848-51,51v387.6c0,28.152,22.848,51,51,51h387.6    c28.152,0,51-22.848,51-51v-51h51c28.152,0,51-22.848,51-51V51C591.6,22.848,568.752,0,540.6,0z M469.2,540.6    c0,16.932-13.668,30.6-30.6,30.6H51c-16.932,0-30.6-13.668-30.6-30.6V153c0-16.932,13.668-30.6,30.6-30.6h387.6    c16.932,0,30.6,13.668,30.6,30.6V540.6z M571.2,438.6c0,16.932-13.668,30.6-30.6,30.6h-51V153c0-28.152-22.848-51-51-51H122.4V51    c0-16.932,13.668-30.6,30.6-30.6h387.6c16.932,0,30.6,13.668,30.6,30.6V438.6z" />
                        <path d="M193.8,147.9H51c-2.856,0-5.1,2.244-5.1,5.1v142.8c0,2.856,2.244,5.1,5.1,5.1s5.1-2.244,5.1-5.1V158.1h137.7    c2.856,0,5.1-2.244,5.1-5.1S196.656,147.9,193.8,147.9z" />
                        <path d="M438.6,392.7c-2.856,0-5.1,2.244-5.1,5.1v137.7H295.8c-2.856,0-5.1,2.244-5.1,5.1c0,2.856,2.244,5.1,5.1,5.1h142.8    c2.856,0,5.1-2.244,5.1-5.1V397.8C443.7,394.944,441.456,392.7,438.6,392.7z" />
                    </g>
                </g>

            </svg>
        </div>
    )
}

export default DuplicateButton