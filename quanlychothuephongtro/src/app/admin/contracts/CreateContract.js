import DatePicked from '@/app/homepage/DatePicked';
import { Box, Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns'
import { getBookingByStatus } from '@/redux/booking/Actions';
import { createtContract } from '@/redux/contract/Action';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    maxHeight: '90vh',
    overflowY: 'auto',
};

export const CreateContract = () => {
    const dispatch = useDispatch();
    const { bookingsByStatus } = useSelector(state => state.booking)
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState(tomorrow);

    const [formValues, setFormValues] = useState({
        startDate,
        endDate,
        note: "",
        booking: {
            id: ""
        },
    });

    useEffect(() => {
        dispatch(getBookingByStatus("Đã duyệt"))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formValues.booking.id && formValues.note) {
            // Xử lý logic gửi form ở đây
            const formattedData = {
                ...formValues,
                startDate: format(startDate, "yyyy-MM-dd"),
                endDate: format(endDate, "yyyy-MM-dd"),
            };
            console.log(formattedData);
            dispatch(createtContract(formValues))
            // alert("Tạo hợp đồng thành công");
        } else {
            alert("Vui lòng điền đầy đủ thông tin");
        }
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        if (name === "bookingId") {
            setFormValues({ ...formValues, booking: { id: value } });
        } else {
            setFormValues({ ...formValues, [name]: value });
        }
    };

    const handleDateChange = (start, end) => {
        setFormValues({ ...formValues, startDate: start, endDate: end });
    };

    return (
        <Box sx={style}>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <DatePicked
                        startDate={formValues.startDate}
                        endDate={formValues.endDate}
                        setStartDate={(date) => handleDateChange(date, formValues.endDate)}
                        setEndDate={(date) => handleDateChange(formValues.startDate, date)}
                    />
                    <Grid item xs={12}>
                        <TextField
                            name='note'
                            label="Ghi chú"
                            variant='outlined'
                            fullWidth
                            value={formValues.note}
                            onChange={handleFormChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Booking</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={formValues.booking.id}
                                label="Booking"
                                onChange={handleFormChange}
                                name="bookingId"
                            >
                                {bookingsByStatus?.map((item, index) => (
                                    <MenuItem key={index} value={item?.id}>{item.id}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant='contained' fullWidth>Tạo hợp đồng</Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};
