import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import FormToDoList from './pages/formBasico/FormToDoList';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className='text-6xl text-red-500 '>App</h1>
      
      <Routes>
        <Route path='/' element={<Navigate to="/form-todo" />} />
        <Route path='/form-todo' element={<FormToDoList />} />
      </Routes>
    </div>
  );
};

export default App;