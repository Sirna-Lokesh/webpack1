const path=require('path');
const { fileURLToPath } = require('url');

module.exports={
    mode:"production",
    entry:{
        bundle:path.resolve(__dirname,"src/index.js")
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    devServer:{
        static:{
            directory:path.resolve(__dirname,'dist'),

        },
        port:3000,
        open:true,
        hot:true,
        compress:true,

    },
    module: {
        rules:[
            {
                test: /\.scss$/,
                use:[
                    {loader:'style-loader'},
                    {loader:'css-loader'},
                    {loader:'sass-loader'}
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                  },
                },
              },

        ],

    },
    
    resolve: {
        extensions: ['.js','.scss']
    }
}