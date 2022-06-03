// copied from in class work in mod#14 - will need to change/update
// just a base

const withAuth = (req, res, next) => {
    if (!req.sessionloggedIn) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;