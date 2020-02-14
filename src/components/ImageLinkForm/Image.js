import React from 'react';
import './form.css'

const Image = () => {
    return(
        <div>
            <p className="f3">
            {'This magic brain will detect a face in a photo. Give it a try'}            
            </p>
            <div className="center " >
                <div className="form center pa4 br3 shadow-5">
                    <input className="f4 pa2 w-70 center" type="tex" />
                    <button className="w-30 grow f4 link ph3 dib white bg-light-purple">Detect</button>
                 </div>
            </div>
        </div>
    );
}

export default Image;