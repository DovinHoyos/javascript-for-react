
export const ClientDetails = ({title, client}) => {

    const { name: nameClient, lastname, email, address } = client;
    const { country, city, street, number } = address;
    return (
        <>
            <h2>{title}</h2>
            <ul className="list-group">
                <li className="list-group-item active">Name: {nameClient} {lastname}</li>
                <li className="list-group-item">Email: {email}</li>
                <li className="list-group-item">Address: {city}({country}), {street} # {number}</li>
            </ul>
        </>
    )
}