import * as React from 'react';

class PlayerRow extends React.Component<any, any> {
    render() {
        return (
            <tr>
                <th scope="row">1</th>
                <td>
                    <input type="text" className="form-control" id="playerName" name="name" placeholder="Player Name" />
                </td>
                <td>
                    <button className={`btn btn-default`}>X</button>
                </td>
            </tr>
        );
    }
}

export default PlayerRow;