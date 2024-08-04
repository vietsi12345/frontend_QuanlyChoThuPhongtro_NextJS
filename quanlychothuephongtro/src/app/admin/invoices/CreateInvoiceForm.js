import React, { useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { createInvoice } from '@/redux/Invoice/Action';

function CreateInvoiceForm({ contractId }) {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        billMonth: "",
        dueDate: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.billMonth && formData.dueDate && contractId) {
            const formDataSend = {
                ...formData,
                contractId: contractId
            };
            console.log(formDataSend)
            dispatch(createInvoice(formDataSend));
        } else {
            alert("Vui lòng điền đầy đủ thông tin");
        }
    }

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <div className='p-5'>
                <h1 className='text-gray-400 text-center text-xl pb-10'>Tạo Hóa Đơn</h1>
                <form className='space-y-5' onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        onChange={handleFormChange}
                        id="billMonth"
                        name="billMonth"
                        label="Tháng hóa đơn"
                        variant='outlined'
                        value={formData.billMonth}
                        type="month"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        fullWidth
                        onChange={handleFormChange}
                        id="dueDate"
                        name="dueDate"
                        label="Ngày đến hạn"
                        variant='outlined'
                        value={formData.dueDate}
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <Button variant='contained' type='submit'>Tạo hóa đơn</Button>
                </form>
            </div>
        </div>
    );
}

export default CreateInvoiceForm;
