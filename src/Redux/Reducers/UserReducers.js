import {GET_USER_LIST_CONFIRMED, GET_USER_LIST_NOTCONFIRMED,GET_USER_LIST_NOT_REGISTER ,GET_MY_COURSE, GET_INFO_USER, LOG_IN, UP_DATE, CANCEL_COURSE,GET_USER_LIST,GET_SEARCH_LIST } from "../types/userTypes"

const stateDefault = {
    credentials: {},
    userPersonalInfo: {},
    myCourseDetail: [],
    userArray:[],    
    UserListNotConfirmed:[],
    UserListConfirmed:[],
    UserListNotRegister:[],


}

const UserReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case LOG_IN: {
            state.credentials = { ...state.credentials, ...action.data }
            return { ...state }
        }

        case GET_INFO_USER: {
            state.userPersonalInfo = action.data
            return { ...state }
        }

        case UP_DATE: {
            state.userPersonalInfo = { ...state.userPersonalInfo, ...action.data }

            return { ...state }
        }

        case GET_MY_COURSE: {
            state.myCourseDetail = action.data
            return { ...state }
        }

        case CANCEL_COURSE: {
            console.log(action.data)
            let newMyCourseDetail = state.myCourseDetail.filter(item => {
                return item.maKhoaHoc !== action.data
            })
            state.myCourseDetail = newMyCourseDetail
            return { ...state }

        }

        case GET_USER_LIST:{
            state.userArray= action.data;
            return {...state}
        }

        case GET_SEARCH_LIST:{
            state.userArray= action.data;
            return {...state}
        }
        
                case GET_USER_LIST_NOTCONFIRMED:{
            state.UserListNotConfirmed=action.data;
            return {...state}
        }

        case GET_USER_LIST_CONFIRMED:{
            state.UserListConfirmed=action.data;
            return {...state}
        }

        case GET_USER_LIST_NOT_REGISTER:{
            state.UserListNotRegister=action.data;
            return {...state}
        }

        default: return { ...state }
    }
}

export default UserReducer