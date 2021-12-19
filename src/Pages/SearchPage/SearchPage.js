import React from 'react'
import { Rate } from 'antd';
import 'antd/dist/antd.css';
import './SearchPage.css'
import PaginationPages from '../../Components/Pagination/PaginationPages';

export default function SearchPage() {
    return (
        <div class='searchPage'>
            <div className='row'>
                <div className='col-2'>
                    <div className='searchModel'>
                        <span className='mb-3 navSearchTitle'>
                            <i class="fas fa-book-open navSearchIcon"></i>Lọc</span>
                        <div className='navSearch'>
                            <h5> Khóa học</h5>
                            <div className=''>
                                <div className='levelBox '>
                                    <div class="pretty p-icon p-curve p-jelly mt-3">
                                        <input type="checkbox" />
                                        <div class="state">
                                            <i class=" icon fas fa-check"></i>
                                            <label>Tất cả</label>
                                        </div>
                                    </div>
                                </div>

                                <div className='levelBox '>
                                    <div class="pretty p-icon p-curve p-jelly mt-3">
                                        <input type="checkbox" />
                                        <div class="state">
                                            <i class=" icon fas fa-check"></i>
                                            <label>Front End</label>
                                        </div>
                                    </div>
                                </div>

                                <div className='levelBox '>
                                    <div class="pretty p-icon p-curve p-jelly mt-3">
                                        <input type="checkbox" />
                                        <div class="state">
                                            <i class=" icon fas fa-check"></i>
                                            <label>Back End</label>
                                        </div>
                                    </div>
                                </div>

                                <div className='levelBox '>
                                    <div class="pretty p-icon p-curve p-jelly mt-3">
                                        <input type="checkbox" />
                                        <div class="state">
                                            <i class=" icon fas fa-check"></i>
                                            <label>HTML / CSS</label>
                                        </div>
                                    </div>
                                </div>

                                <div className='levelBox '>
                                    <div class="pretty p-icon p-curve p-jelly mt-3">
                                        <input type="checkbox" />
                                        <div class="state">
                                            <i class=" icon fas fa-check"></i>
                                            <label>Angular</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='navSearch'>
                            <h5>Cấp độ</h5>
                            <div className=''>
                                <div className='levelBox '>
                                    <div class="pretty p-icon p-curve p-jelly mt-3">
                                        <input type="checkbox" />
                                        <div class="state">
                                            <i class=" icon fas fa-check"></i>
                                            <label>Tất cả</label>
                                        </div>
                                    </div>
                                </div>

                                <div className='levelBox '>
                                    <div class="pretty p-icon p-curve p-jelly mt-3">
                                        <input type="checkbox" />
                                        <div class="state">
                                            <i class=" icon fas fa-check"></i>
                                            <label>Mới bắt đầu</label>
                                        </div>
                                    </div>
                                </div>

                                <div className='levelBox '>
                                    <div class="pretty p-icon p-curve p-jelly mt-3">
                                        <input type="checkbox" />
                                        <div class="state">
                                            <i class=" icon fas fa-check"></i>
                                            <label>Trung cấp</label>
                                        </div>
                                    </div>
                                </div>

                                <div className='levelBox '>
                                    <div class="pretty p-icon p-curve p-jelly mt-3">
                                        <input type="checkbox" />
                                        <div class="state">
                                            <i class=" icon fas fa-check"></i>
                                            <label>Cao cấp</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='navSearch'>
                            <h5>Đánh giá </h5>
                            <div className=''>
                                <div>
                                    <div class="pretty p-icon p-curve p-jelly mt-3">
                                        <input type="checkbox" />
                                        <div class="state starBox">
                                            <i class=" icon fas fa-check"></i>
                                            <label>
                                                <div>
                                                    <Rate allowHalf disabled defaultValue={1} />
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div class="pretty p-icon p-curve p-jelly mt-3">
                                        <input type="checkbox" />
                                        <div class="state starBox">
                                            <i class=" icon fas fa-check"></i>
                                            <label>
                                                <div>
                                                    <Rate allowHalf disabled defaultValue={2} />
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div class="pretty p-icon p-curve p-jelly mt-3">
                                        <input type="checkbox" />
                                        <div class="state starBox">
                                            <i class=" icon fas fa-check"></i>
                                            <label>
                                                <div>
                                                    <Rate allowHalf disabled defaultValue={3} />
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div class="pretty p-icon p-curve p-jelly mt-3">
                                        <input type="checkbox" />
                                        <div class="state starBox">
                                            <i class=" icon fas fa-check"></i>
                                            <label>
                                                <div>
                                                    <Rate allowHalf disabled defaultValue={4} />
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div class="pretty p-icon p-curve p-jelly mt-3">
                                        <input type="checkbox" />
                                        <div class="state starBox">
                                            <i class=" icon fas fa-check"></i>
                                            <label>
                                                <div>
                                                    <Rate allowHalf disabled defaultValue={5} />
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-10">
                    <h6 className=''>Hiển thị 169 kết quả</h6>
                    <div className='mt-3'>
                        <div className='searchModel cardSearchBox'>
                            <div className='row'>
                                <div className='col-3'>
                                    <img className='imgSearch' src="https://picsum.photos/200/300" alt="..." />
                                </div>
                                <div className='col-8'>
                                    <btn className='btnCard'>Lập trình</btn>
                                    <h4 className="textCard textCardSearch">Lập trình frontend với html css javascripts</h4>
                                    <p className='textCardSearch'>Khóa học chi tiết nhất về html, nhiều project thực hành giúp thành thạo html css và javascripts. Được cấp chứng chỉ và hỗ trợ phỏng vấn việc làm
                                    </p>

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
                                            <span className='textCardTitle'> ElunMask</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-1'>
                                    <div className=''>
                                        <span className='textCardTitle' style={{ color: 'rgb(234 76 137)' }} >$119.55</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='searchModel cardSearchBox'>
                            <div className='row'>
                                <div className='col-3'>
                                    <img className='imgSearch' src="https://picsum.photos/200/300" alt="..." />
                                </div>
                                <div className='col-8'>
                                    <btn className='btnCard'>Lập trình</btn>
                                    <h4 className="textCard textCardSearch">Lập trình frontend với html css javascripts</h4>
                                    <p className='textCardSearch'>Khóa học chi tiết nhất về html, nhiều project thực hành giúp thành thạo html css và javascripts. Được cấp chứng chỉ và hỗ trợ phỏng vấn việc làm
                                    </p>

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
                                            <span className='textCardTitle'> ElunMask</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-1'>
                                    <div className=''>
                                        <span className='textCardTitle' style={{ color: 'rgb(234 76 137)' }} >$119.55</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='searchModel cardSearchBox'>
                            <div className='row'>
                                <div className='col-3'>
                                    <img className='imgSearch' src="https://picsum.photos/200/300" alt="..." />
                                </div>
                                <div className='col-8'>
                                    <btn className='btnCard'>Lập trình</btn>
                                    <h4 className="textCard textCardSearch">Lập trình frontend với html css javascripts</h4>
                                    <p className='textCardSearch'>Khóa học chi tiết nhất về html, nhiều project thực hành giúp thành thạo html css và javascripts. Được cấp chứng chỉ và hỗ trợ phỏng vấn việc làm
                                    </p>

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
                                            <span className='textCardTitle'> ElunMask</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-1'>
                                    <div className=''>
                                        <span className='textCardTitle' style={{ color: 'rgb(234 76 137)' }} >$119.55</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='searchModel cardSearchBox'>
                            <div className='row'>
                                <div className='col-3'>
                                    <img className='imgSearch' src="https://picsum.photos/200/300" alt="..." />
                                </div>
                                <div className='col-8'>
                                    <btn className='btnCard'>Lập trình</btn>
                                    <h4 className="textCard textCardSearch">Lập trình frontend với html css javascripts</h4>
                                    <p className='textCardSearch'>Khóa học chi tiết nhất về html, nhiều project thực hành giúp thành thạo html css và javascripts. Được cấp chứng chỉ và hỗ trợ phỏng vấn việc làm
                                    </p>

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
                                            <span className='textCardTitle'> ElunMask</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-1'>
                                    <div className=''>
                                        <span className='textCardTitle' style={{ color: 'rgb(234 76 137)' }} >$119.55</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <PaginationPages />
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
