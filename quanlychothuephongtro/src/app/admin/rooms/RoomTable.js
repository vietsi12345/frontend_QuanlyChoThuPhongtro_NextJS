import { Box, Button, Card, CardHeader, FormControl, FormControlLabel, Modal, Paper, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { formatMonneyVietNam } from '@/ultils/common/formatMonneyVietNam';
import { UpdateRoom } from './UpdateRoom';
import { useDispatch } from 'react-redux';
import { deleteRoom } from '@/redux/room/Action';

const orders = [{
  ID: "ID",
  isBooked: true,
  roomType: "type1",
  roomPrice: 10,
  photo: null
}, {
  ID: "ID",
  isBooked: false,
  roomType: "type2",
  roomPrice: 20,
  photo: null
}]

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export const RoomTable = ({ rooms }) => {
  const dispatch = useDispatch()
  const [openData, setOpenData] = React.useState({
    openStatus: false,
    deleteStatus: false,
    data: null
  });
  console.log(rooms)

  function handleOpen(row) {
    setOpenData({ openStatus: true, deleteStatus: false, data: row })
  }
  const handleClose = () => {
    setOpenData({ openStatus: false, deleteStatus: false, data: null })
  }

  function handleDelete(row) {
    dispatch(deleteRoom(row.id))
  }



  return (
    <Box>
      <Card className='mt-1'>
        <CardHeader title={"Phòng theo khách sạn"} sx={{ pt: 2, alignItems: "center" }} />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                {/* <TableCell align="right">Đã được đặt</TableCell> */}
                <TableCell align="center">Ảnh</TableCell>
                <TableCell align="center">Giá tiền</TableCell>
                <TableCell align="center">Loại phòng</TableCell>
                <TableCell align="center">Trạng thái</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rooms?.map((row, i) => (
                <TableRow
                  key={i}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">{row.id}</TableCell>
                  <TableCell align="center">
                    <img src={`data:image/png;base64,${row?.image}`}
                      className=' w-[80px] h-[60px] rounded-md object-cover'
                    />
                  </TableCell>
                  <TableCell align="center">{formatMonneyVietNam(row?.price)}</TableCell>
                  <TableCell align="center">{row.roomType?.name}</TableCell>
                  <TableCell align="center">{row.availability}</TableCell>
                  <TableCell align="center">
                    <Button onClick={() => handleOpen(row)}><EditIcon /></Button>
                    <Modal
                      open={openData.openStatus}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        {openData.openStatus && <UpdateRoom updateValues={openData.data} />}
                      </Box>
                    </Modal>

                    <Button onClick={() => handleDelete(row)}><DeleteIcon /></Button>
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
