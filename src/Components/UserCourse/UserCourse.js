import React, { useEffect, useState } from 'react'
import { Rate } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { loadMyCourse, userCancelCourse } from '../../Redux/action/UserAction';


export default function UserCourse() {
    const dispatch = useDispatch()
    const [searchTerm, setSearchTerm] = useState('')
    const { userPersonalInfo, myCourseDetail } = useSelector(state => state.UserReducer)

    const RenderUserCourses = () => {
        return myCourseDetail.filter((course) => {
            if (searchTerm.trim() === '') {
                console.log(course)
                return course
            } else if (course.tenKhoaHoc.trim().toLocaleLowerCase().includes(searchTerm.trim().toLocaleLowerCase())) {
                return course
            }
        }).map((course, index) => {
            return (
                <div key={index} className='searchModel cardSearchBox'>
                    <div className='row'>
                        <div className='col-3'>
                            <img className='imgSearch' src={course.hinhAnh} alt="..." />
                        </div>
                        <div className='col-7'>
                            <btn className='btnCard'>{course.danhMucKhoaHoc.tenDanhMucKhoaHoc}</btn>
                            <h4 className="textCard textCardSearch">{course.tenKhoaHoc}</h4>
                            <p className='textCardSearch'>{course.moTa}</p>

                            <div className='textCardSearch'>
                                <span className='textCardTitle'><i class="far fa-clock iconOclock"></i> 8 giờ 21 phút</span>
                                <span className='textCardTitle'><i class="far fa-calendar iconCalendar"></i> 23 giờ</span>
                                <span className='textCardTitle'><i class="fas fa-signal iconLevel "></i> All level</span>
                            </div>

                            <div className='d-flex'>
                                <span><Rate disabled allowHalf defaultValue={4.5} /></span>

                            </div>

                            <div className=''>
                                <div>
                                    <img src={require("../../Assets/Img/imgCard/personcard.jpg").default} className='imgCardFooter' alt="" />
                                    <span className='textCardTitle'> {course.nguoiTao.hoTen}</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-2 cancelBody'>
                            <div className=''>
                                <btn onClick={() => {
                                    const action = userCancelCourse(course.maKhoaHoc)
                                    dispatch(action)
                                }} className='btnGlobal custom-btn'>Hủy khóa học</btn>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    useEffect(() => {
        
    }, [])
    return (
        <>
            <div className='findCourse'>
                <h4 className='findTitle'>Khóa học của tôi</h4>
                <input onChange={(e) => {
                    setSearchTerm(e.target.value)
                }} className='searchForm GlobalForm' type="text" placeholder='Tìm kiếm ...' />
            </div>
            {RenderUserCourses()}
        </>
    )
}
