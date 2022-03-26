const graphql = require('graphql');
const _ = require('lodash');
const axios = require('axios');
const priceUrl = "https://blockchain.info/ticker";

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLFloat,
    GraphQLNonNull
} = graphql;

const priceType = new GraphQLObjectType({
    name: 'Price',
    fields: ( ) => ({
        id: { type: GraphQLID },
        fiftenMin: { type: GraphQLFloat },
        last: { type: GraphQLFloat },
        buy: { type: GraphQLFloat },
        sell: { type: GraphQLFloat },
        symbol: { type: GraphQLString }       

    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        prices: {
            type: new GraphQLList(priceType),
            resolve: async (parent, args) => {
                let result = await axios.get(priceUrl)
                .then(function (res) {
                    var pri = []
                    // console.log(res.data);
                    pri.push(res.data.USD);
                    pri.push(res.data.JPY);
                    pri.push(res.data.HKD);
                    pri.push(res.data.CNY);
                    pri.push(res.data.AUD);
                    pri.push(res.data.CAD);
                    pri.push(res.data.EUR);
                    return pri; 
                }) 
                .catch((err)=>{
                    console.log(err);
                })
                return result;
 
            }
        }
    }
});
module.exports = new GraphQLSchema({
    query: RootQuery
});


