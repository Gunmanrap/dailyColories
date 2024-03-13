personDB = {
    gender: null,
    age: null,
    weight: null,
    height: null,
    activity: {'мінімальны': 1.2, 'нізкі': 1.375, 'умераны': 1.55, 'высокі': 1.725, 'экстрэмальны': 1.9},
    activityCoefficient: null,
    dailyCalorie: null,
    indexBMI: {
        'Ніжэй за нармальную вагу': [18.5],
        'Нармальная вага': [18.5, 25],
        'Залішняя вага': [25, 30],
        'Атлусценне 1 ступені': [30, 35],
        'Атлусценне 2 ступені': [35, 40]
    },
    start() {
        this.gender = prompt('Увядзіце ваш пол: м - мужчына, ж - жанчына');
        if (this.gender !== 'м' && this.gender !== 'ж') {
            alert('Вы уводзіце некарэктныя дадзеныя!');
            this.gender = prompt('Увядзіце ваш пол: м - мужчына, ж - жанчына');
        }

        this.age = +prompt('Увядзіце ваш узрост');
        if (checkValue(this.age)) {
            this.age = +prompt('Увядзіце ваш узрост');
        }

        this.weight = +prompt('Увядзіце вашу вагу');

        this.height = +prompt('Увядзіце ваш рост');

        this.activityCoefficient = this.activity[prompt('Увядзіце ўзровень вашай актыўнасці: мінімальны,' +
            ' нізкі, умераны, высокі, экстрэмальны')];
        if (this.activityCoefficient === undefined) {
            alert('Вы уводзіце некарэктныя дадзеныя!')
            this.activityCoefficient = this.activity[prompt('Увядзіце ўзровень вашай актыўнасці: мінімальны,' +
                ' нізкі, умераны, высокі, экстрэмальны')];
        }
    },
    getBMI() {
        if (!this.weight && !this.height) {
            alert('Запусціце метад personDB.start');
        }
        const index = +(Math.pow((this.weight / this.height), 2) * 100);
    },
    getDailyCalorie() {
        if (!this.age && !this.weight && !this.height && !this.gender && !this.activityCoefficient) {
            alert('Запусціце метад personDB.start');
        } else if (this.gender === 'м') {
            this.dailyCalorie = ((10 * this.weight) + (6.25 * this.height) - (5 * this.age) + 5) * this.activityCoefficient;
        } else if (this.gender === 'ж') {
            this.dailyCalorie = ((10 * this.weight) + (6.25 * this.height) - (5 * this.age) - 161) * this.activityCoefficient;
        }
    }
}

function checkValue(value) {
    if (value === '' || value <= 0 || isNaN(value)) {
        alert('Вы уводзіце некарэктныя дадзеныя!');
        return true;
    }
}

personDB.start()
personDB.getBMI()
personDB.getDailyCalorie()
console.log(personDB)