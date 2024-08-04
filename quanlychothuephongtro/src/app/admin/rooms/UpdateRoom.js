import { updateRoom } from '@/redux/room/Action';
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

export const UpdateRoom = ({ updateValues }) => {
    const [formValues, setFormValues] = useState({
        price: updateValues.price,
        description: updateValues.description,
        image: null, // sẽ cập nhật nếu có thay đổi
        imagePreview: `data:image/png;base64,${updateValues.image}` // base64 từ cơ sở dữ liệu
    });

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("price", formValues.price);
        formData.append("description", formValues.description);

        // Nếu có hình ảnh mới, thêm vào formData
        if (formValues.image) {
            formData.append("image", formValues.image);
        }

        // Xử lý logic gửi form ở đây
        console.log('data', formValues);
        console.log('form', formData);
        dispatch(updateRoom(formData, updateValues.id))
    };

    const handleFormChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setFormValues({
                ...formValues,
                image: file,
                imagePreview: reader.result // cập nhật xem trước hình ảnh mới
            });
        };
        reader.readAsDataURL(file);
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
                        <Button type="submit" variant='contained' fullWidth>Cập nhật phòng</Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};
