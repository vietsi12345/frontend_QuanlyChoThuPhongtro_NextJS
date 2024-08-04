"use client"
import { Box, Button, Card, FormControl, FormControlLabel, InputLabel, MenuItem, Modal, Radio, RadioGroup, Select, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { getAllHome, getHomeById } from '@/redux/Home/Action';
import { RoomTable } from './RoomTable';
import { getRoomsByIdHouse } from '@/redux/room/Action';
import { RoomTypeTable } from './RoomTypeTable';
import { getAllRoomType } from '@/redux/RoomType/Action';
import { CreateRoom } from './CreateRoom';

const orderStatus = [
  { label: "Đang treo", value: "PENDING" },
  { label: "Hoàn thành", value: "COMPLETED" },
  { label: "Tất cả", value: "ALL" }
]

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


export const RoomAdmin = () => {
  const dispatch = useDispatch()
  const [filterValue, setFilterValue] = useState();
  const { allHome } = useSelector(state => state.home)
  const { rooms } = useSelector(state => state.room)
  const { roomTypes } = useSelector(state => state.roomType)


  const handleFilter = (e, value) => {
    setFilterValue(value)
  }

  const [idHomeSelect, setidHomeSelect] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    setidHomeSelect(event.target.value);
  };

  useEffect(() => {
    dispatch(getAllHome())
    dispatch(getAllRoomType())
  }, [])

  useEffect(() => {
    if (idHomeSelect) {
      dispatch(getRoomsByIdHouse(idHomeSelect))
    }
  }, [idHomeSelect])

  console.log(rooms)

  return (
    <div className='px-2'>
      <Card className='p-5'>

        <Typography sx={{ paddingBottom: "1rem" }} variant='h5'>
          Danh sách phòng
        </Typography>
        <div >
          <Box sx={{ minWidth: 120 }} className='flex justify-between'>
            <FormControl className='w-1/3'>
              <InputLabel id="demo-simple-select-label">Nhà trọ</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={idHomeSelect}
                label="idHomeSelect"
                onChange={handleChange}
              >
                {
                  allHome?.map((item, index) => <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>)
                }
              </Select>
            </FormControl>

            <Button onClick={handleOpen}><AddIcon sx={{ fontSize: 40 }} /></Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <CreateRoom houseId={idHomeSelect} roomTypes={roomTypes} />
              </Box>
            </Modal>
          </Box>
        </div>
      </Card>

      <div className='flex gap-5'>
        <div className='w-3/5'>
          <RoomTable rooms={rooms} />
        </div>
        <div className='w-2/5'>
          <RoomTypeTable roomTypes={roomTypes} />
        </div>
      </div>
    </div>
  )
}
