const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Ольга",
            "id_2": "Анна",
            "id_3": "Ирина",
            "id_4": "Людмила",
            "id_5": "Галина",
            "id_6": "Татьяна",
            "id_7": "Светлана",
            "id_8": "Наталья",
            "id_9": "Елена",
            "id_10": "Мария"
        }
    }`,
    patronymicJson: `{
        "count": 10,
        "list": {     
            "id_1": "Сергеев",
            "id_2": "Александров",
            "id_3": "Константинов",
            "id_4": "Михайлов",
            "id_5": "Петров",
            "id_6": "Алексеев",
            "id_7": "Георгиев",
            "id_8": "Геннадьев",
            "id_9": "Вячеславов",
            "id_10": "Степанов"
        }
    }`,
    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Пожарный",
            "id_2": "Проектировщик",
            "id_3": "Электрик",
            "id_4": "Шахтер",
            "id_5": "Солдат",
            "id_6": "Нефтяник",
            "id_7": "Плотник",
            "id_8": "Слесарь",
            "id_9": "Механик",
            "id_10": "Строитель"
        }
    }`,
    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Формацевт",
            "id_2": "Бровист",
            "id_3": "Парикмахер",
            "id_4": "Разработчик на Python",
            "id_5": "Дизайнер",
            "id_6": "Стилист",
            "id_7": "Стюардесса",
            "id_8": "Бухгалтер",
            "id_9": "Учитель",
            "id_10": "Повар"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomGender: function () {
        return Math.floor(Math.random() * 2) == 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomIntNumber: (min = 0, max = 1) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function () {
        if (this.person.gender == 'Мужчина') {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    randomSurname: function () {
        if (this.person.gender == 'Мужчина') {
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + "а";
        }
    },

    randomPatronymic: function () {
        if (this.person.gender == 'Мужчина') {
            return this.randomValue(this.patronymicJson) + "ич";
        } else {
            return this.randomValue(this.patronymicJson) + "на";
        }
    },

    randomprofession: function () {
        if (this.person.gender == 'Мужчина') {
            return this.randomValue(this.professionMaleJson);
        } else {
            return this.randomValue(this.professionFemaleJson);
        }
    },

randomYear: function () { // Функция генерации Года
        return this.randomIntNumber(1970, 1995) + " г. р.";
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.surname = this.randomSurname();
        this.person.firstName = this.randomFirstName();
        this.person.year = this.randomYear(1970, 1995);
        this.person.patronymic = this.randomPatronymic();
        this.person.profession = this.randomprofession();
        return this.person;
    }
};