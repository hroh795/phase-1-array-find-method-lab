// code your solution here
function superbowlWin(record) {
  const wonYear = record.find(isWon);
  if (wonYear != undefined) {
    return wonYear.year;
  }else {
    return undefined;
  }

}

function isWon(won) {
    return won.result ==="W";
}
