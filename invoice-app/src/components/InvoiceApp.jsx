import { getInvoice } from "../services/invoiceService";
import { ClientDetails } from "./ClientDetails";
import { InvoiceDetails } from "./InvoiceDetails";
import { ListItems } from "./ListItems";



export const InvoiceApp = () => {

    const { id, name, client, items } = getInvoice();

    return (
        <>
            <div className="container">
                <div className="card my-3">
                    <div className="card-header">Factura: </div>
                    <div className="card-body">
                        <InvoiceDetails id={id} name={name} />
                        <ClientDetails title="Datos del cliente: " client={client} />
                        <ListItems title="Productos:" items={items} />
                    </div>
                </div>
            </div>
        </>
    );
} 