
function Hud() {
  
  return (
    
       <header className="hud">
      <div className="hud-title">
        <h1>Stack the Guess</h1>
        <p className="hud-subtitle">Guess wrong, grow the pile.</p>
      </div>

      <div className="hud-stats">
        <div className="stat">
          <span className="stat-value" id="statWrong">0</span>
          <span className="stat-label">wrong</span>
        </div>
        <div className="stat">
          <span className="stat-value" id="statCards">0</span>
          <span className="stat-label">in stack</span>
        </div>
        <button type="button" className="icon-btn" id="btnHelp" aria-label="How to play" title="How to play">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        </button>
        <button type="button" className="icon-btn" id="btnNewWord" aria-label="New word" title="New word">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-2.64-6.36"/><polyline points="21 3 21 9 15 9"/></svg>
        </button>
      </div>
    </header>
  )

}
 
export default Hud