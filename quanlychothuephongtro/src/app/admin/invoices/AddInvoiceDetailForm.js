import { createInvoiceDetail } from "@/redux/Invoice/Action";
import { getAllService } from "@/redux/Service/Action";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const AddInvoiceDetailForm = ({ invoiceId, contractId }) => {
    const dispatch = useDispatch()
    const { services } = useSelector(state => state.service)
    const [invoice, setInvoice] = useState({
        invoiceId: invoiceId,
        serviceId: '',
        quantity: '',
    });
    console.log(contractId)
    const handleChange = (e) => {
        setInvoice({
            ...invoice,
            [e.target.name]: e.target.value
        });
    }
    console.log(services)
    useEffect(() => {
        dispatch(getAllService())
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createInvoiceDetail(invoice, contractId))
        console.log(invoice)
    }

    return (
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Dịch vụ</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={invoice.serviceId}
                    label="service"
                    onChange={handleChange}
                    name="serviceId"
                >
                    {services?.map((item, index) => (
                        <MenuItem key={index} value={item?.id}>{item.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TextField name="quantity" label="Quantity" value={invoice.quantity} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
            <Button type="submit" variant="contained">Add Invoice Details</Button>
        </form>
    );
}
