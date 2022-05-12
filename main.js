const timesToRun = document.getElementById("numSimulations");
const freqDom = document.getElementById("frequencyofdom");
const freqRec = document.getElementById("frequencyofrec");
const result = document.getElementById("result");

freqDom.addEventListener("input", update);
freqRec.addEventListener("input", update);

function update() {
    if (this.value > 100) {
        this.value = 100;
    }
    if (this === freqDom) {
        freqRec.value = 100 - parseInt(freqDom.value);
    } else {
        freqDom.value = 100 - parseInt(freqRec.value);
    }
}

function fullShortCircuit(numreq, domfreq) {
    if (domfreq === 0) {
        result.innerHTML = `Results: ${"aa ".repeat(numreq)}<br><br>AA: 0<br>aa: ${numreq}<br>Aa: 0`;
    } else if (domfreq === 100) {
        result.innerHTML = `Results: ${"AA ".repeat(numreq)}<br><br>AA: ${numreq}<br>aa: 0<br>Aa: 0`;
    }
}

function simulate() {
    let sims = parseInt(timesToRun.value);
    let domFreq = parseInt(freqDom.value) / 100;
    if (domFreq === 100 || domFreq === 0) {
        fullShortCircuit(sims, domFreq);
        return
    }
    let resultarr = [];
    for (let i = 0; i < sims; i++) {
        let res = "";
        let val = Math.random();
        if (val < domFreq) {
            res += "A";
        } else {
            res += "a"
        }
        val = Math.random();
        if (val < domFreq) {
            res += "A";
        } else {
            res += "a"
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
    if (sims <= 2000) {
        result.innerHTML = `Results: ${resultarr.join(" ")}<br><br>AA: ${AA}<br>aa: ${aa}<br>Aa: ${Aa}`;
    } else {
        result.innerHTML = `Results: shortened due to more than 2000 alleles<br><br>AA: ${AA}<br>aa: ${aa}<br>Aa: ${Aa}`;
    }
}