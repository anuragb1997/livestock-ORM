const models = require('../db/models');
const { userAuth } = require('../middlewares/auth-middleware');

class UserService {
    constructor(seq) {
        console.log("SEQ", seq);
        models(seq);
        this.client = seq;
        this.models = seq.models
    }

    async getUsers() {
        return 'test'
    }
}

module.exports = UserService