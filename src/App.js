import React from "react";

const news = ["Delhi attack", "Corona News", "Train started"];
function App() {
  return (
    <div className="panel-group">
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="table-responsive">
            <table className="table table-sm">
              <thead className="table-header">
                <tr>
                  <th>Comments</th>
                  <th>Vote Count</th>
                  <th>Up Vote</th>
                  <th>News Details</th>
                </tr>
              </thead>
              <tbody>
                {news.map((x) => (
                  <tr key={x}>
                    <td>32</td>
                    <td>5</td>
                    <td>Ok</td>
                    <td>{x}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
