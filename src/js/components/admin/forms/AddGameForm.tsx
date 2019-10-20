import * as React from 'react';

class AddGameForm extends React.Component<any, any> {
    render() {
        return (
            <div className={`form-add-game`}>
                <div className="panel panel-success">
                    <div className="panel-heading"><h3 className="panel-title">Add new Game</h3></div>
                    <div className="panel-body">
                        <form className="form">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="headToHead">Head To Head</label>
                                        <select className="form-control" id="headToHeadKey" name="headToHeadKey">
                                            <option value='1'>Head To Head 1</option>
                                            <option value='2'>Head To Head 2</option>
                                            <option value='3'>Head To Head 3</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="homeTeamName">{`Home Team`}</label>
                                        <input type="text" className="form-control" id="homeTeamName" name="homeTeamName" placeholder="Arsenal" />
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="awayTeamName">{`Away Team`}</label>
                                        <input type="text" className="form-control" id="awayTeamName" name="awayTeamName" placeholder="Real Madrid"  />
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12">
                                    <h4>Final Score</h4>
                                </div>
                                <div className="col-sm-12">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="homeTeamGoals">{`Home Team`}</label>
                                                <input type="number" className="form-control" id="homeTeamGoals" name="homeTeamGoals" placeholder="0" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="awayTeamGoals">{`Away Team`}</label>
                                                <input type="number" className="form-control" id="awayTeamGoals" name="awayTeamGoals" placeholder="0" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddGameForm;