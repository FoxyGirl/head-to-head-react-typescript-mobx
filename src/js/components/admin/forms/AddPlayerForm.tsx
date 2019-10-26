import * as React from 'react';

class AddPlayerForm extends React.Component<any, any> {
  render() {
    return (
      <div className="card ">
        <div className="card-header bg-success">
          <h3 className="card-title text-white">Add new player</h3>
        </div>
        <div className="card-body">
          <form className="form">
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
