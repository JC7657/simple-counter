import React from 'react';

import './SecondsCounter.css';


function SecondsCounter(props) {
  return (
    <div class="container-contador">
      <h1 class="contador"><i class="far fa-clock"></i>{props.seconds}</h1>
    </div>
  );
}

export default SecondsCounter;
