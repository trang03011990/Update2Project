import { GET_COURSE_LIST_NOT_REGISTER,GET_COURSE_LIST_CONFIRMED,GET_COURSE_LIST_NOTCONFIRMED,GET_COURSE_CATEGORY, GET_COURSE_CATEGORY_LIST, GET_COURSE_DETAIL, GET_COURSE_LIST, GET_COURSE_SEARCH_LIST } from "../types/courseTypes"

const stateDefault = {
    coursesList: [],
    coursesCategary: [],
    coursesCategaryList: [],
    coursesSearchList: [],
    courseDetail: {
        "maKhoaHoc": "",
        "biDanh": "",
        "tenKhoaHoc": "",
        "moTa": "",
        "luotXem":"" ,
        "hinhAnh": "",
        "maNhom": "",
        "ngayTao": "",
        "soLuongHocVien": 0,
        "nguoiTao": {
            "taiKhoan": "",
            "hoTen": "",
            "maLoaiNguoiDung": "",
            "tenLoaiNguoiDung": ""
        },
        "danhMucKhoaHoc": {
            "maDanhMucKhoahoc": "",
            "tenDanhMucKhoaHoc": ""
        }
    },
    courseListNotConfirmed:[],
    courseListConfirmed:[],
    courseListNotRegister:[],
}


const CourseReducer = (state = stateDefault, action) => {
    // console.log(action)
    switch (action.type) {
        case GET_COURSE_LIST: {
            state.coursesList = action.data

            return { ...state }
        }

        case GET_COURSE_CATEGORY: {
            state.coursesCategary = action.data
            return { ...state }
        }

        case GET_COURSE_CATEGORY_LIST: {
            state.coursesCategaryList = action.data
            return { ...state }
        }

        case GET_COURSE_SEARCH_LIST: {
            state.coursesSearchList = action.data
            return { ...state }
        }

        case GET_COURSE_DETAIL: {
            state.courseDetail = action.data
            // console.log( state.courseDetail);
            return { ...state }
        }

        case GET_COURSE_LIST_NOTCONFIRMED:{
            state.courseListNotConfirmed=action.data;
            return {...state}
        }

        case GET_COURSE_LIST_CONFIRMED:{
            state.courseListConfirmed=action.data;
            return {...state}
        }

        case GET_COURSE_LIST_NOT_REGISTER:{
            state.courseListNotRegister=action.data;
            return {...state}
        }

       
        default: return { ...state }
    }
}

export default CourseReducer