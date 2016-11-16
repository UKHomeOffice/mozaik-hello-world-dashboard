require('babel-register')({
    only: [
        /node_modules\/mozaik[^/]*\/src/,
        /src\/server\.js/,
        /src\/mozaik[^/]*\/src/
    ]
});

require('./src/server');
