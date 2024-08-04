import { updateHome } from '@/redux/Home/Action';
import { createService } from '@/redux/Service/Action';
import { Box, Grid, TextField, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

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

export const CreateService = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        unit: '',
        unitPrice: '',
        description: '',
    });

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formValues.name && formValues.unit && formValues.unitPrice && formValues.description) {
            // // Xử lý logic gửi form ở đây
            console.log('data', formValues);
            dispatch(createService(formValues))
        } else {
            alert("Vui lòng điền đầy đủ thông tin !! ")
        }
    };

    const handleFormChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };


    return (
        <Box sx={style}>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            name='name'
                            label="Tên dịch vụ"
                            variant='outlined'
                            fullWidth
                            value={formValues.name}
                            onChange={handleFormChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name='unitPrice'
                            label="Đơn giá"
                            variant='outlined'
                            fullWidth
                            value={formValues.unitPrice}
                            onChange={handleFormChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name='unit'
                            label="Đơn vị"
                            variant='outlined'
                            fullWidth
                            value={formValues.unit}
                            onChange={handleFormChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name='description'
                            label="Mô tả"
                            variant='outlined'
                            fullWidth
                            value={formValues.description}
                            onChange={handleFormChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant='contained' fullWidth>Thêm dịch vụ</Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};
