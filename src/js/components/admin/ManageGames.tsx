import * as React from 'react';
import AddGameForm from './forms/AddGameForm';
import GameRow from './forms/GameRow'

const ManageGames = () => {
    return (
        <div className="row">
            <h2>Manage Games</h2>
            <AddGameForm /> 
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Games</h3>
                </div>
                <div className="panel-body">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Home Team</th>
                                    <th>Away Team</th>
                                    <th></th>
                                    <th></th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <GameRow /> 
                                <tr><td colSpan={6}><p>Create your first game above.</p></td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageGames;