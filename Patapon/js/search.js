var manual = {
    "gen": [
        ["Проблема со стипендией", "gen/where_stip.html"],
        ["Философский вопрос", "gen/war_and_peace.html"]
    ],
    "nav": [
        ["Где находятся корпуса?", "nav/where_corpus.html"],
        ["Где находится аудитория?", "nav/where_room.html"]
    ],
    "tech": [
        ["Проблема со входом в личный кабинет", "tech/lk_trouble.html"],
        ["На сайте показывает рассписание чужой группы", "tech/raspisanie.html"]
    ]
}

let search_param = new URL(document.location.href).searchParams.get('taskbar');


const COUNT = 3; //Максимальное количество выводимых руководств
var count = 0; //Текущее количество выведенных руководств


var str;
var found = false;
var FOUND = false;

for (let j = 0; j < search_param.length / 2; j++) {
    found = false;
    for (let i = 0; i < manual.gen.length; i++) {
        let temp = search_param.slice(0, (search_param.length - 1) - j);
        if (manual["gen"][i][0].toLowerCase().indexOf(temp.toLowerCase()) >= 0) {
            if (!FOUND) {
                str = `<h1>Результаты поиска:</h1>`;
                FOUND = true;
            }
            if (count == COUNT) {
                found = false;
                break;
            }
            count += 1;
            str += `<li> <a href="${manual["gen"][i][1]}"> ${manual["gen"][i][0]} </a> <txt class="choose"> --- </txt> </li>`
            found = true;
        }
    }
    if (found) {
        break;
    }
}
for (let j = 0; j < search_param.length / 2; j++) {
    found = false;
    for (let i = 0; i < manual.nav.length; i++) {
        let temp = search_param.slice(0, (search_param.length - 1) - j);
        if (manual["nav"][i][0].toLowerCase().indexOf(temp.toLowerCase()) >= 0) {
            if (!FOUND) {
                str = `<h1>Результаты поиска:</h1>`;
                FOUND = true;
            }
            if (count == COUNT) {
                found = false;
                break;
            }
            count += 1;
            str += `<li> <a href="${manual["nav"][i][1]}"> ${manual["nav"][i][0]} </a> <txt class="choose"> --- </txt> </li>`
            found = true;
        }
    }
    if (found) {
        break;
    }
}
for (let j = 0; j < search_param.length / 2; j++) {
    found = false;
    for (let i = 0; i < manual.tech.length; i++) {
        let temp = search_param.slice(0, (search_param.length - 1) - j);
        if (manual["tech"][i][0].toLowerCase().indexOf(temp.toLowerCase()) >= 0) {
            if (!FOUND) {
                str = `<h1>Результаты поиска:</h1>`;
                FOUND = true;
            }
            if (count == COUNT) {
                found = false;
                break;
            }
            count += 1;
            str += `<li> <a href="${manual["tech"][i][1]}"> ${manual["tech"][i][0]} </a> <txt class="choose"> --- </txt> </li>`
            found = true;
        }
    }
    if (found) {
        break;
    }
}

if (FOUND) {
    document.getElementById('rezult').innerHTML = str;
}