import React from 'react';

function Buttons(props) {
    return (
        <div className="btn__group">
          <button className="btn btn__telegram">TELEGRAM</button>
          <button className="btn btn__personal">Личный кабинет</button>
        </div>
    );
}

export default Buttons;