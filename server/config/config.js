const config ={
    production: {
        SECRET: "supersecret",
        DATABASE: "mongodb+srv://bookshelf:<book_shelf123>@cluster0.6uqoj.mongodb.net/bookshelf?retryWrites=true&w=majority",

    },
    default: {
        SECRET: 'SUPERSECRETPASSWORD123',
        DATABASE: 'mongodb://localhost:27017/booksShelf',
    }
}

exports.get = function get(env){
    return config[env] || config.default
}

