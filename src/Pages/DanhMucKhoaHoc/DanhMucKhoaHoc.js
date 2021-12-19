import React from 'react'
import { Rate } from 'antd'
import './DanhMucKhoaHoc.css'

export default function DanhMucKhoaHoc() {
    return (
        <div className='listCourseBody'>
            <div className=''>
                <div className=''>
                    {/* Course header title */}
                    <div className=''>
                        <div className='courseHead'>
                            <i className="fas fa-bookmark"></i>
                            <span className='listCourseTitle ml-2'>Khoá học</span>
                        </div>
                        <div className='couseList'>
                            <div className='courseListBtn'>
                                <i class="fas fa-desktop"></i>
                                <span className='ml-2 listCourseTitle'>Tư duy lập trình</span>
                            </div>

                            <div className='courseListBtn'>
                                <i class="far fa-keyboard"></i>
                                <span className='ml-2 '>Java</span>
                            </div>

                            <div className='courseListBtn'>
                                <i class="fas fa-mouse"></i>
                                <span className='ml-2 listCourseTitle'>Front End</span>
                            </div>

                            <div className='courseListBtn'>
                                <i class="fas fa-code"></i>
                                <span className='ml-2 listCourseTitle'>Back End</span>
                            </div>

                            <div className='courseListBtn'>
                                <i class="fas fa-code"></i>
                                <span className='ml-2 listCourseTitle'>Master HTML / CSS</span>
                            </div>
                            <div className='courseListBtn'>
                                <i class="fas fa-code"></i>
                                <span className='ml-2 listCourseTitle'>Master React Native</span>
                            </div>
                        </div>
                    </div>
                    {/* Course list card */}
                    <div className='mt-3'>
                        <div className='row'>
                            <div className="col-4 cardListBody">
                                <div className="cardHome cardListCourse">
                                    <div className='cardStiker cardListStiker'>
                                        <i class="fas fa-check mr-2"></i>
                                        <span>Yêu thích</span>
                                    </div>
                                    <img className="card-img-top imgCard" src="https://picsum.photos/200/300" alt='imgCard' />
                                    <div className="cardHomeBody ">
                                        <div className='divGlobal'>
                                            <span className='textCardTitle'><i class="fas fa-users iconStudent"></i> 700 Học viên </span>

                                            <span className='textCardTitle'><i class="far fa-clock iconOclock"></i> 8 giờ</span>
                                        </div>

                                        <h4 className="textCard mt-2">Master frontend</h4>
                                        <div className='d-flex line'>
                                            <span><Rate disabled allowHalf defaultValue={4.5} /></span>
                                        </div>
                                        <div className='divGlobal'>
                                            <div>
                                                <img src={require("../../Assets/Img/imgCard/personcard.jpg").default} className='imgCardFooter' alt="" />
                                                <span className='textCardTitle'> ElunMask</span>
                                            </div>
                                            <div className=''>
                                                <span className='textCardTitle'><i class="fas fa-heart iconHeart"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 cardListBody">
                                <div className="cardHome cardListCourse">
                                    <div className='cardStiker cardListStiker'>
                                        <i class="fas fa-check mr-2"></i>
                                        <span>Yêu thích</span>
                                    </div>
                                    <img className="card-img-top imgCard" src="https://picsum.photos/200/300" alt='imgCard' />
                                    <div className="cardHomeBody ">
                                        <div className='divGlobal'>
                                            <span className='textCardTitle'><i class="fas fa-users iconStudent"></i> 700 Học viên </span>

                                            <span className='textCardTitle'><i class="far fa-clock iconOclock"></i> 8 giờ</span>
                                        </div>

                                        <h4 className="textCard mt-2">Master frontend</h4>
                                        <div className='d-flex line'>
                                            <span><Rate disabled allowHalf defaultValue={4.5} /></span>
                                        </div>
                                        <div className='divGlobal'>
                                            <div>
                                                <img src={require("../../Assets/Img/imgCard/personcard.jpg").default} className='imgCardFooter' alt="" />
                                                <span className='textCardTitle'> ElunMask</span>
                                            </div>
                                            <div className=''>
                                                <span className='textCardTitle'><i class="fas fa-heart iconHeart"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 cardListBody">
                                <div className="cardHome cardListCourse">
                                    <div className='cardStiker cardListStiker'>
                                        <i class="fas fa-check mr-2"></i>
                                        <span>Yêu thích</span>
                                    </div>
                                    <img className="card-img-top imgCard" src="https://picsum.photos/200/300" alt='imgCard' />
                                    <div className="cardHomeBody ">
                                        <div className='divGlobal'>
                                            <span className='textCardTitle'><i class="fas fa-users iconStudent"></i> 700 Học viên </span>

                                            <span className='textCardTitle'><i class="far fa-clock iconOclock"></i> 8 giờ</span>
                                        </div>

                                        <h4 className="textCard mt-2">Master frontend</h4>
                                        <div className='d-flex line'>
                                            <span><Rate disabled allowHalf defaultValue={4.5} /></span>
                                        </div>
                                        <div className='divGlobal'>
                                            <div>
                                                <img src={require("../../Assets/Img/imgCard/personcard.jpg").default} className='imgCardFooter' alt="" />
                                                <span className='textCardTitle'> ElunMask</span>
                                            </div>
                                            <div className=''>
                                                <span className='textCardTitle'><i class="fas fa-heart iconHeart"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 cardListBody">
                                <div className="cardHome cardListCourse">
                                    <div className='cardStiker cardListStiker'>
                                        <i class="fas fa-check mr-2"></i>
                                        <span>Yêu thích</span>
                                    </div>
                                    <img className="card-img-top imgCard" src="https://picsum.photos/200/300" alt='imgCard' />
                                    <div className="cardHomeBody ">
                                        <div className='divGlobal'>
                                            <span className='textCardTitle'><i class="fas fa-users iconStudent"></i> 700 Học viên </span>

                                            <span className='textCardTitle'><i class="far fa-clock iconOclock"></i> 8 giờ</span>
                                        </div>

                                        <h4 className="textCard mt-2">Master frontend</h4>
                                        <div className='d-flex line'>
                                            <span><Rate disabled allowHalf defaultValue={4.5} /></span>
                                        </div>
                                        <div className='divGlobal'>
                                            <div>
                                                <img src={require("../../Assets/Img/imgCard/personcard.jpg").default} className='imgCardFooter' alt="" />
                                                <span className='textCardTitle'> ElunMask</span>
                                            </div>
                                            <div className=''>
                                                <span className='textCardTitle'><i class="fas fa-heart iconHeart"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 cardListBody">
                                <div className="cardHome cardListCourse">
                                    <div className='cardStiker cardListStiker'>
                                        <i class="fas fa-check mr-2"></i>
                                        <span>Yêu thích</span>
                                    </div>
                                    <img className="card-img-top imgCard" src="https://picsum.photos/200/300" alt='imgCard' />
                                    <div className="cardHomeBody ">
                                        <div className='divGlobal'>
                                            <span className='textCardTitle'><i class="fas fa-users iconStudent"></i> 700 Học viên </span>

                                            <span className='textCardTitle'><i class="far fa-clock iconOclock"></i> 8 giờ</span>
                                        </div>

                                        <h4 className="textCard mt-2">Master frontend</h4>
                                        <div className='d-flex line'>
                                            <span><Rate disabled allowHalf defaultValue={4.5} /></span>
                                        </div>
                                        <div className='divGlobal'>
                                            <div>
                                                <img src={require("../../Assets/Img/imgCard/personcard.jpg").default} className='imgCardFooter' alt="" />
                                                <span className='textCardTitle'> ElunMask</span>
                                            </div>
                                            <div className=''>
                                                <span className='textCardTitle'><i class="fas fa-heart iconHeart"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 cardListBody">
                                <div className="cardHome cardListCourse">
                                    <div className='cardStiker cardListStiker'>
                                        <i class="fas fa-check mr-2"></i>
                                        <span>Yêu thích</span>
                                    </div>
                                    <img className="card-img-top imgCard" src="https://picsum.photos/200/300" alt='imgCard' />
                                    <div className="cardHomeBody ">
                                        <div className='divGlobal'>
                                            <span className='textCardTitle'><i class="fas fa-users iconStudent"></i> 700 Học viên </span>

                                            <span className='textCardTitle'><i class="far fa-clock iconOclock"></i> 8 giờ</span>
                                        </div>

                                        <h4 className="textCard mt-2">Master frontend</h4>
                                        <div className='d-flex line'>
                                            <span><Rate disabled allowHalf defaultValue={4.5} /></span>
                                        </div>
                                        <div className='divGlobal'>
                                            <div>
                                                <img src={require("../../Assets/Img/imgCard/personcard.jpg").default} className='imgCardFooter' alt="" />
                                                <span className='textCardTitle'> ElunMask</span>
                                            </div>
                                            <div className=''>
                                                <span className='textCardTitle'><i class="fas fa-heart iconHeart"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Cousr list Load */}
                    <div className='courseListFooter'>                       
                        <div class="wrapperBtn">
                            <a href="#" className='btnLoad'>Xem thêm khóa học</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
