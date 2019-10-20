import * as React from 'react';

class GameRow extends React.Component<any, any> {
    render() {
        return (
            <tr>
                <th scope="row">1</th>
                <td>
                    <input type="text" className="form-control" id={`homeTeamName`} name="homeTeamName" placeholder="Home team name" />
                </td>
                <td>
                    <input type="text" className="form-control" id={`awayTeamName`} name="awayTeamName" placeholder="Away team name" />
                </td>
                <td>
                    <input type="text" className="form-control" id={`homeTeamGoals`} name="homeTeamGoals" placeholder="Home team score" />
                </td>
                <td>
                    <input type="text" className="form-control" id={`awayTeamGoals`} name="awayTeamGoals" placeholder="Away team score" />
                </td>
                <td>
                    <button className="btn btn-default">X</button>
                </td>
            </tr>
        );
    }
}

export default GameRow;