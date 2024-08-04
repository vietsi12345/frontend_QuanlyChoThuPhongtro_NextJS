import { Box, Card, CardActions, CardHeader, FormControl, FormControlLabel, IconButton, Modal, Paper, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { CreateRoomType } from './CreateRoomType';


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

export const RoomTypeTable = ({ roomTypes }) => {
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
  }, [])


  return (
    <Box>
      <Card className='mt-1'>
        <CardHeader action={
          <IconButton onClick={handleOpen} aria-label="settings">
            <CreateIcon />
          </IconButton>
        } title={"Loại phòng"} sx={{ pt: 2, alignItems: "center" }} />

        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="left">Tên loại phòng</TableCell>
                <TableCell align="left">Mô tả</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {roomTypes.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">{item.id}</TableCell>
                  <TableCell align="left">{item.name}</TableCell>
                  <TableCell align="left">{item.description}</TableCell>
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
          <CreateRoomType />
        </Box>
      </Modal>
    </Box>
  )
}
