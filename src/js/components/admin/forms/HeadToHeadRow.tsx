import * as React from 'react';

class HeadToHeadRow extends React.Component<any, any> {
    render() {
        return (
            <tr>
                <th scope="row">1</th>
                <td>
                    <input type="text" className="form-control" id={`title`} name="title" placeholder="Head To Head Title" />
                </td>
                <td>
                    <div className="form-group">
                        <select disabled className="form-control" id="playerA" name="playerA" > 
                            <option value='a'>Player A</option>
                            <option value='b'>Player B</option>
                        </select>
                    </div>
                </td>
                <td>
                    <div className="form-group">
                        <select disabled className="form-control" id="playerB" name="playerB" > 
                            <option value='b'>Player B</option>
                            <option value='a'>Player A</option>
                        </select>
                    </div>
                </td>
                <td>
                    <button className="btn btn-default">X</button>
                </td>
            </tr>
        );
    }
}

export default HeadToHeadRow;