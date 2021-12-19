import { http } from "../../Util/setting"
import { CANCEL_COURSE, GET_INFO_USER, GET_MY_COURSE, LOG_IN, UP_DATE, GET_USER_LIST,GET_SEARCH_LIST } from "../types/userTypes"

export const userLogin = (values, formikLogin) => {
    return async (dispatch) => {
        try {
            let resultLogin = await http.post('/api/QuanLyNguoiDung/DangNhap', values)

            const action = {
                type: LOG_IN,
                data: {
                    ...resultLogin.data,
                    img: 'https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg'
                }
            }
            dispatch(action)

            if (resultLogin.request.status === 200) {
                localStorage.setItem('credentials', JSON.stringify({
                    ...resultLogin.data,
                    img: 'https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg'
                }))

                alert('Đăng nhập thành công')
                formikLogin.resetForm()

            }


        } catch (errors) {
            alert(errors.response.data)
        }

    }
}

export const getCredentailFromLocal = (dispatch) => {
    const credentailLocal = localStorage.getItem('credentials')

    if (credentailLocal) {
        const credentailvalues = JSON.parse
            (credentailLocal)

        const action = {
            type: LOG_IN,
            data: credentailvalues

        }
        dispatch(action)

    }
}

export const getUserInfo = async (dispatch) => {
    const credentailLocal = localStorage.getItem('credentials')
    if (credentailLocal) {
        const credentailvalues = JSON.parse
            (credentailLocal)

        const values = {
            taiKhoan: credentailvalues.taiKhoan,
            matKhau: credentailvalues.matKhau
        }

        const headers = {
            "Authorization": `Bearer ${credentailvalues.accessToken}`
        }

        try {
            let result = await http.post('api/QuanLyNguoiDung/ThongTinTaiKhoan', values, { headers })

            const action = {
                type: GET_INFO_USER,
                data: result.data
            }

            dispatch(action)
        } catch (errors) {
            alert(errors.response.data)
        }

    }
}

export const _userUpdate = (values, formik) => {
    const credentailLocal = localStorage.getItem('credentials')

    if (credentailLocal) {

        const credentailvalues = JSON.parse
            (credentailLocal)
        const headers = {
            "Authorization": `Bearer ${credentailvalues.accessToken}`
        }
        return async (dispatch) => {
            try {
                let result = await http.put('api/QuanLyNguoiDung/CapNhatThongTinNguoiDung', values, { headers })

                if (result.request.status === 200) {
                    formik.resetForm()
                    alert('Cập nhật thành công')
                }

                const action = {
                    type: UP_DATE,
                    data: result.data
                }

                dispatch(action)
            } catch (errors) {
                alert(errors.response.data)
            }
        }
    }

}

export const loadMyCourse = (maKhoaHocArray) => {
    console.log(maKhoaHocArray)
    return async (dispatch) => {
        try {
            let arrayMyCourses = []
            await maKhoaHocArray.forEach(async (course, index) => {
                let result = await http.get(`/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${course.maKhoaHoc}`)
                arrayMyCourses.push(result.data)

            })

            const action = {
                type: GET_MY_COURSE,
                data: arrayMyCourses
            }
            dispatch(action)


        } catch (error) {
            alert(error.data)
        }

    }
}

export const userCancelCourse = (maKhoaHoc) => {
    return async (dispatch) => {
        const credentailLocal = localStorage.getItem('credentials')
        if (credentailLocal) {
            const credentailvalues = JSON.parse
                (credentailLocal)

            const cancleCoure = {
                taiKhoan: credentailvalues.taiKhoan,
                maKhoaHoc: maKhoaHoc
            }

            const headers = {
                "Authorization": `Bearer ${credentailvalues.accessToken}`
            }

            try {
                let resultCancel = await http.post('api/QuanLyKhoaHoc/HuyGhiDanh', cancleCoure, { headers })
                if (resultCancel.request.status === 200) {
                    const action = {
                        type: CANCEL_COURSE,
                        data: maKhoaHoc
                    }
                    dispatch(action)
                }

            } catch (errors) {
                console.log(errors.response.data);
            }
        }
    }

}

export const getUserList = async (dispatch) => {
    try {
        let result = await http.get('/api/QuanLyNguoiDung/LayDanhSachNguoiDung')
        const action = {
            type: GET_USER_LIST,
            data: result.data
        }
        dispatch(action)
    } catch (errors) {
        alert(errors)
    }
}

export const getSearchList = (v) => {
    console.log(v)
    return async (dispatch) => {
    try {
        let result = await http.get(`/api/QuanLyNguoiDung/TimKiemNguoiDung?tuKhoa=${v}`)
        console.log(result.data)
        const action = {
            type: GET_SEARCH_LIST,
            data: result.data
        }
        dispatch(action)
    } catch (errors) {
        alert(errors)
    }
}}

