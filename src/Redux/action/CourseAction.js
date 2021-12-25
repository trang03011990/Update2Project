// import axios from "axios";
import { http } from "../../Util/setting";
import {GET_COURSE_LIST_NOT_REGISTER, GET_COURSE_LIST_CONFIRMED,GET_COURSE_LIST_NOTCONFIRMED, GET_COURSE_CATEGORY, GET_COURSE_CATEGORY_LIST, GET_COURSE_DETAIL, GET_COURSE_LIST, GET_COURSE_SEARCH_LIST } from "../types/courseTypes";


export const courseCategoryList = (maDanhMuc) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=GP01`)

            const action = {
                type: GET_COURSE_CATEGORY_LIST,
                data: result.data
            }

            dispatch(action)
        } catch (error) {
            console.log(error)
        }
    }
}

export const getCourseDetail = (maKhoaHoc) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`)

            const action = {
                type: GET_COURSE_DETAIL,
                data: result.data
            }

            dispatch(action)
        } catch (error) {
            console.log(error)
        }
    }
}

export const registerCourse = async (maKhoaHoc) => {
    const credentailLocal = localStorage.getItem('credentials')
    if (credentailLocal) {
        const credentailvalues = JSON.parse
            (credentailLocal)

        const valuesRegisCoure = {
            taiKhoan: credentailvalues.taiKhoan,
            maKhoaHoc: maKhoaHoc
        }

        const headers = {
            "Authorization": `Bearer ${credentailvalues.accessToken}`
        }

        try {
            let result = await http.post('/api/QuanLyKhoaHoc/DangKyKhoaHoc', valuesRegisCoure, { headers })
            console.log(result);
        } catch (errors) {
            console.log(errors.response.data);
        }
    }
}
//
export const getListCourse = async (dispatch) => {
    try {
        let result = await http.get('api/QuanLyKhoaHoc/LayDanhSachKhoaHoc')

        const action = {
            type: GET_COURSE_LIST,
            data: result.data
        }

        dispatch(action)
    } catch (error) {
        console.log(error)
    }
}

export const courseCategory = async (dispatch) => {
    try {
        let result = await http.get('/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc')
        const action = {
            type: GET_COURSE_CATEGORY,
            data: result.data
        }
        dispatch(action)
    } catch (error) {
        console.log(error)
    }
}

export const courseSearchList1 = (tuKhoa) => {
    console.log(tuKhoa)
    return async (dispatch) => {
        try {
            let result = await http.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tuKhoa}`)
            const action = {
                type: GET_COURSE_LIST,
                data: result.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error)

        }
    }
}

export const getCourseListNotConfirmed=(taiKhoan)=>{
    console.log(taiKhoan)
    return async(dispatch)=>{
        try {
            let result = await http.post('api/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet',{taiKhoan})
            console.log(result.data)
            const action = {
                type: GET_COURSE_LIST_NOTCONFIRMED,
                data: result.data
            }
    
            dispatch(action)
        } catch (error) {
            console.log(error.response)
        }
    }
}

export const getCourseListConfirmed=(taiKhoan)=>{
    console.log(taiKhoan)
    return async(dispatch)=>{
        try {
            let result = await http.post('/api/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet',{taiKhoan})
            console.log(result.data)
            const action = {
                type: GET_COURSE_LIST_CONFIRMED,
                data: result.data
            }
    
            dispatch(action)
        } catch (error) {
            console.log(error.response)
        }
    }
}

export const getCourseListNotRegister=(taiKhoan)=>{
    console.log(taiKhoan)
    return async(dispatch)=>{
        try {
            let result = await http.post(`/api/QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh?TaiKhoan=${taiKhoan}`)
            console.log(result.data)
            const action = {
                type: GET_COURSE_LIST_NOT_REGISTER,
                data: result.data
            }
    
            dispatch(action)
        } catch (error) {
            console.log(error.response)
        }
    }
}





