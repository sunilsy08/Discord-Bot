
const Discord = require("discord.js");
const config = require("../config.json");
const js = require("jsearch");
const google = require('google-query');
const mysql = require('mysql');

const client = new Discord.Client();


const prefix = "!";
client.on("message", function  (message) { 
    if (message.author.bot) return;      
    if (!message.content.startsWith(prefix)) return;     
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    var connection = mysql.createConnection(config.DB_CONFIG);
    connection.connect();

    if (command === "hi") {
        message.reply(`hey!`);                  
    } 
    else if (commandBody.toLowerCase().startsWith("google ")) {
        
        var q = commandBody.slice(7);
        
        google.search(q,1,function(url_list){
            var url_str = url_list.slice(0,5).join('\n');
            message.reply(url_str);     
        });
        connection.query(`INSERT INTO bot_query (query)
        SELECT * FROM (SELECT '${q}') AS tmp
        WHERE NOT EXISTS (
            SELECT query FROM bot_query WHERE query = '${q}'
        ) LIMIT 1;`, function (error, results, fields) {
            if (error) {
                throw error
            };
        });

    } 
    else if (commandBody.toLowerCase().startsWith("recent ")) {
        
        var q = commandBody.slice(7);
        
        connection.query(`select query from bot_query where query like '%${q}%';
        `, function (error, results, fields) {
            var queries = results.map(x=>x.query).join('\n');
            console.log(queries);
            message.reply(queries);                  
            if (error) {
                throw error
            };
        });
    }    

    connection.end();                 
});     

client.login(config.BOT_TOKEN);
