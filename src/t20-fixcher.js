import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

var output = (
<div>
    <div classname="container">

    <h1>ICC Men's T20 World Cup 2026</h1>
    <div classname="subtitle">
      7 February – 8 March 2026 • India & Sri Lanka
    </div>

    <h2>Group Stage – Highlights</h2>

    <div classname="match">
      <div classname="match-header">
        <span classname="match-no">Match 1 – Group A</span>
        <span classname="result">Pakistan won by 3 wickets</span>
      </div>
      <div classname="teams">
        Netherlands <span classname="vs">vs</span> Pakistan
      </div>
      <div classname="info-line">7 February 2026 • Sinhalese Sports Club, Colombo</div>
      <div classname="info-line">NED 147 (19.5 ov) → PAK 148/7 (19.3 ov)</div>
    </div>

    <div classname="match">
      <div classname="match-header">
        <span classname="match-no">Match 3</span>
        <span classname="result">India won by 29 runs</span>
      </div>
      <div classname="teams">
        India <span classname="vs">vs</span> United States of America
      </div>
      <div classname="info-line">7 February 2026 • Wankhede Stadium, Mumbai</div>
      <div classname="info-line">IND 161/9 (20 ov) → USA 132/8 (20 ov)</div>
    </div>

    <h2>Super 8 – Ongoing Matches</h2>

    <div classname="match">
      <div classname="match-header">
        <span classname="match-no">Super 8 – Match 41</span>
        <span classname="result">Upcoming / Live</span>
      </div>
      <div classname="teams">
        New Zealand <span classname="vs">vs</span> Pakistan
      </div>
      <div classname="info-line">21 February 2026 • R. Premadasa Stadium, Colombo</div>
      <div classname="info-line">Evening match – starts ~7:00 PM IST</div>
    </div>

    <div classname="match">
      <div classname="match-header">
        <span classname="match-no">Super 8 – Match 43 (Group 1)</span>
      </div>
      <div classname="teams">
        India <span classname="vs">vs</span> South Africa
      </div>
      <div classname="info-line">22 February 2026 • Narendra Modi Stadium, Ahmedabad</div>
      <div classname="info-line">7:00 PM IST</div>
    </div>

    <div classname="footer-note">
      For complete schedule, live scores and ball-by-ball updates<br/>
      visit official ICC website, Cricbuzz or ESPNcricinfo<br/><br/>
      Final: 8 March 2026 – Narendra Modi Stadium, Ahmedabad
    </div>

  </div>
</div>)
root.render(output);

