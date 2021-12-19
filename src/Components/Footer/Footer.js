import React from 'react'
import style from './Footer.css'
export default function FooterPage() {
    return (
        <div className='footerBody'>
            {/* Footer */}
            <div className='mt-5 pb-5 line'>
                <div className='row textCardTitle'>
                    <div className="col-4">
                        <a href="" className='mr-5 textLogo'><span className='textE'>E</span>-learning <i className="far fa-keyboard iconLogo iconFooterLogo"></i></a>
                        <ul className='menuFooter'>
                            <li>
                                <i className="fas fa-phone-alt iconFooter"></i> <span>1800-123-4567</span>
                            </li>
                            <li>
                                <i className="fas fa-envelope-open-text iconFooter"></i>
                                <span>devit@gmail.com</span>
                            </li>
                            <li>
                                <i className="fas fa-map-marker-alt iconFooter"></i>
                                <span>59 Điện biên phủ - Đà Nẵng</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <h3 className='textFooterTitle'>Liên kết</h3>
                        <ul className='menuFooter'>
                            <li><i className="fas fa-chevron-right"></i> Trang chủ</li>
                            <li><i className="fas fa-chevron-right"></i> Dịch vụ</li>
                            <li><i className="fas fa-chevron-right"></i> Nhóm</li>
                            <li><i className="fas fa-chevron-right"></i> Blog</li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <h3 className='textFooterTitle'>Khóa học</h3>
                        <ul className='menuFooter'>
                            <li><i className="fas fa-chevron-right"></i> Front End</li>
                            <li><i className="fas fa-chevron-right"></i> Back End</li>
                            <li><i className="fas fa-chevron-right"></i> Full stack</li>
                            <li><i className="fas fa-chevron-right"></i> Node Js</li>
                        </ul>
                    </div>

                    <div className="col-4">
                        <h3 className='textFooterTitle'>Đăng kí tư vấn</h3>
                        <form action="">
                            <input className='formFooter' type="text" placeholder='Họ và tên' />
                            <input className='formFooter' type="text" placeholder='Email' />
                            <input className='formFooter' type="text" placeholder='Số điện thoại' />
                        </form>
                        <button className='custom-btn btnGlobal mt-3'>Đăng kí</button>
                    </div>

                </div>
            </div>

            {/* Copy right Footer */}
            <div className='divGlobal'>
                <div className='textCardTitle'>
                    <p>Copyright © 2021. All rights reserved.</p>
                </div>
                <div className='divGlobal p-0'>
                    <i className="fab fa-instagram iconFooter iconSize"></i>
                    <i className="fab fa-facebook-f iconFooter iconSize"></i>
                    <i className="fab fa-twitter iconFooter iconSize"></i>
                </div>
            </div>
        </div>
    )
}
