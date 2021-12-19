import React from 'react'
import { BackTop } from 'antd';
import 'antd/dist/antd.css';
import './backTop.css'

export default function BackToTop() {
    return (
        <>
            {/* Back top */}
            <BackTop duration='3000' style={{ right: '40px' }}>
                <div className='backTop'><i className="fas fa-arrow-up"></i></div>
            </BackTop>
        </>
    )
}

