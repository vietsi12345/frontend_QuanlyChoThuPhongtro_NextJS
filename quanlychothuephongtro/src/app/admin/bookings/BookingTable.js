"use client"
import { Box, Button, Card, CardHeader, Menu, MenuItem, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatMonneyVietNam } from '../../../ultils/common/formatMonneyVietNam';
import { getALLBooking, updateBookingStatus } from '@/redux/booking/Actions';
import BookingDetailAdmin from './BookingDetaiAdmin';
// import OrderDetailAdmin from './OrderDetailAdmin';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth: 750,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const bookingStatus = [
  { label: "Đã hủy", value: "Đã hủy" },
  { label: "Đã duyệt", value: "Đã duyệt" },
  { label: "Đang chờ duyệt", value: "Đang chờ duyệt" },
];

export const BookingTable = () => {
  const dispatch = useDispatch();
  const { allBooking } = useSelector(state => state.booking);
  const [order, setOrder] = useState({});

  const [open, setOpen] = useState(false);
  const handleOpen = (order) => {
    setOrder(order);
    setOpen(true);
  };
  const handleClose = () => {
    setOrder({});
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getALLBooking());
  }, [dispatch]);

  const [anchorEl, setAnchorEl] = useState(null);
  const [currentOrderId, setCurrentOrderId] = useState(null);

  const handleClick = (event, orderId) => {
    setAnchorEl(event.currentTarget);
    setCurrentOrderId(orderId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentOrderId(null);
  };

  const jwt = typeof window !== 'undefined' ? localStorage.getItem("jwt") : null;

  const handleUpdatebookingStatus = (id, bookingStatus) => {
    console.log(id)
    const status = {
      status: bookingStatus
    }
    dispatch(updateBookingStatus(status, id))
    console.log(bookingStatus);
    handleMenuClose();
  };
  return (
    <Box sx={{ padding: 2 }}>
      <Card className='mt-1'>
        <CardHeader title={"Tất cả đơn đặt phòng"} sx={{ pt: 2, alignItems: "center" }} />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ minWidth: 50, padding: '8px 16px' }}>ID</TableCell>
                <TableCell align="center" sx={{ minWidth: 120, padding: '8px 16px' }}>Ngày bắt đầu</TableCell>
                <TableCell align="center" sx={{ minWidth: 120, padding: '8px 16px' }}>Ngày kết thúc</TableCell>
                <TableCell align="center" sx={{ minWidth: 100, padding: '8px 16px' }}>Người lớn</TableCell>
                <TableCell align="center" sx={{ minWidth: 120, padding: '8px 16px' }}>Trẻ em</TableCell>
                <TableCell align="center" sx={{ minWidth: 100, padding: '8px 16px' }}>Mã xác nhận</TableCell>
                <TableCell align="center" sx={{ minWidth: 100, padding: '8px 16px' }}>Trạng thái</TableCell>
                <TableCell align="center" sx={{ minWidth: 100, padding: '8px 16px' }}>ID khách hàng</TableCell>
                <TableCell align="center" sx={{ minWidth: 100, padding: '8px 16px' }}>ID phòng</TableCell>
                <TableCell align="center" sx={{ minWidth: 80, padding: '8px 16px' }}></TableCell>
                <TableCell align="center" sx={{ minWidth: 80, padding: '8px 16px' }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allBooking?.map((item, index) => (
                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row" align="center">{item.id}</TableCell>
                  <TableCell align="center">{item.startDate}</TableCell>
                  <TableCell align="center">{item.endDate}</TableCell>
                  <TableCell align="center">{item.adults}</TableCell>
                  <TableCell align="center">{item.children}</TableCell>
                  <TableCell align="center">{item?.confirmationCode}</TableCell>
                  <TableCell align="center">{item.status}</TableCell>
                  <TableCell align="center">{item.userId}</TableCell>
                  <TableCell align="center">{item.roomId}</TableCell>
                  <TableCell align="center">
                    <Button
                      id="basic-button"
                      aria-controls={anchorEl && currentOrderId === item.id ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={anchorEl && currentOrderId === item.id ? 'true' : undefined}
                      onClick={(event) => handleClick(event, item.id)}
                    >
                      Cập nhật
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl && currentOrderId === item.id)}
                      onClose={handleMenuClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      {bookingStatus.map((status, index) => (
                        <MenuItem key={index} onClick={() => handleUpdatebookingStatus(item.id, status.value)}>{status.label}</MenuItem>
                      ))}
                    </Menu>
                  </TableCell>
                  <TableCell align="center">
                    <Button variant='outlined' onClick={(() => handleOpen(item))}>Chi tiết</Button>
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
          <BookingDetailAdmin item={order} />
        </Box>
      </Modal>
    </Box>
  );
};
