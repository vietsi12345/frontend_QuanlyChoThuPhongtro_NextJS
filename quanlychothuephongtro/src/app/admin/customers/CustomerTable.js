"use client"
import { Avatar, Box, Card, CardHeader, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import DiscountIcon from '@mui/icons-material/Discount';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from '@/redux/auth/Action';





export const CustomerTable = () => {
    const dispatch = useDispatch()
    const { users } = useSelector(state => state.auth)
    const jwt = typeof window !== 'undefined' ? localStorage.getItem("jwt") : null;

    useEffect(() => {
        dispatch(getAllUser(jwt))
    }, []);

    return (
        <Box>
            <Card className='mt-1'>
                <CardHeader title={"Quản lí khách hàng"} sx={{ pt: 2, alignItems: "center" }} />

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Họ và tên</TableCell>
                                <TableCell align="center">Email</TableCell>
                                <TableCell align="center">Số điện thoại</TableCell>
                                <TableCell align="center">Quyền</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((item, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="center">{item?.fullName}</TableCell>
                                    <TableCell align="center">
                                        {item?.email}
                                    </TableCell>
                                    <TableCell align="center">
                                        {item?.phone}
                                    </TableCell>
                                    <TableCell align="center">
                                        {item?.role}
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
