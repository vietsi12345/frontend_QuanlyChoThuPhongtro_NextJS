"use client"

import { Avatar, Box, Button, Card, CardHeader, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import InfoIcon from '@mui/icons-material/Info';
import { useDispatch, useSelector } from 'react-redux';
import { AddInvoiceDetailForm } from './AddInvoiceDetailForm';
import { getInvoiceDetailForInvoice } from '@/redux/Invoice/Action';
import { formatMonneyVietNam } from '@/ultils/common/formatMonneyVietNam';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '20%',
    maxWidth: 767,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export const InvoiceDetail = ({ invoice }) => {
    const { invoicesDetailOfInvoice } = useSelector(state => state.invoice) // Change this line to fetch invoices instead of contracts
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        dispatch(getInvoiceDetailForInvoice(invoice.id));
    }, []);

    const handleAddInvoice = () => {
        // dispatch(addInvoice(updateValues)); // Add this line to dispatch the addInvoice action
        handleClose();
    }

    return (
        <Box>
            <Card className='mt-1'>
                <CardHeader action={
                    <IconButton onClick={handleOpen} aria-label="settings">
                        <CreateIcon />
                    </IconButton>
                } title={"Danh sách hóa đơn"} sx={{ pt: 2, alignItems: "center" }} />

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="center">Hóa đơn ID</TableCell>
                                <TableCell align="center">Dịch vụ </TableCell>
                                <TableCell align="center">Số lượng sử dụng</TableCell>
                                <TableCell align="center">Đơn giá</TableCell>
                                <TableCell align="center">Tổng tiền</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {invoicesDetailOfInvoice.map((item, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">{item.id}</TableCell>
                                    <TableCell align="center">{item.invoiceId}</TableCell>
                                    <TableCell align="center">{item.serviceName}</TableCell>
                                    <TableCell align="center">{item.quantity}</TableCell>
                                    <TableCell align="center">{formatMonneyVietNam(item.unitPrice)}</TableCell>
                                    <TableCell align="center">{formatMonneyVietNam(item.amount)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <AddInvoiceDetailForm invoiceId={invoice.id} contractId={invoice.contractId} />
                </Box>
            </Modal>
        </Box>
    )
}