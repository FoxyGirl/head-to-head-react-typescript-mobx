import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Player } from '../../models';
import AddPlayerForm from './forms/AddPlayerForm';
import PlayerRow from './forms/PlayerRow';
import ViewStore from '../../stores/ViewStore';

interface MPProps {
  viewStore?: ViewStore;
}

const ManagePlayers = (props: MPProps) => {
  const { viewStore } = props;
  let players: Player[] = [];
  if (viewStore) {
    players = viewStore.players;
  }
  console.log('ManagePlayers viewStore', viewStore!.players);

  return (
    <div className="row flex-column">
      <h2>Manage Players</h2>
      <AddPlayerForm />
      {players.length > 0 && (
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Players</h3>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {players.length > 0 ? (
                    players.map((player, index) => (
                      <PlayerRow
                        key={player.key}
                        index={index}
                        player={player}
                      />
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3}>
                        <p>Create your first player above.</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default inject('viewStore')(observer(ManagePlayers));
