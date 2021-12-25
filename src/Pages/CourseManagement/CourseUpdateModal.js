import React from 'react'

export default function CourseUpdateModal() {
    return (
        <div className="modal fade" id="updateCourse">
                <div className="modal-dialog formCourse">
                    <div className="modal-content">

                        {/* Modal Header */}
                        <header className="head-form mb-0">
                            <h3 id="header-title">THÊM KHÓA HỌC</h3>
                        </header>
                        {/* Modal body */}
                        <div className="modal-body">
                            <form className="d-flex flex-wrap" role="form">
                                <div className="form-group col-6">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-user" /></span>
                                        </div>
                                        <input type="text" name="tk" id="tknv" className="form-control input-sm" placeholder="Mã khóa học" />
                                    </div>
                                    <span className="sp-thongbao" id="tbTKNV" />
                                </div>
                                <div className="form-group col-6">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-address-book" /></span>
                                        </div>
                                        <input type="name" name="name" id="name" className="form-control input-sm" placeholder="Tên khóa học" />
                                    </div>
                                    <span className="sp-thongbao" id="tbTen" />
                                </div>
                                <div className="form-group col-6">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-briefcase" /></span>
                                        </div>
                                        <select className="form-control" id="chucvu">
                                            <option>Danh mục khóa học</option>
                                            <option>Lập trình FrontEnd </option>
                                        </select>
                                    </div>
                                    <span className="sp-thongbao" id="tbChucVu" />
                                </div>

                                <div className="form-group col-6">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-calendar" /></span>
                                        </div>
                                        <input type="text" name="ngaylam" id="datepicker" className="form-control" placeholder="Ngày tạo" />
                                    </div>
                                    <span className="sp-thongbao" id="tbNgay" />
                                </div>

                                <div className="form-group col-6">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-user" /></span>
                                        </div>
                                        <input type="text" name="tk" id="tknv" className="form-control input-sm" placeholder="Đánh giá" />
                                    </div>
                                    <span className="sp-thongbao" id="tbTKNV" />
                                </div>
                                <div className="form-group col-6">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-address-book" /></span>
                                        </div>
                                        <input type="name" name="name" id="name" className="form-control input-sm" placeholder="Lượt xem" />
                                    </div>
                                    <span className="sp-thongbao" id="tbTen" />
                                </div>
                                <div className="form-group col-6">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-briefcase" /></span>
                                        </div>
                                        <select className="form-control" id="chucvu">
                                            <option>Người tạo</option>
                                            <option>Nguyễn Ngọc Trang </option>
                                        </select>
                                    </div>
                                    <span className="sp-thongbao" id="tbChucVu" />
                                </div>

                                <div className="form-group col-6">
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="customFile" />
                                        <label className="custom-file-label text-left" htmlFor="customFile">Chọn hình ảnh</label>
                                    </div>

                                </div>
                                {/* <div className="form-group col-6">
                                        <label htmlFor="exampleFormControlFile1">HInh</label>
                                        <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                                    
                                </div> */}


                                <div className="col-12 container text-justify">
                                    <h5 className="card-header mb-2">Mô tả khóa học</h5>
                                    <div className="d-float bg-light p-3">
                                        <img src="../img/logo512.png" className="img-fluid rounded w-25 mr-3 float-left" />

                                        <p className="card-text bg-light mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus amet quo facilis laborum deleniti enim consequuntur nisi totam, vero suscipit debitis accusamus ipsum eveniet ipsam eligendi velit cum iste consectetur maiores repellendus nam doloremque natus. Consectetur cumque iure magni quae minus numquam sint saepe, iusto eligendi laborum inventore ducimus temporibus ut at sed adipisci necessitatibus nam. Maiores praesentium provident autem, harum dicta fugit, minima iste ea culpa, cum consequuntur debitis eius eos quos nostrum! Cumque eius facere voluptate maxime dolorum?</p>
                                    </div>
                                </div>
                            </form>

                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer" id="modal-footer">
                            <button id="btnThemNV" type="button" className="btn btn-success">Thêm khóa học</button>
                            <button id="btnCapNhat" type="button" className="btn btn-success">Cập nhật</button>
                            <button id="btnDong" type="button" className="btn btn-danger" data-dismiss="modal">Đóng</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}
