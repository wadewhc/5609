const ChartLineData = {
    "Handguns": [6012, 5488, 5345, 6175, 6767, 7121, 6744, 6665, 8633, 6556, 7937],
    "Firearms, type not stated": [1663, 1815, 1900, 2315, 2892, 3140, 3106, 3417, 5048, 5345, 5706],
    "Knives or cutting instruments": [1541, 1434, 1545, 1526, 1559, 1612, 1563, 1555, 1818, 1202, 1630],
    "Other weapons or weapons not stated": [1609, 1604, 1502, 1714, 1848, 973, 932, 927, 1054, 1223, 1327],
    "Personal weapons (hands/fists/feet/etc.)": [698, 701, 666, 647, 663, 717, 719, 656, 725, 555, 665],
    "Blunt objects (clubs/hammers/etc.)": [502, 417, 431, 436, 464, 478, 457, 420, 421, 280, 367],
    "Rifles": [262, 239, 235, 216, 300, 392, 304, 377, 493, 462, 542],
    "Shotgun": [278, 275, 239, 247, 247, 264, 240, 215, 214, 170, 186],
    "Other guns": [107, 116, 88, 151, 172, 180, 163, 51, 113, 296, 422],
    "Narcotics": [37, 55, 70, 69, 118, 113, 106, 117, 168, 160, 187],
    "Asphyxiation": [100, 88, 93, 105, 92, 112, 93, 95, 78, 63, 98],
    "Fire": [67, 76, 55, 63, 78, 93, 80, 87, 114, 88, 94],
    "Strangulation":[93, 82, 84, 97, 97, 90, 75, 67, 58, 3, 20],
    "Poison": [12, 13, 9, 8, 12, 15, 6, 17, 17, 9, 15],
    "Drowning": [11, 3, 12, 12, 9, 8, 9, 7, 5, 0, 3],
    "Explosives": [6, 2, 6, 1, 1, 0, 4, 2, 3, 3, 1]
}

function normalizeData(data) {
    const max = Math.max(...data);
    const min = Math.min(...data);
    return data.map(value => (value - min) / (max - min));
}

const normalizedChartLineData = {};

for (const [key, values] of Object.entries(ChartLineData)) {
    normalizedChartLineData[key] = normalizeData(values);
}


export default normalizedChartLineData;