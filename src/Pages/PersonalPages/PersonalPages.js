import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik'
import { Tabs, Rate, Progress } from 'antd';
import * as Yup from 'yup'

import PaginationPages from '../../Components/Pagination/PaginationPages';
import { getUserInfo, loadMyCourse, _userUpdate } from '../../Redux/action/UserAction';
import './PersonalPages.css'
import UserInfo from '../../Components/UserInfo/UserInfo';
import UserCourse from '../../Components/UserCourse/UserCourse';

const { TabPane } = Tabs;

export default function PersonalPages(props) {
    const dispatch = useDispatch()

    const { credentials, userPersonalInfo } = useSelector(state => state.UserReducer)

    const _handleUpdate = (values, formik) => {
        const action = _userUpdate(values, formik)
        dispatch(action)
    }

    // Formik form 
    const formik = useFormik({
        initialValues: {
            taiKhoan: credentials.taiKhoan,
            matKhau: "",
            hoTen: "",
            email: "",
            soDT: "",
            maLoaiNguoiDung: credentials.maLoaiNguoiDung,
            maNhom: "GP01",
        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string()
                .min(2, 'Tài khoản quá ít kí tự')
                .max(16, 'Tài khoản quá 16 kí tự')
                .required('Tài khoản không được để trống'),

            matKhau: Yup.string()
                .required('Tài khoản không được để trống')
                .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, 'Mật khẩu phải ít nhất 8 tự gồm chữ, số, và kí tự đặc biệt'),

            hoTen: Yup.string()
                .required('Tên không được để trống')
                .matches(/^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/, 'Chỉ nhập kí tự chữ'),

            email: Yup.string().email('Email không hợp lệ').required('Email không được để trống'),

            soDT: Yup.string()
                .required('Số điện thoại không được để trống')
                .matches(/([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/, 'Số điện thoại chưa đúng định đạng'),
        }),
        onSubmit: _handleUpdate
    })
   
    useEffect(() => {     
        dispatch(loadMyCourse(userPersonalInfo.chiTietKhoaHocGhiDanh))   
        dispatch(getUserInfo)
        
    }, [])

    return (
        <div>
            <div className='PersonalBody'>
                <div className='headerBackground'>
                    <div className='smallCard'>
                        <div className='row'>
                            <div className='col-9'>
                                <div className='smallCardLeft'>
                                    <img src={credentials.img} alt="" />
                                    <div>
                                        <div className='ml-3'>
                                            <div className='smallTitle'>
                                                <p className='smallCardTitle'>{credentials.taiKhoan}</p>
                                                <p className='subTextDetail'>{credentials.hoTen}</p>
                                                <p className='subTextDetail'>24 / 11 / 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-3'>

                            </div>
                        </div>
                    </div>

                </div>
                <div className='personalContent'>
                    <Tabs defaultActiveKey="1" >
                        <TabPane tab="Thông tin cá nhân" key="1">
                            <UserInfo />
                        </TabPane>
                        <TabPane tab="Khóa học" key="2">
                            <UserCourse />            
                            <div className='mt-3'>
                                <PaginationPages />
                            </div>

                        </TabPane>
                    </Tabs>
                </div>

                <div class="modal fade" id="myModal">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Chỉnh sửa thông tin cá nhân</h5>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>

                            <div class="modal-body modalUpdateBody">
                                <form action="#" onSubmit={formik.handleSubmit}>
                                    <input
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        type="text" placeholder="Tài khoản"
                                        name='taiKhoan'
                                        value={formik.values.taiKhoan}
                                        disabled />
                                    {formik.errors.taiKhoan && formik.touched.taiKhoan ? <div className='errorMessage'>{formik.errors.taiKhoan}</div> : <div className='message'></div>}

                                    <input
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        type="text" placeholder="Họ tên"
                                        name='hoTen'
                                        value={formik.values.hoTen} />
                                    {formik.errors.hoTen && formik.touched.hoTen ? <div className='errorMessage'>{formik.errors.hoTen}</div> : <div className='message'></div>}

                                    <input
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        type="password" placeholder="Mật khẩu"
                                        name='matKhau'
                                        value={formik.values.matKhau} />
                                    {formik.errors.matKhau && formik.touched.matKhau ? <div className='errorMessage' >{formik.errors.matKhau}</div> : <div className='message'></div>}

                                    <input
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        type="email" placeholder="Email"
                                        name="email"
                                        value={formik.values.email} />
                                    {formik.errors.email && formik.touched.email ? <div className='errorMessage'>{formik.errors.email}</div> : <div className='message'></div>}

                                    <input
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        type="phone" placeholder="Số điện thoại"
                                        name='soDT'
                                        value={formik.values.soDT} />
                                    {formik.errors.soDT && formik.touched.soDT ? <div className='errorMessage'>{formik.errors.soDT}</div> : <div className='message'></div>}

                                    <div class="modal-footer">
                                        <button type="submit" class="btn btn-success" >Hoàn thành</button>
                                        <button type="button" class="btn btn-danger" data-dismiss="modal">Đóng</button>
                                    </div>
                                </form>
                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
