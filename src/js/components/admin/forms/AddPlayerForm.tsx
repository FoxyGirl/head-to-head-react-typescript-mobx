import * as React from 'react';
import { inject, observer } from 'mobx-react';
import ViewStore from '../../../stores/ViewStore';

interface APFProps {
  viewStore?: ViewStore;
}

interface APFState {
  playerName: string;
}

@inject('viewStore')
@observer
class AddPlayerForm extends React.Component<APFProps, APFState> {
  state = {
    playerName: '',
  };

  handleInputChange = (
    e: React.FormEvent<HTMLInputElement>,
  ): void => {
    const { value } = e.currentTarget;
    this.setState({
      playerName: value,
    });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { viewStore } = this.props;
    const { playerName } = this.state;

    if (playerName && playerName.trim().length !== 0) {
      viewStore!.addPlayer(playerName);
      this.setState({
        playerName: '',
      });
    }
  };

  render() {
    const { playerName } = this.state;

    return (
      <div className="card ">
        <div className="card-header bg-success">
          <h3 className="card-title text-white">Add new player</h3>
        </div>
        <div className="card-body">
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <div className="form-group">
                  <label htmlFor="playerName">Player Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="playerName"
                    name="playerName"
                    placeholder="Player name"
                    value={playerName}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-12">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPlayerForm;
