import * as React from 'react';

class All extends React.Component<any, any> {
  render() {
    return (
      <div>
        {/* Render all "compact head to heads" or "No Head To Heads found" */}
        <div className="card ">
          <div className="card-header bg-info text-white">
            No Head To Heads found
          </div>
          <div className="card-body">
            Create at least two <a href="/">Players</a> and one{' '}
            <a href="/">Head To Head</a>.
          </div>
        </div>
      </div>
    );
  }
}

export default All;
