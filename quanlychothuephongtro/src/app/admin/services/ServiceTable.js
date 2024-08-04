"use client"

import { Avatar, Box, Card, CardHeader, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import DiscountIcon from '@mui/icons-material/Discount';
import { useDispatch, useSelector } from 'react-redux';
import { formatMonneyVietNam } from '@/ultils/common/formatMonneyVietNam';
import { deleteService, getAllService } from '@/redux/Service/Action';
import { UpdateService } from './UpdateService';
import { CreateService } from './CreateService';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export const ServiceTable = () => {
    const { services } = useSelector(state => state.service)
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()
    const [modalContent, setModalContent] = useState('')
    const [updateValues, setUpdateValues] = useState({
        name: '',
        unit: '',
        unitPrice: '',
        description: '',
    });

    const handleOpen = (content, data) => {
        setModalContent(content);
        setUpdateValues(data); // Truyền dữ liệu vào state updateValues
        setOpen(true);
        // console.log(updateValues)
    };

    const handleClose = () => {
        setModalContent('');
        setOpen(false);
    };

    const handleDeleteService = (serviceId) => {
        dispatch(deleteService(serviceId))
    }

    useEffect(() => {
        dispatch(getAllService());
    }, []);

    return (
        <Box>
            <Card className='mt-1'>
                <CardHeader action={
                    <IconButton onClick={() => handleOpen('create')} aria-label="settings">
                        <CreateIcon />
                    </IconButton>
                } title={"Danh sách dịch vụ"} sx={{ pt: 2, alignItems: "center" }} />

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="center">Tên dịch vụ</TableCell>
                                <TableCell align="center">Đơn giá </TableCell>
                                <TableCell align="center">Đơn vị</TableCell>
                                <TableCell align="center">Mô tả</TableCell>
                                <TableCell align="center">Xóa</TableCell>
                                <TableCell align="center">Sửa</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {services.map((item, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">{item?.id}</TableCell>
                                    <TableCell align="center">{item?.name}</TableCell>
                                    <TableCell align="center">
                                        {formatMonneyVietNam(item?.unitPrice)}
                                    </TableCell>
                                    <TableCell align="center">{item?.unit}</TableCell>
                                    <TableCell align="center">{item?.description}</TableCell>
                                    <TableCell align="center">
                                        <IconButton onClick={() => handleDeleteService(item?.id)}><DeleteIcon /></IconButton>
                                    </TableCell>
                                    <TableCell align="center">
                                        <IconButton onClick={() => handleOpen('update', item)}>
                                            <DiscountIcon />
                                        </IconButton>
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
                    {modalContent === 'create' ? <CreateService /> : <UpdateService updateValues={updateValues} />}
                </Box>
            </Modal>
        </Box>
    )
}
