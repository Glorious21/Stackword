function HelpModal() {
  return (
    <div className="modal-backdrop" id="helpBackdrop" hidden>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="helpTitle">
        <h2 id="helpTitle">How to play</h2>
        <ul>
          <li>A secret word is picked. Type a guess and hit <strong>Guess</strong>.</li>
          <li>Wrong guess: a brand-new avatar card lands on the pile, and one more
            letter of the word is revealed as a hint.</li>
          <li>Click any card to pull it to the front and give it a spin.</li>
          <li>Drag / swipe the pile left or right to cycle which card sits on top.</li>
          <li>Get closer to the real spelling and your hint can jump ahead &mdash;
            the game rewards guesses that are on the right track.</li>
        </ul>
        <button type="button" className="guess-submit" id="btnCloseHelp">Got it</button>
      </div>
    </div>
  );
}

export default HelpModal;
