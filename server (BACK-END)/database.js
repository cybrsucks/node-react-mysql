const mysql = require('mysql');
const dbConfig = require("./config/db.config.js"); 

// require('dotenv').config();

const connectDatabase = mysql.createConnection({
        user: dbConfig.USER,
        password: dbConfig.PASSWORD,
        host: dbConfig.HOST,
        database: dbConfig.DB
    });

connectDatabase.connect(function(err){
    if (err) throw err;
    console.log(`db is live`);
});

module.exports = connectDatabase;






// `
//         ⣔⣡⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣟⢿⣿⣿⣿⣿⣿⡄⠀⠻⣿⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀      
// ⠀⠀⠀⠀⠀⠀⡴⣹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣌⠻⣿⣿⣿⣿⣆⠀⠈⢿⣿⠀⠀⠀⠀⠀⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀    
// ⠀⠀⠀⠀⢀⡜⣴⣿⣿⡿⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡌⢿⣿⣿⣿⣷⣄⠀⠈⠻⠿⣇⣠⡆⢈⠢⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀  
// ⠀⠀⠀⠀⡜⣼⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠹⣿⣿⣿⣿⣷⣦⣀⠀⠀⠀⠀⢀⣷⡌⢆⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⡘⣼⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡙⣿⣿⣿⣿⡾⣿⣿⣷⡔⢾⣿⣿⣿⣦⠣⡀⠀⠀⠀⠀⠀⠀
// ⠀⠀⢠⢡⣿⣿⣿⣿⣿⣼⣿⣿⣿⣿⣿⣿⣿⣿⡟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡝⣿⣿⣿⣿⢹⣿⣷⣿⣌⢿⣿⣿⣿⣷⡐⡄⠀⠀⠀⠀⠀
// ⠀⠀⡆⣼⣿⣇⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣷⣿⣿⣿⣿⣿⣿⡎⢻⣿⡘⠿⣿⣿⣿⡘⣿⣿⣿⡏⣿⣿⢹⣿⣎⢿⣿⣿⣿⣿⣜⢆⠀⠀⠀⠀
// ⡤⢊⠀⣿⣿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⡼⣿⣿⣿⢹⣿⣿⣿⣿⣿⡇⣂⠹⡇⣒⣬⡛⠿⣷⡸⣿⣿⣿⢻⣿⢸⣿⣿⣎⢻⣿⣿⣿⣿⣎⢆⠀⠀⠀
// ⠀⡟⢸⣿⣿⣸⣿⣿⣿⣿⡿⣿⣿⣿⣿⡇⣿⣿⣿⠘⣿⣿⣿⣿⣿⢰⣿⣷⡁⣿⣿⣿⣷⣤⡁⢹⣿⣿⢸⣿⢸⣿⣿⣿⣆⢻⣿⣿⣯⣿⣮⠢⡀⠀
// ⢰⡇⢸⣿⣿⣿⣿⣿⣿⣿⣷⣹⣿⣿⣿⣿⢸⣿⣿⠀⢸⣿⣿⣿⢃⢞⣫⣽⣶⣿⡿⠿⣿⣛⣻⡆⢿⣿⢸⡟⢸⣿⣿⣿⣿⣎⣿⣿⣿⡸⣿⣧⠙⡄
// ⢨⡇⢸⣿⣿⣿⣿⣿⣿⣿⣿⡇⠙⢿⣿⣿⢸⣿⡏⢸⡀⣿⡿⢃⣾⣿⠟⠫⠑⠂⠉⠁⠀⣀⣀⠀⠸⣿⢸⣇⣿⣿⣿⣿⣿⣿⡘⣿⣿⣧⣿⣿⣶⡌
// ⣀⠁⢘⣿⣿⡿⣿⣿⠹⣿⣿⡇⢀⣄⠛⢿⢸⣿⢃⣿⡇⣋⣴⣿⡛⠂⠀⢀⠀⠀⠀⠀⠀⣠⡶⢠⡇⣿⣼⢸⣿⣿⣿⣿⣿⣿⣧⢹⣿⣿⣼⣿⣇⣿
// ⠀⢱⢸⣸⣿⡇⣿⣿⠀⢿⣿⢣⣿⣿⣿⡦⢸⠏⣼⣿⣿⣿⣿⣿⣤⣤⣾⣿⣧⣙⠿⠟⣉⣥⣴⣾⣇⠀⡏⣿⣿⣿⣿⣿⣿⣿⣿⣆⣿⣿⣗⣿⣿⣿
// ⠀⢸⢸⣇⢿⣷⢸⣿⢰⠸⠃⢾⣿⣿⣿⣗⣨⣬⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⢹⣿⣸
// ⠀⢸⠸⣿⡞⣿⡌⡟⣸⠄⣴⣿⣿⠿⠭⠛⠛⠚⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡎⣿⣿⢸⣿⢿
// ⠀⠸⠀⢿⣿⡽⣷⠀⣿⡿⠋⠉⠀⠀⠀⠀⢒⡀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⢹⣿⢸⣿⣮
// ⠀⠀⡄⣌⢿⣷⣽⣇⠁⠀⢀⡀⢠⣶⡤⠶⢛⣡⣿⣿⣿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⣡⣾⣿⣿⢃⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⢸⣿⣻
// ⠀⠀⡇⣿⣎⢿⣿⣟⡆⢀⣼⣿⡆⣀⣴⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢟⣡⣾⣿⣿⣿⡟⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣼⣿⣾⢃⣿
// ⠀⠀⡇⣿⣿⣧⡹⣿⣾⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⣫⣴⣿⣿⣿⣿⣿⣿⠇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣿⣿⡇⣿⣯⣾⣿
// ⠀⠀⡇⣿⣿⣿⣿⣾⣿⣷⡈⣿⣿⣿⣿⣿⣿⡟⠿⠿⠟⣛⣛⣯⣵⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣼⣿⣿⡇⣿⣿⣿⣿
// ⠀⠀⡇⣿⣿⣿⣿⣿⣿⣿⣷⡌⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣳⣿⣿⣿⢁⣿⣿⣿⣿
// ⠀⠀⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠋⠀⢀⡄⣸⣿⣿⣿⣿⣿⣿⣿⡿⣱⣿⣿⣿⡿⢸⣿⣿⣿⣿
// ⠀⠀⢁⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡈⠛⠻⠿⠿⣿⣿⣿⣿⣿⠿⠿⠛⠛⠉⠀⠀⢀⣴⣿⡇⢿⣿⣿⣿⣿⣿⣿⢟⣾⣿⣿⣿⣿⠃⣿⣿⣿⣿⣿
// ⠀⠀⢸⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠠⡀⠀⠠⠀⠆⠂⠂⠀⠀⣀⣤⣶⣿⣿⣿⣧⢸⣿⣿⣿⣿⢟⣵⣿⣿⣿⣿⣿⠏⣼⣿⣿⣿⡿⡣
// ⠀⠀⠀⡞⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡄⢶⣧⠀⢰⣶⢂⠂⠀⣼⡆⢹⣿⣿⣿⣿⠟⣡⡌⣿⠿⣋⣵⣿⣿⣿⣿⣿⡿⠋⠀⠈⠛⢛⡩⠊⠀
// ⠀⠀⠀⢳⢿⣿⡟⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠻⢈⣼⠏⠀⠀⣰⣿⣿⣦⣙⠿⢋⣥⡊⠉⢤⣴⣾⣿⣿⣿⠿⠟⠋⠁⠀⠀⠀⠀⠀⠀⠈⢢⠀
// ⠀⠀⠀⠀⢟⢿⣧⢠⡙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠈⠀⠀⠀⢠⣿⣿⣿⠏⠀⠀⡀⠙⢿⣿⣶⣶⣶⣶⣶⣶⣾⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠱
// `