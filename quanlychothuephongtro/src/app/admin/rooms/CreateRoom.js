import { createRoom } from '@/redux/room/Action';
import { Box, Grid, TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
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

export const CreateRoom = ({ houseId, roomTypes }) => {
    const [formValues, setFormValues] = useState({
        price: "",
        description: "",
        image: null,
        imagePreview: null,
        roomTypeId: ""
    });

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formValues.price && formValues.description && formValues.image && formValues.roomTypeId) {
            const formData = new FormData();
            formData.append("price", formValues.price);
            formData.append("description", formValues.description);
            formData.append("houseId", houseId);  // set houseId from props
            formData.append("roomTypeId", formValues.roomTypeId);
            formData.append("image", formValues.image);

            // Xử lý logic gửi form ở đây
            console.log('data', formValues);
            console.log('form', formData);
            dispatch(createRoom(formData))
        } else {
            alert("Vui lòng điền đầy đủ thông tin");
        }
    };

    const handleFormChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormValues({
            ...formValues,
            image: file,
            imagePreview: URL.createObjectURL(file)
        });
    };

    return (
        <Box sx={style}>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            name='price'
                            label="Giá"
                            variant='outlined'
                            fullWidth
                            value={formValues.price}
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
                        <FormControl fullWidth>
                            <InputLabel id="room-type-label">Loại phòng</InputLabel>
                            <Select
                                labelId="room-type-label"
                                id="room-type-select"
                                value={formValues.roomTypeId}
                                label="Loại phòng"
                                onChange={handleFormChange}
                                name="roomTypeId"
                            >
                                {roomTypes?.map((item) => (
                                    <MenuItem key={item.id} value={item.id}>
                                        {item.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                        {formValues.imagePreview && (
                            <Box mt={2} textAlign="center">
                                <Typography variant="subtitle1">Xem trước hình ảnh:</Typography>
                                <img
                                    src={formValues.imagePreview}
                                    alt="Room Preview"
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '300px',
                                        marginTop: '10px'
                                    }}
                                />
                            </Box>
                        )}
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant='contained' fullWidth>Tạo phòng</Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};
