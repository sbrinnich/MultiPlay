//Global values
var team = "Blau";
var sitewidth = 0;

// Start game depending on get-parameter 'name' which should contain the game-name
window.onload = function() {
    var gametype = findGetParameter("name");
    sitewidth = $(window).width();
    if(gametype == "tictactoe"){
        play_as_team();
        php_call('getfield_tictactoe', play_tictactoe);
    }else if(gametype == "4gewinnt"){
        play_as_team();
        php_call('getfield_4gewinnt', play_4gewinnt);
    }
};

//Play as Team-Member depending on get-parameter 'team' which should contain the team-name
function play_as_team(){
    var teamname = findGetParameter("team"); //get parameter team
    team = teamname; //save teamname in global variable
    document.getElementById("team_name").innerHTML = teamname;
    return team; //return team if needed later
}

//Change color of canvas
function changecanvascolor(tn){
    if(tn == "Blau"){
        canvas.setAttribute("style", "border-color: #0E78AD;");
    }
    else {
        canvas.setAttribute("style", "border-color: #DB0E1C;");
    }
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
function play_tictactoe(field) {
    load_canvas();
    load_tictactoe(active_canvas, field, team);
    setInterval(refresh_game,2000,"tictactoe");
}

/**
 * Start 4-gewinnt game
 */
function play_4gewinnt(field) {
    load_canvas();
    load_4gewinnt(active_canvas, field, team);
    setInterval(refresh_game,2000,"4gewinnt");
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
 * @param callback function, which should be executed as soon as ajax call gets response
 *                 (response is passed as parameter to callback function)
 */
function db_call(type,args,callback) {
    $.ajax({
        type: "POST",
        url: 'php/db_con.php',
        dataType: 'json',
        data: {type: type, arguments: args}
    }).done(function (obj) {
        if( !('error' in obj) ) {
            if(callback != null) {
                callback(obj.results);
            }
        }else {
            if(callback != null) {
                callback(obj.error);
            }
        }
    });
}

/**
 * Retrieve data from php functions
 * @param type either getwinner_tictactoe or getwinner_4gewinnt or getteam or getfield_tictactoe or getfield_4gewinnt
 * @param callback function, which should be executed as soon as ajax call gets response
 *                 (response is passed as parameter to callback function)
 */
function php_call(type,callback) {
    $.ajax({
        type: "POST",
        url: 'php/php_con.php',
        dataType: 'json',
        data: {type: type}
    }).done(function (obj) {
        if( !('error' in obj) ) {
            if(callback != null) {
                callback(obj.results);
            }
        }else {
            if (callback != null) {
                callback(obj.error);
            }
        }
    });
}

/**
 * Refreshes the game status (from database) and redraws the game field
 * @param gamename
 */
function refresh_game(gamename){
    if(gamename == "tictactoe"){
        php_call('getfield_tictactoe', refresh_game_tictactoe);
    }else if(gamename == "4gewinnt"){
        php_call('getfield_4gewinnt', refresh_game_4gewinnt);
    }
}

/**
 * Change target url of lets-play-btn to a url of the selected game
 * @param targeturl is the name of the game that should be played.
 *                  it has to match the name in the database.
 */

function selectgame(targeturl){
    //Before selecting the game we need to know which teams are going to play it, and show them in the modal
    //get all teams from Database and make the right buttons out of them, eventually in the future different games need different teams
    db_call('get','all_teams',getteams);

    //while teambuttons are being created, change the targeturl of button
    //get current target from link in lets play button
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
}

/**
 * Change target url of lets-play-btn to a url of the selected team
 * @param dbresponse is the response from the database that contains team informations
 */
function getteams(dbresponse){

    var newbuttons = "";

    //for each team make a button
    for(i = 0; i < dbresponse.length; i++)
    {
        //input (type = radio)
        newbuttons += "<input type='radio' name='modal-radios' value='" + dbresponse[i].name + "'";
        if(i == 0){
            newbuttons +=  " checked='checked'"; //first button is checked at the beginning
        }
        newbuttons +=  " id='team-" + dbresponse[i].name + "' /> ";
        //label
        newbuttons += "<label class='modal-team-button' for='team-" + dbresponse[i].name + "'";
        newbuttons += " onclick='selectteam(" + '"' + dbresponse[i].name + '"' + ")'";
        newbuttons += "style='background-color: " + dbresponse[i].color + "' >";
        newbuttons += dbresponse[i].name + "</label>";
    }
    //Add buttons to wrapper
    document.getElementById("teamradios").innerHTML = newbuttons;

    //set default Team that is checked at the beginning of modal dialoque.
    selectteam(dbresponse[0].name);
}

/**
 * Change target url of lets-play-btn to a url of the selected team
 * @param targeturl is the name of the team that should be played.
 *                  it has to match the name in the database.
 */
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

// FUNCTION FOR COMPARING ARRAYS

// Warn if overriding existing method
if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
};
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});