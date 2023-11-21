
const SolarController = {};

SolarController.test = (req, res, next) => {
    res.locals.test = {
        congrats: 'Your object was sent back successfully'
    }
    return next();
}


module.exports = SolarController;