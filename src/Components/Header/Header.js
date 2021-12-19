import React from 'react'
import styles from './Header.css'
export default function Header() {
    return (
        <>
            <div className='navBody'>
                <nav className='homeHeader'>
                    <div className='homeHeader'>
                        <a href="" className='mr-5  active textLogo'><span className='textE'>E</span>-learning <i className="far fa-keyboard iconLogo"></i></a>

                        <input className='searchForm GlobalForm' type="text" placeholder='Tìm kiếm ...' />
                        <a href="" className='ml-4 textMenu'>Trang chủ</a>
                        <a href="" className=' textMenu ml-4 '>Danh sách khóa học</a>
                    </div>
                    <div className='homeHeader'>
                        <button className='custom-btn btnGlobal textBtn'>Đăng kí</button>
                        <button className='custom-btn btnGlobal textBtn ml-3'>Đăng nhập</button>
                    </div>
                </nav>
            </div>
        </>
    )
}
