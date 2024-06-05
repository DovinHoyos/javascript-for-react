import { findInvoiceById} from "./data/invoices";


findInvoiceById(3)
    .then(console.log)//(result)=>{console.log(result)}
    .catch(console.error);//(error)=>{console.error(error)}