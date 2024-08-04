"use client"

import { Avatar, Box, Card, CardHeader, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import DiscountIcon from '@mui/icons-material/Discount';
import { useDispatch, useSelector } from 'react-redux';
import { deleteHome, getAllHome } from '@/redux/Home/Action';
import { formatMonneyVietNam } from '@/ultils/common/formatMonneyVietNam';
import { CreateHome } from './CreateHome';
import { UpdateHome } from './UpdateHome';

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

export const AdminHomeTable = () => {
    const { allHome } = useSelector(state => state.home)
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()
    const [modalContent, setModalContent] = useState('')
    const [updateValues, setUpdateValues] = useState({
        name: '',
        city: '',
        address: '',
        description: '',
        price: '',
        photo: null
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

    const handleDeleteHotel = (idHotel) => {
        dispatch(deleteHome(idHotel))
    }

    useEffect(() => {
        dispatch(getAllHome());
    }, []);

    return (
        <Box>
            <Card className='mt-1'>
                <CardHeader action={
                    <IconButton onClick={() => handleOpen('create')} aria-label="settings">
                        <CreateIcon />
                    </IconButton>
                } title={"Danh sách nhà trọ"} sx={{ pt: 2, alignItems: "center" }} />

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="center">Ảnh</TableCell>
                                <TableCell align="center">Tên nhà trọ</TableCell>
                                <TableCell align="center">Địa chỉ</TableCell>
                                {/* <TableCell align="center">Mô tả</TableCell> */}
                                <TableCell align="center">Số phòng</TableCell>
                                <TableCell align="center">Xoá</TableCell>
                                <TableCell align="center">Sửa</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {allHome.map((item, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">{item?.id}</TableCell>
                                    <TableCell align="center">
                                        <img src={`data:image/png;base64,${item?.image}`}
                                            className='w-[80px] h-[60px] rounded-md object-cover'
                                        />
                                    </TableCell>
                                    <TableCell align="center">{item?.name}</TableCell>
                                    <TableCell align="center">
                                        {`${item?.address.street}, ${item?.address.ward}, ${item?.address.district}, ${item?.address.city}`}
                                    </TableCell>
                                    <TableCell align="center">{item?.rooms?.length || 0}</TableCell>
                                    <TableCell align="center">
                                        <IconButton onClick={() => handleDeleteHotel(item?.id)}><DeleteIcon /></IconButton>
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
                    {modalContent === 'create' ? <CreateHome /> : <UpdateHome updateValues={updateValues} />}
                </Box>
            </Modal>
        </Box>
    )
}
