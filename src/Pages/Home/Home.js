import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { Rate } from 'antd';
import CountupNumber from '../../Components/CountUp/CountupNumber';
import SliderPage from '../../Components/SliderPages/SliderPage';
import { getListCourse } from '../../Redux/action/CourseAction';

import 'antd/dist/antd.css';
import './Home.css'

export default function Home() {
    const {coursesList} = useSelector(state => state.CourseReducer)
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getListCourse)
    }, [])

const RenderListCourse = () => {
    return coursesList.map((course, index) => {
        if (index <= 7) {
            return (
                <NavLink to={`/chitiet/${course.maKhoaHoc}`} key={index} className="col-3 mt-4">
                    <div className="cardHome">
                        <div className='cardStiker'>
                            <i className="fas fa-award mr-2"></i>
                            <span>Bán chạy</span>
                        </div>
                        <img className="card-img-top imgCard" src={require("../../Assets/Img/imgCard/imgCardCourse.jpg").default} alt='imgCard' />
                        <div className="cardHomeBody">
                            <btn className='btnCard'>{course.danhMucKhoaHoc.maDanhMucKhoahoc}</btn>
                            <h4 className="textCard mt-2">{course.tenKhoaHoc}</h4>
                            <div className='d-flex'>
                                <span><Rate disabled allowHalf defaultValue={4.5} /></span>

                            </div>
                            <div className='divGlobal line'>
                                <span className='textCardTitle'><i class="far fa-clock iconOclock"></i> 8 giờ 21 phút</span>
                                <span className='textCardTitle'><i class="far fa-calendar iconCalendar"></i> 23 giờ</span>
                                <span className='textCardTitle'><i class="fas fa-signal iconLevel "></i> All level</span>
                            </div>
                            <div className='divGlobal'>
                                <div>
                                    <img src={require("../../Assets/Img/imgCard/personcard.jpg").default} className='imgCardFooter' alt="" />
                                    <span className='textCardTitle ml-2'>{course.nguoiTao.hoTen}</span>
                                </div>
                                <div className=''>
                                    <span className='textCardTitle' style={{ color: 'rgb(234 76 137)' }} >$119.55</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </NavLink>
            )
        }
    })
}
return (
    <div>
        <div className='homeBody'>
            <div className='homePagesSlider'>
                <div className='row'>
                    <div className='col-6 sliderLeft'>
                        <div className=''>
                            <div>
                                <h2 className='textSlider'>Học thoải mái,</h2>
                                <h2 className='textSlider'>học mọi lúc,</h2>
                                <h2 className='textSlider'>học mọi nơi</h2>
                                <p className='mt-4 mb-3 textDiscrips'>Nơi ươm mầm tài năng</p>
                                <p className='textDiscrips'>Dù bạn là ai, ở bất cứ đâu hãy đến với chúng tôi</p>
                            </div>

                            <div >
                                <button className='custom-btn btnGlobal p-3 mt-3'>Bắt đầu nào</button>

                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='sliderRight'>
                            <img className='anime1' src="./img/imgSlider/anime1.svg" alt="" />
                            <img className='anime4' src="./img/imgSlider/anime4.svg" alt="" />
                            <img className='anime3' src="./img/imgSlider/anime3.svg" alt="" />
                        </div>
                    </div>

                </div>
            </div>
            {/* New course */}
            <div className='homeTitle'>
                <h6 className='subTextSlider  text-center'>Khóa học</h6>
                <h3 className='textSlider text-center'>Khóa học mới nhất</h3>
                <div className='row'>
                    {RenderListCourse()}
                </div>
            </div>
            {/* Slider */}
            <div className='SliderBody text-center'>
                <h6 className='subTextSlider'>Đánh giá</h6>
                <h3 className='textSlider'>Cảm nhận học viên</h3>
                <SliderPage />
            </div>
            {/* Number run */}
            <div className='boxNumberBody'>
                <div className='boxNumber' >
                    <div><img src={require("../../Assets/Img/imgIcon/003-students.png").default} className='imgIcon' alt="" /></div>
                    <div className='textNumber'>
                        <CountupNumber end='9000' />
                    </div>
                    <p className='textNumberTitle'>Học viên</p>
                </div>
                <div className='boxNumber'>
                    <div><img src={require("../../Assets/Img/imgIcon/001-timetable.png").default} className='imgIcon' alt="" /></div>
                    <div className='textNumber'>
                        <CountupNumber end='1000' />
                    </div>
                    <p className='textNumberTitle'>Khóa học</p>
                </div>
                <div className='boxNumber'>
                    <div><img src={require("../../Assets/Img/imgIcon/002-hourglass.png").default} className='imgIcon' alt="" /></div>
                    <div className='textNumber'>
                        <CountupNumber end='33200' />
                    </div>
                    <p className='textNumberTitle'>Giờ học</p>
                </div>
                <div className='boxNumber'>
                    <div><img src={require("../../Assets/Img/imgIcon/004-teacher.png").default} className='imgIcon' alt="" /></div>
                    <div className='textNumber'>
                        <CountupNumber end='400' />
                    </div>
                    <p className='textNumberTitle'>Giảng viên</p>
                </div>
            </div>
        </div>
    </div>
)
}

