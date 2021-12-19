import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import SearchPage from './Pages/SearchPage/SearchPage';
import DetailCourse from './Pages/DetailCourse/DetailCourse';
import PersonalPages from './Pages/PersonalPages/PersonalPages';
import CourseCategory from './Pages/CourseCategory/CourseCategory';
import HomeTemplate from './Templates/HomeTemplate/HomeTemplate';
import UserTemplate from './Templates/UseTemplate/UserTemplate';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import './App.css';
// import { LOG_IN } from './Redux/types/userTypes';
import { getCredentailFromLocal } from './Redux/action/UserAction';
import React from 'react';
import UserManagement from './Pages/UserManagement/UserManagement';

import AdminTemplate from './Templates/AdminTemplate';
import CourseManagement from './Pages/CourseManagement/CourseManagement';

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getCredentailFromLocal)
  }, [])
  return (
    <BrowserRouter>     
      <Switch>
        <HomeTemplate path="/" exact component={Home} />
        <HomeTemplate path="/trangchu" exact component={Home} />
        <HomeTemplate path="/danhmuckhoahoc/:maDanhMuc" exact component={CourseCategory} />
        <HomeTemplate path="/timkiem/:tuKhoa" exact component={SearchPage} />
        <HomeTemplate path="/chitiet/:maKhoaHoc" exact component={DetailCourse} />
        <HomeTemplate path="/thongtincanhan" exact component={PersonalPages} />
        <UserTemplate path="/login" exact component={Login} />
        <AdminTemplate path="/admin/quanlynguoidung" component={UserManagement}  />
        <AdminTemplate path="/admin/quanlykhoahoc" component={CourseManagement} />

      </Switch>            
    </BrowserRouter>
  )
}

export default App;