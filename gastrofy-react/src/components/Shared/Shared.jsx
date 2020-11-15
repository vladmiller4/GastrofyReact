import React from 'react';
import './Shared.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHotTub } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faHotTub);

function Shared() {
  return (
    <div className="sharedMain">
      <div className="sharedMainWrapper">
        <div className="sharedContent">
          <FontAwesomeIcon icon="hot-tub" />
          <h3>RECEPT SOM DELATS MED DIG</h3>
          <p className="marginBottom">
            Här kommer du kunna se
            <span>
              {' '}
              recept som någon <br /> annan valt att dela med dig.
            </span>{' '}
            Så att du enkelt <br /> kan hjälpa till att laga maten eller se vad
            som <br /> står på menyn.
          </p>
          <h4>Så funkar det!</h4>
          <p>
            Håll utkik efter en länk från din familjemedlem, <br /> vän eller
            annan person som vill dela recept <br /> med dig. Klicka bara på
            länken du får, så <br /> hamnar recepten här innan smöret hunnit{' '}
            <br /> smälta i pannan.
          </p>
          <p className="marginTop">Lycka till!</p>
        </div>
      </div>
    </div>
  );
}

export default Shared;
