import DatePicked from '@/app/homepage/DatePicked';
import { Box, Grid, TextField, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns'
import { updateContract } from '@/redux/contract/Action';


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

export const UpdateContract = ({ updateValues }) => {

    const [startDate, setStartDate] = useState(new Date(updateValues.startDate));
    const [endDate, setEndDate] = useState(new Date(updateValues.endDate));

    const [formValues, setFormValues] = useState({
        note: updateValues.note || "",
        startDate,
        endDate,
    });

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formattedData = {
            ...formValues,
            startDate: format(startDate, "yyyy-MM-dd"),
            endDate: format(endDate, "yyyy-MM-dd"),
        };
        console.log(formattedData);
        dispatch(updateContract(formattedData, updateValues.id))
    };

    const handleFormChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const handleDateChange = (start, end) => {
        setStartDate(start);
        setEndDate(end);
        setFormValues({ ...formValues, startDate: start, endDate: end });
    };

    return (
        <Box sx={style}>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <DatePicked
                        startDate={startDate}
                        endDate={endDate}
                        setStartDate={(date) => handleDateChange(date, endDate)}
                        setEndDate={(date) => handleDateChange(startDate, date)}
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
                        <Button type="submit" variant='contained' fullWidth>Sửa hợp đồng</Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};