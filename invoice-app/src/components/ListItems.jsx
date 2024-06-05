import { RowItems } from "./RowItems";

export const ListItems = ({title, items}) => {
    return (
        <>
            <h2>{title}</h2>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(({id, product, price, quantity }) =>
                       <RowItems key={id} product={product} price={price} quantity={quantity}/>
                    )}

                </tbody>
            </table>
        </>
    );
}