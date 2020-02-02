import * as React from 'react';
import { observer, inject } from 'mobx-react';
import ViewStore from '../../../stores/ViewStore';
import { Player } from '../../../models';

interface PlayerRowProps {
  index: number;
  player: Player;
  viewStore?: ViewStore;
}

interface PlayerRowState {}

@inject('viewStore')
@observer
class PlayerRow extends React.Component<
  PlayerRowProps,
  PlayerRowState
> {
  handleInputChange = (
    e: React.FormEvent<HTMLInputElement>,
  ): void => {
    const { value } = e.currentTarget;
    const { viewStore, player } = this.props;
    if (value && value.trim().length > 0) {
      viewStore!.updatePlayer(player.key, value);
    }
  };

  render() {
    const {
      index,
      player: { name },
    } = this.props;
    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <td>
          <input
            type="text"
            className="form-control"
            id="playerName"
            name="name"
            placeholder="Player Name"
            value={name}
            onChange={e => this.handleInputChange(e)}
          />
        </td>
        <td>
          <button className={`btn btn-default`}>X</button>
        </td>
      </tr>
    );
  }
}

export default PlayerRow;
