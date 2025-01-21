import React from "react";

const Connected = (props) => {
  return (
    <div className="connected-container">
      <h1 className="connected-header">You are Connected to MetaMask</h1>
      <p className="connected-account">
        <strong>MetaMask Account:</strong> {props.account}
      </p>
      <p className="connected-account">
        <strong>Remaining Time:</strong> {props.remainingTime}
      </p>
      {props.showButton ? (
        <p className="connected-message">You have already voted.</p>
      ) : (
        <div className="voting-section">
          <input
            type="number"
            placeholder="Enter Candidate Index"
            value={props.number}
            onChange={props.handleNumberChange}
            className="candidate-input"
          />
          <br />
          <button className="vote-button" onClick={props.voteFunction}>
            Vote
          </button>
        </div>
      )}

      <table className="candidates-table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Candidate Name</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {props.candidates.map((candidate, index) => (
            <tr key={index}>
              <td>{candidate.index}</td>
              <td>{candidate.name}</td>
              <td>{candidate.voteCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Connected;
