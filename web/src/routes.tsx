import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';


const MainRoutes=() => {
  return <div>
    <Routes>
    <Route>  
        <Route path="/" element={ <Landing />} />
        <Route path="/study" element={ <TeacherList />} />
        <Route path="/give-classes" element={ <TeacherForm />} />
      </Route>
   </Routes>
   </div>;
}

export default MainRoutes;

