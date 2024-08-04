"use client"

import { useLoading } from '@/app/LoadingProvider';
import { signIn } from '@/redux/auth/Action';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
// import * as actions from '../../store/actions'




const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorPassWord, setErrorPassWord] = useState('');
    const [errorEmail, seterrorEmail] = useState('')
    const router = useRouter()
    const dispatch = useDispatch()
    const { setIsLoading } = useLoading()

    // const { jwt, msg } = useSelector(state => state.auth)


    const handleSubmit = async () => {
        let hasError = false;
        if (!email) {
            seterrorEmail('Vui lòng điền đầy đủ thông tin email')
            hasError = true
        } else seterrorEmail('')
        if (!password) {
            setErrorPassWord('Vui lòng điền đầy đủ thông tin mật khẩu')
            hasError = true;
        } else if (password.length < 8) {
            setErrorPassWord('Mật khẩu phải đủ tối thiểu 8 kí tự')
            hasError = true;
        } else setErrorPassWord('')
        if (!hasError) {
            const data = {
                email: email,
                password: password
            }

            dispatch(signIn({ data, router }))
            // setIsLoading(true)
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const goRegister = () => {
        setIsLoading(true)
        router.push('/auth/register')
    }

    return (
        <div className='w-[500px] bg-white shadow-lg mt-10 mb-8 p-7 px-5'>
            <h3 className='text-2xl font-semibold'>Đăng nhập</h3>
            <h6 className='pt-2'>Để đảm bảo an toàn, xin vui lòng đăng nhập để truy cập vào thông tin</h6>
            <div className='mt-7 flex flex-col gap-2'>
                <span>Nhập email</span>
                <input
                    type='email'
                    className="outline-none bg-[#e8f0fe] p-2 rounded-md w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errorEmail && <div className='text-red-500 text-sm'>{errorEmail}</div>}
            </div>
            <div className='mt-7 flex flex-col gap-2'>
                <span>Nhập mật khẩu</span>
                <input
                    type='password'
                    className="outline-none bg-[#e8f0fe] p-2 rounded-md w-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errorPassWord && <div className='text-red-500 text-sm'>{errorPassWord}</div>}
            </div>

            <button
                onClick={handleSubmit}
                className='bg-[#5392f9] text-white p-2 mt-7 shadow-md rounded-md w-full hover:bg-blue-300'
            >
                Đăng nhập
            </button>
            <div className='flex pt-3 items-center justify-between'>
                <span onClick={goRegister} className='hover:underline text-blue-500 cursor-pointer'>Tạo tài khoản</span>
                <span className='hover:underline text-blue-500 cursor-pointer'>Quên mật khẩu?</span>
            </div>
        </div>
    );
};

export default Login;
