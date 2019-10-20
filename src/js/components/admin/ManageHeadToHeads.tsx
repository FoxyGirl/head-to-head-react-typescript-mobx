import * as React from 'react';
import AddHeadToHeadForm from './forms/AddHeadToHeadForm';
import HeadToHeadRow from './forms/HeadToHeadRow'

const ManageHeadToHeads = () => {
    return (
        <div className="row">
            <h2>Manage Head To Heads</h2>
            <AddHeadToHeadForm /> 
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Head To Heads</h3>
                </div>
                <div className="panel-body">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Player A</th>
                                    <th>Player B</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <HeadToHeadRow /> 
                                <tr><td colSpan={5}><p>Create your first head to head above.</p></td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageHeadToHeads;