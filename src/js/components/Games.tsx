import * as React from 'react';

const Games = () => {
    return (
        <span className="center-teams is-game">

            {/* available classes is-winner */}
            <span className={`center-teams__home is-winner`}>Player A</span> 

            {/* available classes is-winner-home, is-draw, is-winner-away */}
            <span className={`center-teams__center is-winner-home`}>5:2</span> 

            {/* available classes is-winner */}
            <span className={`center-teams__away`}>Player B</span>
            
        </span>
    );
};

export default Games;