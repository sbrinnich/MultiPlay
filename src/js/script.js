//Global values
var team = "Blau";

// Start game depending on get-parameter 'name' which should contain the game-name
window.onload = function() {
    var gametype = findGetParameter("name");
    if(gametype == "tictactoe"){
        play_as_team();
        play_tictactoe();
    }else if(gametype == "4gewinnt"){
        play_as_team();
        play_4gewinnt();
    }
};

//Play as Team-Member depending on get-parameter 'team' which should contain the team-name
function play_as_team(){
    var teamname = findGetParameter("team"); //get parameter team
    team = teamname; //save teamname in global variable
    document.getElementById("team_name").innerHTML = teamname;
    return team; //return team if needed later
}


/**
 * Load currently active canvas into global variable active_canvas(changes depending on screen-size)
 */
function load_canvas() {
    var canvases = $('canvas');
    active_canvas = null;
    for(var i = 0; i < canvases.length; i++){
        if(canvases.eq(i).is(':visible')){
            active_canvas = canvases[i];
            break;
        }
    }
}

/**
 * Start tic-tac-toe game
 */
function play_tictactoe() {
    load_canvas();
    load_tictactoe(active_canvas);
}

/**
 * Start 4-gewinnt game
 */
function play_4gewinnt() {
    load_canvas();
    load_4gewinnt(active_canvas);
}

/**
 * Searches a specified get-parameter in current url and returns its value
 * @param parameterName name of requested get-parameter
 * @returns value of requested parameter
 */
function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

/**
 * Retrieve/Delete/Save data from/to database
 * @param type either get or insert or delete
 * @param args if type is get: name of requested view in database <br />
 *              if type is insert: array with following information: [name_of_table, [n_values]] <br />
 *              if typ is delete: name of table
 */
function db_call(type,args) {
    $.ajax({
        type: "POST",
        url: 'php/db_con.php',
        dataType: 'json',
        data: {type: type, arguments: args}
    }).done(function (obj) {
        if( !('error' in obj) ) {
            return obj.results;
        }else {
            return obj.error;
        }
    });
}

/**
 * Change target url of lets-play-btn to a url of the selected game
 */

function selectgame(targeturl){
    //get target from link in lets play button
    var target = document.getElementById("lets-play-btn").getAttribute("href");

    //if game is not set already add it to target url
    if (target.indexOf("?name=") == -1){
        document.getElementById("lets-play-btn").setAttribute("href", (target + "?name=" + targeturl));
    }
    else
    {
        target = target.substring(0, target.indexOf("?name=")); //cut off unnecessary attributes
        document.getElementById("lets-play-btn").setAttribute("href", (target + "?name=" + targeturl));
    }

    //set default Team that is checked at the beginning of modal dialoque.
    selectteam('Blau');
}


function selectteam(targeturl){
    //get target from link in lets play button
    var target = document.getElementById("lets-play-btn").getAttribute("href");

    //if team is not set already add it to target url
    if (target.indexOf("&team=") == -1){
        document.getElementById("lets-play-btn").setAttribute("href", (target + "&team=" + targeturl));
    }
    else
    {
        target = target.substring(0, target.indexOf("&team=")); //cut off unnecessary attributes
        document.getElementById("lets-play-btn").setAttribute("href", (target + "&team=" + targeturl));
    }
}