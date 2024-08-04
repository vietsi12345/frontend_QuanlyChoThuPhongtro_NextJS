"use client"
import { Box, Button, Card, FormControl, InputLabel, MenuItem, Modal, Select, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { InvoiceTable } from './InvoiceTable';
import CreateInvoiceForm from './CreateInvoiceForm';
import { getAllContract, getContractById } from '@/redux/contract/Action';
import { getInvoiceOfContract } from '@/redux/Invoice/Action';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const InvoicesAdmin = () => {
    const dispatch = useDispatch();
    const [filterValue, setFilterValue] = useState();
    const { contracts, contract } = useSelector(state => state.contract);
    const { invoicesOfContract } = useSelector(state => state.invoice);

    const handleFilter = (e, value) => {
        setFilterValue(value);
    };

    const [contractId, setContractId] = useState('');
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (event) => {
        setContractId(event.target.value);
    };

    useEffect(() => {
        dispatch(getAllContract())
    }, [dispatch]);

    useEffect(() => {
        if (contractId) {
            dispatch(getInvoiceOfContract(contractId));
            dispatch(getContractById(contractId));
        }
    }, [contractId, dispatch]);

    return (
        <div className='px-2'>
            <Card className='p-5'>
                <Typography sx={{ paddingBottom: "1rem" }} variant='h5'>
                    Danh sách hợp đồng
                </Typography>
                <div>
                    <Box sx={{ minWidth: 120 }} className='flex justify-between'>
                        <FormControl className='w-1/3'>
                            <InputLabel id="contract-select-label">Hợp đồng</InputLabel>
                            <Select
                                labelId="contract-select-label"
                                id="contract-select"
                                value={contractId}
                                label="Hợp đồng"
                                onChange={handleChange}
                            >
                                {contracts.map((item) => (
                                    <MenuItem key={item.id} value={item.id}>{`Hợp đồng ${item.id}`}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <div className='font-semibold flex items-center'>
                            {`Trạng thái: ${contract?.status || 'Của hợp đồng'}`}
                        </div>
                        <Button onClick={handleOpen}><AddIcon sx={{ fontSize: 40 }} /></Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <CreateInvoiceForm contractId={contractId} />
                            </Box>
                        </Modal>
                    </Box>
                </div>
            </Card>

            <InvoiceTable invoices={invoicesOfContract} />
        </div>
    );
};
