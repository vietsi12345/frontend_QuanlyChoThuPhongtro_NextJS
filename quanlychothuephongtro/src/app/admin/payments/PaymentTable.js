"use client"
import { Avatar, Box, Card, CardHeader, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import DiscountIcon from '@mui/icons-material/Discount';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from '@/redux/auth/Action';
import { getAllPayment } from '@/redux/payment/Action';





export const PaymentTable = () => {
    const dispatch = useDispatch()
    const { payments } = useSelector(state => state.payment)

    useEffect(() => {
        dispatch(getAllPayment())
    }, []);

    return (
        <Box>
            <Card className='mt-1'>
                <CardHeader title={"Quản lí Payments"} sx={{ pt: 2, alignItems: "center" }} />

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">ID</TableCell>
                                <TableCell align="center">Trạng thái</TableCell>
                                <TableCell align="center">Ngày tạo</TableCell>
                                <TableCell align="center">Phương thức thanh toán</TableCell>
                                <TableCell align="center">Tổng giá</TableCell>
                                <TableCell align="center">ID hóa đơn</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {payments.map((item, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="center">{item?.id}</TableCell>
                                    <TableCell align="center">
                                        {item?.status}
                                    </TableCell>
                                    <TableCell align="center">
                                        {item?.paymentDate}
                                    </TableCell>
                                    <TableCell align="center">
                                        {item?.paymentMethod}
                                    </TableCell>
                                    <TableCell align="center">
                                        {item?.amount}
                                    </TableCell>
                                    <TableCell align="center">
                                        {item?.invoice.id}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </Box>
    )
}
