"use client"
import { getUserByJwt, updatPassword } from '@/redux/auth/Action';
import { Box, Modal } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    rounded: 6,
    p: 4,
};


const MyProfiles = () => {
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const jwt = typeof window !== 'undefined' ? localStorage.getItem("jwt") : null;
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("")
    const [phone, setPhone] = useState("")
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPw, setconfirmPw] = useState('')
    const [errorNewPassword, setErrorNewPassword] = useState('')
    const [errorOldPassword, setErrorOldPassword] = useState('')
    const [errorconfirmPw, setErrorconfirmPw] = useState('')
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    useEffect(() => {
        dispatch(getUserByJwt(jwt))
    }, [jwt])

    useEffect(() => {
        setName(user?.fullName)
        setEmail(user?.email)
        setRole(user?.role)
        setPhone(user?.phone)
    }, [user])
    const handleClose = () => {
        setOpen(false);
    };

    const handleUpdatePassword = () => {
        let hasErr = false
        if (newPassword.length < 8) {
            setErrorNewPassword('Mật khẩu mới phải dài hơn 8 kí tự!!')
            hasErr = true
        } else setErrorNewPassword('')
        if (oldPassword.length < 8) {
            setErrorOldPassword('Mật khẩu cũ phải dài hơn 8 kí tự!!')
            hasErr = true
        } else setErrorOldPassword('')
        if (confirmPw.length < 8) {
            setErrorconfirmPw('Mật khẩu phải dài hơn 8 kí tự!!')
            hasErr = true
        } else setErrorconfirmPw('')
        if (confirmPw !== newPassword) {
            setErrorconfirmPw('Xác thực mật khẩu không đúng!!')
            hasErr = true
        } else setErrorconfirmPw('')
        if (!hasErr) {
            console.log(oldPassword, newPassword, confirmPw)
            const data = {
                pwOld: oldPassword,
                pwNew: newPassword
            }
            dispatch(updatPassword(jwt, data))
        }
    }

    return (
        <div className='flex flex-col p-5 gap-5'>
            <h1 className='text-2xl font-bold'>Tài khoản</h1>
            <div className='border border-gray-200 rounded-xl bg-white px-5 pb-5 '>
                <div className='mt-5 flex flex-col gap-2'>
                    <span className='text-gray-500'>Tên đầy đủ</span>
                    <input
                        type='name'
                        className="outline-none  p-2 rounded-md w-full border border-gray-400"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {/* {errorEmail && <div className='text-red-500 text-sm'>{errorEmail}</div>} */}
                </div>
                <div className='mt-3 flex flex-col gap-2'>
                    <span className='text-gray-500'>Email</span>
                    <input
                        type='email'
                        className="outline-none  p-2 rounded-md w-full border border-gray-400"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {/* {errorEmail && <div className='text-red-500 text-sm'>{errorEmail}</div>} */}
                </div>
                <div className='mt-3 flex flex-col gap-2'>
                    <span className='text-gray-500'>Số điện thoại</span>
                    <input
                        type='phone'
                        className="outline-none  p-2 rounded-md w-full border border-gray-400"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    {/* {errorEmail && <div className='text-red-500 text-sm'>{errorEmail}</div>} */}
                </div>
                <div className='mt-3 flex flex-col gap-2'>
                    <span className='text-gray-500'>Quyền</span>
                    <input
                        type='role'
                        className="outline-none  p-2 rounded-md w-full border border-gray-400"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    />
                    {/* {errorEmail && <div className='text-red-500 text-sm'>{errorEmail}</div>} */}
                </div>
                <button className='bg-blue-600 rounded-md text-white font-semibold text-xl p-1 px-4 mt-3 hover:bg-blue-400'
                    onClick={handleOpen}
                >
                    Đổi mật khẩu
                </button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='mt-3 flex flex-col gap-2'>
                        <span className='text-gray-500'>Nhập mật khẩu cũ</span>
                        <input
                            type='password'
                            className="outline-none  p-2 rounded-md w-full border border-gray-400"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                        />
                        {errorOldPassword && <div className='text-red-500 text-sm'>{errorOldPassword}</div>}
                    </div>
                    <div className='mt-3 flex flex-col gap-2'>
                        <span className='text-gray-500'>Nhập mật khẩu mới</span>
                        <input
                            type='password'
                            className="outline-none  p-2 rounded-md w-full border border-gray-400"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        {errorNewPassword && <div className='text-red-500 text-sm'>{errorNewPassword}</div>}
                    </div>
                    <div className='mt-3 flex flex-col gap-2'>
                        <span className='text-gray-500'>Xác nhận mật khẩu mới</span>
                        <input
                            type='password'
                            className="outline-none  p-2 rounded-md w-full border border-gray-400"
                            value={confirmPw}
                            onChange={(e) => setconfirmPw(e.target.value)}
                        />
                        {errorconfirmPw && <div className='text-red-500 text-sm'>{errorconfirmPw}</div>}
                    </div>
                    <button
                        className='bg-blue-600 rounded-md text-white font-semibold text-xl p-1 px-4 mt-3 hover:bg-blue-400'
                        onClick={handleUpdatePassword}
                    >
                        Xác nhận
                    </button>
                </Box>
            </Modal>
        </div>
    )
}

export default MyProfiles
