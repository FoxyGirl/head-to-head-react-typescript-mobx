import * as React from 'react';

class AddHeadToHeadForm extends React.Component<any, any> {
    render() {
        return (
            <div className="panel panel-success">
                <div className="panel-heading"><h3 className="panel-title">Add new Head To Head</h3></div>
                <div className="panel-body">
                    <form className="form">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <div className="form-group">
                                    <label htmlFor="headToHeadName">Title</label>
                                    <input type="text" className="form-control" id="headToHeadName" name="headToHeadName" placeholder="VS Your Mate" />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="form-group">
                                    <label htmlFor="playerA">Your Name</label>
                                    <select className="form-control" id="playerA" name="playerA"> 
                                        <option value=''>Select a player</option>
                                        <option value='a'>Player A</option>
                                        <option value='b'>Player B</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="form-group">
                                    <label htmlFor="playerB">Your Friend</label>
                                    <select className="form-control" id="playerB" name="playerB"> 
                                        <option value=''>Select a player</option>
                                        <option value='a'>Player A</option>
                                        <option value='b'>Player B</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddHeadToHeadForm;