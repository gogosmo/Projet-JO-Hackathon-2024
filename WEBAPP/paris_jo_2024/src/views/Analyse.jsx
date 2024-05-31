import React from 'react';
import '../styles/analyse.css';

function Analyse() {
  return (
    <div>
      <div className="conteneurA">
        <div className="conteneurAnalyse">
          <div className="iframe-container">
            <iframe 
              title="HackathonJO" 
              src="https://app.powerbi.com/reportEmbed?reportId=c1eca92f-d929-4ddb-ae64-d866e6140dca&autoAuth=true&ctid=108bc864-cdf5-4ec3-8b7c-4eb06be1b41d&filterPaneEnabled=false&navContentPaneEnabled=false" 
              allowFullScreen="true">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analyse;
