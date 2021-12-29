"use strict";
exports.__esModule = true;
var gameList = [
    {
        "id": 1,
        "title": "The Witcher 3",
        "platform": "XBOX"
    },
    {
        "id": 2,
        "title": "The Witcher 3",
        "platform": "PLAYSTATION"
    },
    {
        "id": 3,
        "title": "Overwatch",
        "platform": "PC"
    }
];
var recordItemList = [
    {
        "gameTitle": "The Witcher 3",
        "gamePlatform": "PLAYSTATION",
        "genreName": "RPG"
    },
    {
        "gameTitle": "The Witcher 3",
        "gamePlatform": "XBOX",
        "genreName": "RPG"
    },
    {
        "gameTitle": "Overwatch",
        "gamePlatform": "PC",
        "genreName": "Shooter"
    },
    {
        "gameTitle": "Overwatch",
        "gamePlatform": "PC",
        "genreName": "Shooter"
    },
    {
        "gameTitle": "The Witcher 3",
        "gamePlatform": "PLAYSTATION",
        "genreName": "RPG"
    },
];
var buildBarSeries = function (games, records) {
    var mappedgames = games.map(function (game) {
        var filteredGames = records.filter(function (record) {
            return record.gameTitle === game.title && record.gamePlatform === game.platform;
        });
        return {
            x: game.title + " | " + game.platform,
            y: filteredGames.length
        };
    });
    var sortedGames = mappedgames.sort(function (a, b) { return b.y - a.y; });
    return sortedGames.slice(0, 8);
};
var getPlatformChartData = function (records) {
    var platforms = ['PC', 'PLAYSTATION', 'XBOX'];
    var series = platforms.map(function (platform) {
        var filteredGames = recordItemList.filter(function (record) {
            return record.gamePlatform === platform;
        });
        return filteredGames.length;
    });
    return {
        labels: platforms,
        series: series
    };
};
var getGenreCharData = function (records) {
    var computeRecordItem = function (obj, record) {
        if (obj[record.genreName] !== undefined) {
            obj[record.genreName] += 1;
        }
        else {
            obj[record.genreName] = 1;
        }
        return obj;
    };
    var genreByAmount = records.reduce(computeRecordItem, {});
    var labels = Object.keys(genreByAmount);
    var series = labels.map(function (x) { return genreByAmount[x]; });
    return {
        labels: labels,
        series: series
    };
};
console.log('GRÁFICO DE BARRAS ----------------------------------------');
console.log(buildBarSeries(gameList, recordItemList));
console.log('GRÁFICO DE ROSCA (PLATAFORMA) ----------------------------');
console.log(getPlatformChartData(recordItemList));
console.log('GRÁFICO DE ROSCA (GÉNEROS)---------------------------------');
console.log(getGenreCharData(recordItemList));
