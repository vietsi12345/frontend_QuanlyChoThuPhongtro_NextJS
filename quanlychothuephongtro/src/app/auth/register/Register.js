"use client"

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation';
import { signUp } from '@/redux/auth/Action';



const Register = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const dispath = useDispatch()

    const router = useRouter()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [testPassWord, setTestPassWord] = useState('')
    const [errorPassWord, setErrorPassWord] = useState('');
    const [errorEmail, seterrorEmail] = useState('')
    const [errorName, setErrorName] = useState('')
    const [errorPhone, setErrorPhone] = useState("")
    const [errorTestPassword, setErrorTestPassword] = useState('')

    const handleSubmit = () => {
        let hasError = false;

        if (!name) {
            setErrorName('Vui lòng điền đầy đủ thông tin tên')
            hasError = true;
        } else setErrorName('')

        if (!email) {
            seterrorEmail('Vui lòng điền đầy đủ thông tin email')
            hasError = true;
        } else seterrorEmail('')

        if (!phone) {
            setErrorPhone('Vui lòng điền đầy đủ thông tin phone')
            hasError = true;
        } else setErrorPhone('')

        if (!password) {
            setErrorPassWord('Vui lòng điền đầy đủ thông tin mật khẩu')
            hasError = true;
        } else if (password.length < 8) {
            setErrorPassWord('Mật khẩu phải đủ tối thiểu 8 kí tự')
            hasError = true;
        } else setErrorPassWord('')

        if (!testPassWord) {
            setErrorTestPassword('Vui lòng điền đầy đủ thông tin mật khẩu')
            hasError = true;
        } else if (testPassWord.length < 8) {
            setErrorTestPassword('Mật khẩu phải đủ tối thiểu 8 kí tự')
            hasError = true;
        } else if (password !== testPassWord) {
            setErrorTestPassword('Mật khẩu nhập lại không khớp')
            hasError = true;
        } else setErrorTestPassword('')

        if (!hasError) {
            const data = {
                fullName: name,
                email: email,
                phone: phone,
                password: password,
                role: "ROLE_CUSTOMER"
            }
            console.log(data)
            dispath(signUp({ data, router }))
        }
    };
    const goLogin = () => {
        router.push('/auth/login');
    };


    return (
        <div className='w-[500px] bg-white shadow-lg mt-10 mb-8 p-7 px-5'>
            <h3 className='text-2xl font-semibold'>Đăng ký</h3>
            <h6 className='pt-2'>Để đăng nhập vào hệ thống, xin vui lòng đăng ký nếu chưa có tài khoản</h6>
            <div className='mt-7 flex flex-col gap-2'>
                <span>Họ và tên</span>
                <input
                    type='name'
                    className="outline-none bg-[#e8f0fe] p-2 rounded-md w-full"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {errorName && <div className='text-red-500 text-sm'>{errorName}</div>}
            </div>
            <div className='mt-7 flex flex-col gap-2'>
                <span>Email</span>
                <input
                    type='email'
                    className="outline-none bg-[#e8f0fe] p-2 rounded-md w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errorEmail && <div className='text-red-500 text-sm'>{errorEmail}</div>}
            </div>
            <div className='mt-7 flex flex-col gap-2'>
                <span>Số điện thoại</span>
                <input
                    type='phone'
                    className="outline-none bg-[#e8f0fe] p-2 rounded-md w-full"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                {errorPhone && <div className='text-red-500 text-sm'>{errorPhone}</div>}
            </div>
            <div className='mt-7 flex flex-col gap-2'>
                <span>Mật khẩu</span>
                <input
                    type='password'
                    className="outline-none bg-[#e8f0fe] p-2 rounded-md w-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errorPassWord && <div className='text-red-500 text-sm'>{errorPassWord}</div>}
            </div>
            <div className='mt-7 flex flex-col gap-2'>
                <span>Xác nhận mật khẩu</span>
                <input
                    type='password'
                    className="outline-none bg-[#e8f0fe] p-2 rounded-md w-full"
                    value={testPassWord}
                    onChange={(e) => setTestPassWord(e.target.value)}
                />
                {errorTestPassword && <div className='text-red-500 text-sm'>{errorTestPassword}</div>}
            </div>
            <button
                onClick={handleSubmit}
                className='bg-[#5392f9] text-white p-2 mt-7 shadow-md rounded-md w-full hover:bg-blue-300'
            >
                Đăng ký
            </button>
            <button
                onClick={goLogin}
                className='bg-[#5392f9] text-white p-2 mt-7 shadow-md rounded-md w-full hover:bg-blue-300 mb-4'
            >
                Bạn đã có tài khoản? Đăng nhập
            </button>
            <div className='flex justify-center'>
                <span className='text-black cursor-pointer text-center'>
                    Khi đăng nhập, tôi đồng ý với các Điều khoản sử dụng và Chính sách bảo mật của hệ thống.
                </span>
            </div>
        </div>
    );
};

export default Register
