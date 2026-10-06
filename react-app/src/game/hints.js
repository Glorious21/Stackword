export function computeHintLength(guess, target, currentHintLength) {
  let match = 0;
  while (match < guess.length && match < target.length && guess[match] === target[match]) {
    match++;
  }

  const nextLen = Math.max(currentHintLength + 1, match + 1);
  return Math.min(nextLen, target.length);
}
