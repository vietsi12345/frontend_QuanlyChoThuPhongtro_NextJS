"use client"
import { Box, Button, Card, FormControl, InputLabel, MenuItem, Modal, Select, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { InvoiceTable } from './InvoiceTable';
import { getAllContract, getContractById, getContractByUserId } from '@/redux/contract/Action';
import { getInvoiceOfContract } from '@/redux/Invoice/Action';


export const MyInvoicesHome = () => {
    const dispatch = useDispatch();
    const { contract, contractsForUser } = useSelector(state => state.contract);
    const { invoicesOfContract } = useSelector(state => state.invoice);
    const { user } = useSelector(state => state.auth);

    const [contractId, setContractId] = useState('');

    const handleChange = (event) => {
        setContractId(event.target.value);
    };

    useEffect(() => {
        dispatch(getContractByUserId(user?.id));
    }, [user]);

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
                                {contractsForUser.map((item) => (
                                    <MenuItem key={item.id} value={item.id}>{`Hợp đồng ${item.id}`}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <div className='font-semibold flex items-center'>
                            {`Trạng thái: ${contract?.status || 'Của hợp đồng'}`}
                        </div>
                    </Box>
                </div>
            </Card>

            <InvoiceTable invoices={invoicesOfContract} contract={contract} />
        </div>
    );
};
