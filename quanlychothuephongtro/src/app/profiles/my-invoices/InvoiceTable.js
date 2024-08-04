import { Box, Button, Card, CardHeader, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import PaymentIcon from '@mui/icons-material/Payment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { formatMonneyVietNam } from '../../../ultils/common/formatMonneyVietNam';
import { InvoiceDetail } from './InvoiceDetail';
import { useDispatch, useSelector } from 'react-redux';
import { updateDueDateInvoice } from '@/redux/Invoice/Action';
import { useRouter, useSearchParams } from 'next/navigation';
import { useLoading } from '@/app/LoadingProvider';
import { getContractById } from '@/redux/contract/Action';

export const InvoiceTable = ({ invoices, contract }) => {
    console.log(invoices)
    const dispatch = useDispatch()
    const router = useRouter()
    const { setIsLoading } = useLoading()

    const [openData, setOpenData] = useState({
        openStatus: false,
        viewStatus: false,
        data: null
    });
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: openData.viewStatus ? '70%' : 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 2,
    };
    const [dueDate, setDueDate] = useState('');

    function handlePayment(row) {
        setOpenData({ openStatus: true, viewStatus: false, data: row });
        setDueDate(row.dueDate);
        const dataPayment = new URLSearchParams({
            roomPrice: row.roomPrice,
            totalService: row.totalService,
            totalAmount: row.totalAmount,
            billMonth: row.billMonth,
            dueDate: row.dueDate,
            roomId: contract.booking.roomId,
            invoiceId: row.id
        })
        if (row.status === "Đã thanh toán") {
            alert("Hóa đơn này đã thanh toán rôì !!")
        } else {
            setIsLoading(true)
            router.push(`/payment/v1?${dataPayment.toString()}`)
        }
    }

    function handleView(row) {
        setOpenData({ openStatus: false, viewStatus: true, data: row });
    }

    const handleClose = () => {
        setOpenData({ openStatus: false, viewStatus: false, data: null });
    }



    return (
        <Box>
            <Card className='mt-3 mb-3' sx={{ padding: 3 }}>
                <CardHeader title={"Hóa đơn từng tháng theo hợp đồng"} sx={{ pt: 2, alignItems: "center" }} />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="center">Hợp đồng</TableCell>
                                <TableCell align="center">Tháng hóa đơn</TableCell>
                                <TableCell align="center">Giá phòng</TableCell>
                                <TableCell align="center">Dịch vụ</TableCell>
                                <TableCell align="center">Tổng số tiền</TableCell>
                                <TableCell align="center">Ngày tạo</TableCell>
                                <TableCell align="center">Ngày đến hạn</TableCell>
                                <TableCell align="center">Trạng thái</TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {invoices.map((row, i) => (
                                <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">{row?.id}</TableCell>
                                    <TableCell align="center">{row?.contractId}</TableCell>
                                    <TableCell align="center">{row?.billMonth}</TableCell>
                                    <TableCell align="center">{formatMonneyVietNam(row?.roomPrice)}</TableCell>
                                    <TableCell align="center">{formatMonneyVietNam(row?.totalService)}</TableCell>
                                    <TableCell align="center">{formatMonneyVietNam(row?.totalAmount)}</TableCell>
                                    <TableCell align="center">{row?.createdAt}</TableCell>
                                    <TableCell align="center">{row?.dueDate}</TableCell>
                                    <TableCell align="center">{row?.status}</TableCell>
                                    <TableCell align="center">
                                        <Button onClick={() => handlePayment(row)}><PaymentIcon /></Button>
                                        <Button onClick={() => handleView(row)}><VisibilityIcon /></Button>
                                        <Modal
                                            open={openData.viewStatus}
                                            onClose={handleClose}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                        >
                                            <Box sx={style}>
                                                {openData.viewStatus && <InvoiceDetail invoice={openData.data} />}
                                            </Box>
                                        </Modal>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </Box>
    );
}
