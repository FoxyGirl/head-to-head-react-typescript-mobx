import * as React from 'react';
import PlayerIcon from './PlayerIcon';
import Games from './Games';

class HeadToHeadDetails extends React.Component<any, any> {
    render() {
        return (
            <div className={`hth-block with-details`}>
                <div className={`hth-block__item is-winning away-team`} >
                    
                    {/* Head To Head title - start */}
                    <span className="hth-block__item__title center-teams">
                        <span className="center-teams__home">
                            <span><PlayerIcon /> Player A</span>
                        </span> 
                        <span className="center-teams__center">vs</span> 
                        <span className="center-teams__away">
                            <span>Player B <PlayerIcon /></span>
                        </span>
                    </span>
                    {/* Head To Head title - end */}

                    {/* Head To Head body - start */}
                    <span className="hth-block__item__body">
                        <span className="hth-block__item__label"><em>All times score</em></span>
                        
                        {/* Total score - start */}
                        <span className="center-teams">
                            <span className="center-teams__home">5</span> 
                            <span className="center-teams__center">- 2 -</span> 
                            <span className="center-teams__away">7</span>
                        </span>
                        {/* Total score - end */}

                        <span className="hth-block__details">

                            <span className="hth-block__item__label is-large">Fifa Challenge</span>
                            
                            {/* Game - start */}
                            <Games />
                            {/* Game - end */}

                            {/* No games found - start */}
                            <span className="hth-block__item__label"><em>No games found.</em></span>
                            {/* No games found - end */}

                        </span>

                    </span>
                    {/* Head To Head body - end */}
                    
                    <button type="button" className="btn btn-default btn-lg btn-block btn-show-all">Show All</button>

                </div>
            </div>
        );
    }
}

export default HeadToHeadDetails;