 import {getPricesQuery} from '../queries'
 import{ useQuery} from "@apollo/client";
const  Prices = ( ) => {
    const { loading, error, data } = useQuery(getPricesQuery);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    // console.log("data: ", data.prices)
    return(
    <div id="menu">
        <ul>
            {data.prices.map((pri, idx) => {
                return <li key={idx}>{pri.symbol}: {pri.sell}</li>
            })}
        </ul>
    </div>
    )
}

export default Prices 