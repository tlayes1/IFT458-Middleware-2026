//add logger middleware
const logger = (req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
};

module.exports = logger;

//Integrate this middleware into your main server file (app.js)
const logger = require('./loggerMiddleware');
app.use(logger);
