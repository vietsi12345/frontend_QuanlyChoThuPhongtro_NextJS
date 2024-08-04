import { updateHome } from '@/redux/Home/Action';
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

export const UpdateHome = ({ updateValues }) => {
    const [formValues, setFormValues] = useState({
        name: updateValues.name,
        description: updateValues.description,
        street: updateValues.address.street,
        ward: updateValues.address.ward,
        district: updateValues.address.district,
        city: updateValues.address.city,
        image: null, // sẽ cập nhật nếu có thay đổi
        imagePreview: `data:image/png;base64,${updateValues.image}` // base64 từ cơ sở dữ liệu
    });

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", formValues.name);
        formData.append("description", formValues.description);
        formData.append("street", formValues.street);
        formData.append("ward", formValues.ward);
        formData.append("district", formValues.district);
        formData.append("city", formValues.city);

        // Nếu có hình ảnh mới, thêm vào formData
        if (formValues.image) {
            formData.append("image", formValues.image);
        }

        // Xử lý logic gửi form ở đây
        console.log('data', formValues);
        console.log('form', formData);
        dispatch(updateHome(formData, updateValues.id))
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
                            name='name'
                            label="Tên nhà trọ"
                            variant='outlined'
                            fullWidth
                            value={formValues.name}
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
                        <TextField
                            name='street'
                            label="Đường"
                            variant='outlined'
                            fullWidth
                            value={formValues.street}
                            onChange={handleFormChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name='ward'
                            label="Phường"
                            variant='outlined'
                            fullWidth
                            value={formValues.ward}
                            onChange={handleFormChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name='district'
                            label="Quận"
                            variant='outlined'
                            fullWidth
                            value={formValues.district}
                            onChange={handleFormChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name='city'
                            label="Thành phố"
                            variant='outlined'
                            fullWidth
                            value={formValues.city}
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
                                    alt="Home Preview"
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
                        <Button type="submit" variant='contained' fullWidth>Sửa nhà trọ</Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};
