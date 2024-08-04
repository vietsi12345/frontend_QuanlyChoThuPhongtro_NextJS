import { createRoomType } from '@/redux/RoomType/Action';
import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export const CreateRoomType = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        name: "",
        description: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.name && formData.description) {
            console.log(formData)

            dispatch(createRoomType(formData))
        } else {
            alert("Vui lòng điền đẩy đủ thông tin!!!")
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData, [name]: value
        })
    }

    return (
        <div>
            <div className='p-5'>
                <h1 className='text-gray-400 text-center text-xl pb-10'>Tạo loại phòng mới</h1>
                <form className='space-y-5' onSubmit={handleSubmit}>
                    <TextField fullWidth onChange={handleInputChange} id="name" name="name" label="Tên loại phòng" variant='outlined' value={formData.name} />
                    <TextField fullWidth onChange={handleInputChange} id="description" name="description" label="Mô tả" variant='outlined' value={formData.description} />
                    <Button variant='contained' type='submit '> Tạo loại phòng mới</Button>
                </form>
            </div>
        </div>
    )
}
