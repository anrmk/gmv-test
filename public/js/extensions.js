Date.randomDate = function (start, end) {
    return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
}

Date.prototype.getWeek = function () {
    var onejan = new Date(this.getFullYear(), 0, 1);
    var millisecsInDay = 86400000;
    return Math.ceil((((this - onejan) / millisecsInDay) + onejan.getDay() + 1) / 7);
};

Date.prototype.customFormat = function () {
    return `Week ${this.getWeek()}, Day ${this.getDate()} of ${this.getFullYear()}`;
}

String.words = ["cat", "dog", "tac", "god", "act", "May", "window", "sun", "fish", "drive", "hope", "coffee"];
String.randomText = function (maxCount) {
    var amount = Math.round(Math.random() * maxCount) || 1;
    var words = String.words ?? [];
    var result = "", j;
    for (var i = 0; i < amount; i++) {
        j = Math.floor(Math.random() * words.length);
        result += (result ? " " : "") + words[j];
    }
    return result;
}

