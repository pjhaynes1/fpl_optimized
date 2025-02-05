let team_codes = {
    3: { name: "Arsenal", short: "ARS" },
    7: { name: "Aston Villa", short: "AVL" },
    36: { name: "Brighton", short: "BHA" },
    90: { name: "Burnley", short: "BUR" },
    8: { name: "Chelsea", short: "CHE" },
    31: { name: "Crystal Palace", short: "CRY" },
    11: { name: "Everton", short: "EVE" },
    54: { name: "Fulham", short: "FUL" },
    13: { name: "Leicester", short: "LEI" },
    2: { name: "Leeds", short: "LEE" },
    14: { name: "Liverpool", short: "LIV" },
    43: { name: "Man City", short: "MCI" },
    1: { name: "Man Utd", short: "MUN" },
    4: { name: "Newcastle", short: "NEW" },
    49: { name: "Sheffield Utd", short: "SHU" },
    20: { name: "Southampton", short: "SOU" },
    6: { name: "Spurs", short: "TOT" },
    35: { name: "West Brom", short: "WBA" },
    21: { name: "West Ham", short: "WHU" },
    39: { name: "Wolves", short: "WOL" }
}

let element_type = {
    1: { name: "Goalkeeper", "short": "GK", "id": 1, "min": 1, "max": 1 },
    2: { name: "Defender", "short": "DF", "id": 2, "min": 3, "max": 5 },
    3: { name: "Midfielder", "short": "MD", "id": 3, "min": 2, "max": 5 },
    4: { name: "Forward", "short": "FW", "id": 4, "min": 1, "max": 3 }
}

function getWithSign(val, digits = 2) {
    if (val >= 0) {
        return "+" + parseFloat(val).toFixed(digits);
    } else {
        return val.toFixed(digits);
    }
}

function getSum(arr) {
    return arr.reduce((a, b) => a + b, 0)
}

const downloadToFile = (content, filename, contentType) => {
    const a = document.createElement('a');
    const file = new Blob([content], { type: contentType });

    a.href = URL.createObjectURL(file);
    a.download = filename;
    document.body.append(a);
    setTimeout(function() {
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    }, 100);

};