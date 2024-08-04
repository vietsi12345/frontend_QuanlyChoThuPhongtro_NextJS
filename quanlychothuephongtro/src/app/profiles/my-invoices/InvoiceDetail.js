"use client"

import { Avatar, Box, Button, Card, CardHeader, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import InfoIcon from '@mui/icons-material/Info';
import { useDispatch, useSelector } from 'react-redux';
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
    const { invoicesDetailOfInvoice } = useSelector(state => state.invoice)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getInvoiceDetailForInvoice(invoice.id));
    }, []);



    return (
        <Box>
            <Card className='mt-1'>
                <CardHeader title={"Danh sách hóa đơn"} sx={{ pt: 2, alignItems: "center" }} />

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
        </Box>
    )
}