const timesToRun = document.getElementById("numSimulations");
const freqDom = document.getElementById("frequencyofdom");
const freqRec = document.getElementById("frequencyofrec");
const result = document.getElementById("result");

function simulate() {
    let sims = parseInt(timesToRun.value);
    let domFreq = parseInt(freqDom.value) / 100;
    let resultarr = [];
    for (let i = 0; i < sims; i++) {
        let res = "";
        let val = Math.random();
        if (val < domFreq) {
            res += "a";
        } else {
            res += "A"
        }
        val = Math.random();
        if (val < domFreq) {
            res += "a";
        } else {
            res += "A"
        }
        resultarr.push(res);
    }
    let Aa = 0;
    let aa = 0;
    let AA = 0;
    for (let i = 0; i < resultarr.length; i++) {
        if (resultarr[i] === "AA") {
            AA++;
        } else if (resultarr[i] === "aa") {
            aa++;
        } else {
            Aa++;
        }
    }
    result.innerHTML = `Results: ${resultarr.join(" ")}<br><br>AA: ${AA}<br>aa: ${aa}<br>Aa: ${Aa}`;
}