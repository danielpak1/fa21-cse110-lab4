let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (let x in statistics) {
    if ((x.charAt(0) == 'r') || (statistics[x] % 2 != 0)) {
        console.log(statistics[x]);
    }
}