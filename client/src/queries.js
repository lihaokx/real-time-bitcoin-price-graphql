import { gql } from  "@apollo/client";
// import gql from 'graphql-tag';
const getPricesQuery = gql`
    {
        prices  {
            sell
            symbol
        }
    }
`;

export {getPricesQuery};