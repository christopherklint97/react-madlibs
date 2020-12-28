// Found this solution here: https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript?page=1&tab=votes#tab-top
function addCommas(num) {
  return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

module.exports = addCommas;
