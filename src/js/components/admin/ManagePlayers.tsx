import * as React from 'react';
import AddPlayerForm from './forms/AddPlayerForm';
import PlayerRow from './forms/PlayerRow'

const ManagePlayers = () => {
    return (
        <div className="row">
            <h2>Manage Players</h2>
            <AddPlayerForm />
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Players</h3>
                </div>
                <div className="panel-body">
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
                                <PlayerRow />
                                <tr><td colSpan={3}><p>Create your first player above.</p></td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagePlayers;