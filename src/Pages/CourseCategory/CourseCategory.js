import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { courseCategoryList } from '../../Redux/action/CourseAction'

import { Rate } from 'antd'
import 'antd/dist/antd.css'
import './courseCategory.css'


export default function CourseCategory(props) {
    const dispatch = useDispatch()
    let categoryCode = props.match.params.maDanhMuc

    const {coursesCategaryList, coursesCategary} = useSelector(state => state.CourseReducer)

    let NameCategory = coursesCategary.find((item, index) => {
        if (item.maDanhMuc === categoryCode) {
            return item
        }
    })

    // console.log(NameCategory); 
    useEffect(() => {
        dispatch(courseCategoryList(categoryCode))
    }, [categoryCode])

    const renderCourseCategoryList = () => {
        return coursesCategaryList.map((course, index) => {
            return (
                <NavLink to={`/chitiet/${course.maKhoaHoc}`} key={index} className="col-4 cardListBody">
                    <div className="cardHome cardListCourse">
                        <div className='cardStiker cardListStiker'>
                            <i class="fas fa-check mr-2"></i>
                            <span>Yêu thích</span>
                        </div>
                        <img className="card-img-top imgCard" src="https://picsum.photos/200/300" alt='imgCard' />
                        <div className="cardHomeBody ">
                            <div className='divGlobal'>
                                <span className='textCardTitle'><i class="fas fa-users iconStudent"></i> {course.luotXem} Lượt xem</span>

                                <span className='textCardTitle'><i class="far fa-clock iconOclock"></i> 8 giờ</span>
                            </div>

                            <h4 className="textCard mt-2">{course.tenKhoaHoc}</h4>
                            <div className='d-flex line'>
                                <span><Rate disabled allowHalf defaultValue={4.5} /></span>
                            </div>
                            <div className='divGlobal'>
                                <div>
                                    <img src={require("../../Assets/Img/imgCard/personcard.jpg").default} className='imgCardFooter' alt="" />
                                    <span className='textCardTitle ml-2'>{course.nguoiTao.hoTen}</span>
                                </div>
                                <div className=''>
                                    <span className='textCardTitle'><i class="fas fa-heart iconHeart"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </NavLink>
            )
        })
    }

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
                                <span className='ml-2 listCourseTitle'>{NameCategory.tenDanhMuc}</span>
                            </div>
                        </div>
                    </div>
                    {/* Course list card */}
                    <div className='mt-3'>
                        <div className='row'>
                            {renderCourseCategoryList()}
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
