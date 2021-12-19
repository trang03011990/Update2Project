import React from 'react'
import PaginationPages from '../../Components/Pagination/PaginationPages'

export default function CourseRegisterModal() {
    return (
        <div className="modal fade" id="courseReg">
                <div className="modal-dialog formCourse">
                    <div className="modal-content px-3">
                        {/* Modal Header */}
                        <div className="modal-body ">
                            <div className="pb-3 border-bottom border-secondary">
                            <h5 className="text-left mt-3" id="URM-title"> Chọn người dùng</h5>
                            <div className="row">
                                <div className="input-group float-left col-9">
                                    <input placeholder="Tên người dùng" type="text" className="form-control" aria-label="Text input with segmented dropdown button" />
                                    <div className="input-group-append">
                                        <a type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-expanded="false">
                                            <span className="sr-only">Toggle Dropdown</span>
                                        </a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div role="separator" className="dropdown-divider" />
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                <a className="btn btn-success float-right">Ghi danh</a>

                                </div>
                            </div>

                            </div>
                        </div>

                        {/* Modal body */}
                        <div className="modal-body ">
                        <div className="border-bottom border-secondary">

                            <div className="row">
                                <h5 className="text-left col-6" id="URM-title"> Học viên chờ xác thực</h5>
                                <div className="col-6">
                                <input className="form-control" type="search" placeholder="Nhập tên học viên hoặc số điện thoại" aria-label="Search" />
                                </div>
                            </div>
                            .<table class="table table-center table-hover myTable table-striped">
                                <thead class="text-dark bg-light">
                                    <tr>
                                        <th>STT</th>
                                        <th>Tài khoản</th>
                                        <th>Học viên</th>
                                        <th>Chờ xác nhận</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="align-middle" scope="row">1</td>
                                        <td className="align-middle">12345</td>
                                        <td className="align-middle">Nguyễn Ngọc Trang</td>
                                        <td>
                                            <button className="btn btn-success mx-1" >Xác thực</button>
                                            <button className="btn btn-danger mx-1" >Xóa</button>

                                        </td>

                                    </tr>
                                </tbody>

                            </table>
                            <PaginationPages />
                        </div>
                        </div>

                        {/* Modal footer */}
                        <div className="modal-body">
                        <div className="">
                            <div className="row">
                                <h5 className="text-left col-6"> Học viên đã tham gia khóa học</h5>
                                <div className="col-6">
                                <input className="form-control" type="search" placeholder="Nhập tên học viên hoặc số điện thoại" aria-label="Search" />
                                </div>

                            </div>
                            .<table class="table table-center table-hover myTable table-striped">
                                <thead class="text-dark bg-light">
                                    <tr>
                                        <th>STT</th>
                                        <th>Tài khoản</th>
                                        <th>Học viên</th>
                                        <th>Chờ xác nhận</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="align-middle" scope="row">1</td>
                                        <td className="align-middle">12345</td>
                                        <td className="align-middle">Nguyễn Ngọc Trang</td>
                                        <td>
                                            <span></span>
                                            <button className="btn btn-danger mx-1" >Hủy</button>

                                        </td>

                                    </tr>
                                </tbody>

                            </table>
                            <PaginationPages />
                        </div>
                        </div>

                    
                    </div>
                </div>
            </div>
    )
}
