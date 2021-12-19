import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Progress } from 'antd';
import { getUserInfo } from '../../Redux/action/UserAction';

export default function UserInfo() {
    const dispatch = useDispatch()
    const { userPersonalInfo } = useSelector(state => state.UserReducer)
    
    useEffect(() => {
        
    }, [])
    return (
        <div className=''>
            <div className='infoContentTop'>
                <div className='row left'>
                    <div className='col-6'>
                        <div>
                            <p>Email:<span className='ml-2'>{userPersonalInfo.email}</span></p>
                            <p>Họ và tên: <span className='ml-2'>{userPersonalInfo.hoTen}</span></p>
                            <p>Số điện thoại: <span className='ml-2'>{userPersonalInfo.soDt ? userPersonalInfo.soDt : userPersonalInfo.soDT}</span></p>

                        </div>
                    </div>
                    <div className='col-6'>
                        <p>Tài khoản: <span className='ml-2'>{userPersonalInfo.taiKhoan}</span></p>
                        <p>Nhóm: <span className='ml-2'>{userPersonalInfo.maNhom}</span></p>
                        <p>Đối tượng: <span className='ml-2'>{userPersonalInfo.maLoaiNguoiDung === "HV" ? " Học viên" : " Giáo viên"}</span></p>
                    </div>
                    <div>
                        <button data-toggle="modal" data-target="#myModal" className='custom-btn btnGlobal btnInfo'>Cập nhật</button>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-8'>
                    <div className='infoContentBot'>
                        <div>
                            <h4 className='findTitle'>Kĩ năng của tôi</h4>

                            <div className='skillBody'>
                                <button className='customSkillBtn skillBtnHtml mr-2'>HTML</button>
                                <Progress percent={100} strokeColor='#F9CA9A' showInfo={false} />
                            </div>
                            <div className='skillBody'>
                                <button className='customSkillBtn  skillBtnCss mr-2'>CSS</button>
                                <Progress percent={30} strokeColor='#F8BEBB' showInfo={false} />
                            </div>
                            <div className='skillBody'>
                                <button className='customSkillBtn skillBtnJs mr-2'>JS</button>
                                <Progress percent={50} strokeColor='#F9D678' showInfo={false} />
                            </div>
                            <div className='skillBody'>
                                <button className='customSkillBtn mr-2 skillBtnReact'>React</button>
                                <Progress percent={80} strokeColor='#113D3C' showInfo={false} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='row infoContentBot'>
                        <div className='col-6'>
                            <div className='rightTitleContent'>
                                <div className='rightContent'>
                                    <i class="fas fa-user-clock mr-2"></i>
                                    <div>
                                        <h6>Giờ học</h6>
                                        <p>80 giờ</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='rightTitleContent'>
                                <div className='rightContent'>
                                    <i class="fas fa-user-clock mr-2"></i>
                                    <div>
                                        <h6>Buổi học</h6>
                                        <p>40</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='rightTitleContent'>
                                <div className='rightContent'>
                                    <i class="fas fa-user-clock mr-2"></i>
                                    <div>
                                        <h6>Bài tập</h6>
                                        <p>4</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='rightTitleContent'>
                                <div className='rightContent'>
                                    <i class="fas fa-user-clock mr-2"></i>
                                    <div>
                                        <h6>Điểm tổng</h6>
                                        <p>98</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='rightTitleContent'>
                                <div className='rightContent'>
                                    <i class="fas fa-user-clock mr-2"></i>
                                    <div>
                                        <h6>Cấp độ</h6>
                                        <p>Trung cấp</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='rightTitleContent'>
                                <div className='rightContent'>
                                    <i class="fas fa-user-clock mr-2"></i>
                                    <div>
                                        <h6>Học lực</h6>
                                        <p>Giỏi</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
