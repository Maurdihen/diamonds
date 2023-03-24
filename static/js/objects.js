function draw_objects(left, top, img, width, height) {
    var cave = document.createElement("img")
    cave.src = img;
    cave.style.width = width;
    cave.style.height = height;
    cave.style.position = "absolute";
    cave.style.left = left;
    cave.style.top = top;
    document.body.appendChild(cave);
}

function draw_icons(left, top, img, width, height) {
    var icons = document.createElement("img")
    icons.src = img;
    icons.style.width = width;
    icons.style.height = height;
    icons.style.position = "absolute";
    icons.style.left = left;
    icons.style.top = top;
    icons.id = "cave";
    document.body.appendChild(icons);
}

function zip(array1, array2){
     let zipped = []

     for(let i = 0; i < array1.length; i++){
       zipped.push([array1[i], array2[i]])
     }
      return zipped
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

function contains(arr, elem) {
    for (const element of arr) {
        if (element === elem) {
            return true;
        }
    }
    return false;
}

// draw field
draw_objects("1000px", "40px", "static/img/camp.jpg", "400px", "400px")

// draw action card
draw_objects("1023px", "65px", "static/img/action_cards.png", "143px", "153px")

// Это добавлять после первого раунда
draw_objects("1008px", "331px", "static/img/barriers/barrier_1.png", "66px", "69px")

// Это добавлять после второго раунда
draw_objects("1075px", "356px", "static/img/barriers/barrier_2.png", "66px", "66px")

// Это добавлять после третьего раунда
draw_objects("1165px", "362px", "static/img/barriers/barrier_3.png", "64px", "64px")

// Это добавлять после четвёртого раунда
draw_objects("1248px", "363px", "static/img/barriers/barrier_4.png", "64px", "64px")

// Это добавлять после пятого раунда
draw_objects("1329px", "362px", "static/img/barriers/barrier_5.png", "64px", "64px")

// иконка игрока
var icons_1 = document.createElement("img")
    icons_1.src = "static/img/players_icons/2.png";
    icons_1.style.width = "35px";
    icons_1.style.height = "35px";
    icons_1.style.position = "absolute";
    icons_1.style.left = "1185px";
    icons_1.style.top = "200px";
    icons_1.id = "cave";
    document.body.appendChild(icons_1);

// иконка игрока
var icons_2 = document.createElement("img")
    icons_2.src = "static/img/players_icons/1.png";
    icons_2.style.width = "35px";
    icons_2.style.height = "35px";
    icons_2.style.position = "absolute";
    icons_2.style.left = "1240px";
    icons_2.style.top = "250px";
    icons_2.id = "cave";
    document.body.appendChild(icons_2);


// карта выход
var exit_card = document.createElement("img")
    exit_card.src = "static/img/cards/exit_card.png";
    exit_card.style.width = "202.4px";
    exit_card.style.height = "278.96px";
    exit_card.style.position = "absolute";
    exit_card.style.left = "1230px";
    exit_card.style.top = "490px";
    exit_card.id = "cave";
    document.body.appendChild(exit_card);

// карта продолжить
var card_to_continue = document.createElement("img")
    card_to_continue.src = "static/img/cards/card_to_continue.png";
    card_to_continue.style.width = "202.4px";
    card_to_continue.style.height = "278.96px";
    card_to_continue.style.position = "absolute";
    card_to_continue.style.left = "1000px";
    card_to_continue.style.top = "490px";
    card_to_continue.id = "cave";
    document.body.appendChild(card_to_continue);


// images caves
var caves = ["static/img/caves/pass/pass_1.png", "static/img/caves/pass/pass_2.png", "static/img/caves/pass/pass_3.png", "static/img/caves/pass/pass_4.png", "static/img/caves/pass/pass_5_1.png", "static/img/caves/pass/pass_5_2.png", "static/img/caves/pass/pass_7_1.png", "static/img/caves/pass/pass_7_2.png", "static/img/caves/pass/pass_9.png", "static/img/caves/pass/pass_11_1.png", "static/img/caves/pass/pass_11_2.png", "static/img/caves/pass/pass_13.png", "static/img/caves/pass/pass_14.png", "static/img/caves/pass/pass_15.png", "static/img/caves/pass/pass_17.png", "static/img/caves/relics/relic_1.png", "static/img/caves/relics/relic_2.png", "static/img/caves/relics/relic_3.png", "static/img/caves/relics/relic_4.png", "static/img/caves/relics/relic_5.png", "static/img/caves/traps/boulder_trap_1.png", "static/img/caves/traps/boulder_trap_2.png", "static/img/caves/traps/boulder_trap_3.png", "static/img/caves/traps/log_trap_1.png", "static/img/caves/traps/log_trap_2.png", "static/img/caves/traps/log_trap_3.png", "static/img/caves/traps/snake_trap_1.png", "static/img/caves/traps/snake_trap_2.png", "static/img/caves/traps/snake_trap_3.png", "static/img/caves/traps/spider_trap_1.png", "static/img/caves/traps/spider_trap_2.png", "static/img/caves/traps/spider_trap_3.png", "static/img/caves/traps/volcano_trap_1.png", "static/img/caves/traps/volcano_trap_2.png", "static/img/caves/traps/volcano_trap_3.png"]

// left и top
var cordinates = [["837px", "65px"], ["673px", "65px"], ["509px", "65px"], ["345px", "65px"], ["181px", "65px"], ["17px", "65px"], ["17px", "239px"], ["181px", "239px"], ["345px", "239px"], ["509px", "239px"], ["673px", "239px"], ["837px", "239px"], ["837px", "413px"], ["673px", "413px"], ["509px", "413px"], ["345px", "413px"], ["181px", "413px"], ["17px", "413px"], ["17px", "587px"], ["181px", "587px"], ["345px", "587px"], ["509px", "587px"], ["673px", "587px"], ["837px", "587px"]]

// cписок формата рандомная картинка и его кардинаты([[img, [left, top]], [], []])
var caves_cordinates = zip(shuffle(caves), cordinates);

var TRAPS = {
    boulder: [["static/img/caves/traps/boulder_trap_1.png", "static/img/caves/traps/boulder_trap_2.png", "static/img/caves/traps/boulder_trap_3.png"], 0],
    log: [["static/img/caves/traps/log_trap_1.png", "static/img/caves/traps/log_trap_2.png", "static/img/caves/traps/log_trap_3.png"], 0],
    snake: [["static/img/caves/traps/snake_trap_1.png", "static/img/caves/traps/snake_trap_2.png", "static/img/caves/traps/snake_trap_3.png"], 0],
    spider: [["static/img/caves/traps/spider_trap_1.png", "static/img/caves/traps/spider_trap_2.png", "static/img/caves/traps/spider_trap_3.png"], 0],
    volcano: [["static/img/caves/traps/volcano_trap_1.png", "static/img/caves/traps/volcano_trap_2.png", "static/img/caves/traps/volcano_trap_3.png"], 0]
}

var cnt = 0;

while (contains(Object.values(TRAPS).map(trap => trap[1]).flat(), 2) === false) {
    if (caves_cordinates[cnt][1].length !== 0 && caves_cordinates[cnt][1][0].length !== 0) {
        draw_objects(caves_cordinates[cnt][1][0], caves_cordinates[cnt][1][1], caves_cordinates[cnt][0], "143px", "153px");
    }
    var keys_traps = caves_cordinates[cnt][0].substring(caves_cordinates[cnt][0].lastIndexOf("/") + 1, caves_cordinates[cnt][0].indexOf("_", caves_cordinates[cnt][0].lastIndexOf("/") + 1));
    try {
        if (contains(Object.keys(TRAPS), keys_traps)) {
            TRAPS[keys_traps][1] += 1
        }
    }
    catch(err) {}
    cnt += 1
}