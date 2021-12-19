import React from 'react'
import './DetailCourse.css'
import { Rate } from 'antd'
export default function DetailCourse() {
    return (
        <div className='detailPage'>
            <div>
                <div className='searchModel'>
                    <div className='row'>
                        <div className='col-3'>
                            <img className='imgSearch' src="https://picsum.photos/200/300" alt="..." />
                        </div>
                        <div className='col-6'>
                            <h4 className="titleDetailCard">Master Fontend</h4>
                            <p className='subTextDetail subDetailStyle mt-2'>by E-learning</p>
                            <p className='textDetailTitle'>Khóa học chi tiết nhất về html, nhiều project thực hành giúp thành thạo html css và javascripts. Được cấp chứng chỉ và hỗ trợ phỏng vấn việc làm. Học thực hành liên tục giúp vững kiến thức khi đi làm
                            </p>

                            <div className='d-flex '>
                                <span><Rate disabled allowHalf defaultValue={4.5} /></span>
                                <span className='subTextDetail ml-4'>(20 đánh giá)</span>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='detailRightPages'>
                                <p className='textCardTitle'>25 / 10 / 2020</p>
                                <div className='mt-3'>
                                    <div>
                                        <img src={require("../../Assets/Img/imgCard/personcard.jpg").default} className='imgCardFooter' alt="" />
                                        <span className='textCardTitle'> ElunMask</span>
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    <button className='custom-btn btnGlobal btnDetail '>Đăng ký</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <div className='row'>
                            <div className='col-9'>
                                <div className='detailContentPages'>
                                    <div className='detailContent'>
                                        <h4 className='titleDetailCard'>Thông tin về khóa học</h4>
                                        <p className='textContentDetail'>Đây là lộ trình gồm 10 khóa combo Lập trình Front End Foundation. Combo này sẽ giúp các bạn luyện những vấn đề nền tảng cốt lõi và chuyên sâu nhất trong lộ trình nghề Front End. Khóa học gồm hơn 30 bài tập và dự án vô cùng thực tế xoay quanh từ HTML, CSS, HTML5, CSS3 đến nền tảng chuyên sâu SASS/SCSS, Bootstrap, FlexGird, Animation, Javascript, Javascript Prototype, Javascript ES6, Jquery,...Các kiến thức này cực kì cần thiết cho các bạn đi theo nghề Front End và đi nghiên cứu sâu hơn lên các framework của khóa Front End Master sau này.</p>
                                    </div>

                                    <div className='detailContent'>
                                        <h4 className='titleDetailCard'>Lộ trình học</h4>
                                        <ul className='textContentDetail'>
                                            <li><i class="fas fa-check"></i>HTML/CSS</li>
                                            <li><i class="fas fa-check"></i>Bootstrap</li>
                                            <li><i class="fas fa-check"></i>Javascript</li>
                                            <li><i class="fas fa-check"></i>ReactJS</li>
                                            <li><i class="fas fa-check"></i>Dự án thực tế</li>

                                        </ul>
                                    </div>

                                    <div className='detailContent'>
                                        <h4 className='titleDetailCard'>Yêu cầu</h4>
                                        <ul className='textContentDetail'>
                                            <li><i class="fas fa-check"></i>Các nguyên tắc cơ bản về JavaScript + HTML + CSS là hoàn toàn bắt buộc</li>
                                            <li><i class="fas fa-check"></i>Kiến thức về JavaScript của ES6 + là có lợi nhưng không phải là điều bắt buộc</li>
                                            <li><i class="fas fa-check"></i>KHÔNG yêu cầu React trước hoặc bất kỳ trải nghiệm khung JS nào khác!</li>
                                            <li><i class="fas fa-check"></i>Phát triển Single Page</li>
                                            <li><i class="fas fa-check"></i>Mong muốn học thêm React Native trên cơ sở React JS</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-3'>
                                <div className='detailContentPages'>
                                    <div className='detailRightPages'>
                                        <div>
                                            <div className='iconDetail'>
                                                <i class="fas fa-user-graduate iconStudentDetail"></i>
                                                <span className='subTextDetail'>146 Học viên</span>
                                            </div>
                                            <div className='iconDetail'>
                                                <i class="far fa-money-bill-alt iconMoneyDetail"></i>
                                                <span className='subTextDetail'>1.000.000</span>
                                            </div>
                                            <div className='iconDetail'>

                                                <i class="far fa-calendar-alt iconCalendarDetail"></i>
                                                <span className='subTextDetail'>3 tuần</span>
                                            </div>
                                            <div className='iconDetail'>

                                                <i class="far fa-clock iconClockDetail"></i>
                                                <span className='subTextDetail'>4h / buổi</span>
                                            </div>
                                            <div className='iconDetail'>
                                                <i class="fas fa-database iconLevelDetail"></i>
                                                <span className='subTextDetail'>Trung cấp</span>

                                            </div>
                                            <div className='iconDetail'>
                                                <i class="fas fa-map-marker-alt iconLocalDetail"></i>
                                                <span className='subTextDetail'>Đà Nẵng</span>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='detailContentPages'>
                                    <div className='detailRightPages'>
                                        <div className='detailContent'>
                                            <h4 className='titleDetailCard'>Khóa học liên quan</h4>
                                            <ul className='textContentDetail'>
                                                <li><i class="fab fa-discourse"></i>Khóa học React Native</li>
                                                <li><i class="fab fa-discourse"></i>Khóa học Master Node JS</li>
                                                <li><i class="fab fa-discourse"></i>Khóa học Master Javascripts ( 2020 )</li>
                                                <li><i class="fab fa-discourse"></i>Khóa học Angular từ Zero đến Hero ( 2020 )</li>
                                                <li><i class="fab fa-discourse"></i>Khóa học Backend từ Zero đến Hero dành cho tất cả ( 2020 )</li>
                                                
                                            </ul>
                                        </div>
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
