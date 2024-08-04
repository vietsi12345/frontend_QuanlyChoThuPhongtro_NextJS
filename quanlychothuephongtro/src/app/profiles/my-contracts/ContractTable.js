"use client"

import { Avatar, Box, Button, Card, CardHeader, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import InfoIcon from '@mui/icons-material/Info';
import DiscountIcon from '@mui/icons-material/Discount';
import { useDispatch, useSelector } from 'react-redux';
import { getAllContract, getContractByUserId, updateContractStatus } from '@/redux/contract/Action';
import ViewContractDetail from './ViewContractDetail';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: 767,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export const ContractTable = () => {
    const { contractsForUser } = useSelector(state => state.contract)
    const { user } = useSelector(state => state.auth)
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()
    // const [modalContent, setModalContent] = useState('')
    const [dataDetail, setDataDetail] = useState();

    const handleOpen = (data) => {
        // setModalContent(content);
        setDataDetail(data); // Truyền dữ liệu vào state updateValues
        setOpen(true);
        // console.log(updateValues)
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        dispatch(getContractByUserId(user?.id));
    }, [user]);

    const handleCancelContract = (id) => {
        dispatch(updateContractStatus(id))
    }
    return (
        <Box>
            <Card className='mt-1'>
                <CardHeader title={"Danh sách hợp đồng của tôi"} sx={{ pt: 2, alignItems: "center" }} />

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="center">Note</TableCell>
                                <TableCell align="center">Ngày bắt đầu</TableCell>
                                <TableCell align="center">Ngày kết thúc</TableCell>
                                {/* <TableCell align="center">Mô tả</TableCell> */}
                                <TableCell align="center">Trạng thái</TableCell>
                                <TableCell align="center">Mã đặt phòng</TableCell>
                                <TableCell align="center">Chi tiết</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {contractsForUser.map((item, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">{item?.id}</TableCell>
                                    <TableCell align="center">{item?.note}</TableCell>
                                    <TableCell align="center">{item?.startDate}</TableCell>
                                    <TableCell align="center">
                                        {item?.endDate}
                                    </TableCell>
                                    {/* <TableCell align="center">{'Mô tả'}</TableCell> */}
                                    <TableCell align="center">{item?.status}</TableCell>
                                    <TableCell align="center">
                                        {item?.booking.id}
                                    </TableCell>
                                    <TableCell align="center">
                                        <IconButton onClick={() => handleOpen(item)}><InfoIcon /></IconButton>
                                    </TableCell>
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
                    <ViewContractDetail item={dataDetail} />
                </Box>
            </Modal>
        </Box>
    )
}
