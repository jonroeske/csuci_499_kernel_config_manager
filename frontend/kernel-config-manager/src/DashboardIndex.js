import './App.css';
import React, {useState} from 'react';
import Dashboard from './Dashboard';
import Login from './Login';

export default function DashboardIndex({setToken}){
    return(<>{(sessionStorage.getItem('token') != null && sessionStorage.getItem('token') != "") ? (<Dashboard/>) : (<Login setToken={setToken}/>)}</>)
}