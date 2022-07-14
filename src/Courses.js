import React from 'react';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';
import classes from './Courses.module.css';

export default function Courses() {
  return (
    <div className={classes.coursesContainer}>
      <div>
        <NavLink to='/'>
          <button className={classes.backHome}>Back to home</button>
        </NavLink>
      </div>
      <h3>Select your course</h3>
      <div className={classes.courses}>
        <div className={classes.courseName}>
          <NavLink to='/courses/reactjs'>React JS</NavLink>
        </div>
        <div className={classes.courseName}>
          <NavLink to='/courses/nodejs'>Node JS</NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
