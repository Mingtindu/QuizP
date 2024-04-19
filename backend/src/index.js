import { app } from './app.js';
import connectDb from './db/index.js';

connectDb()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`App is running on port 8000`);
        });
    })
    .catch((err) => { // Changed curly braces to parentheses
        console.log(`Mongodb connection failed : ${err}`);
    });
