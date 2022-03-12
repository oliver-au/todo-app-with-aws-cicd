import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Header from './components/header';
import TodoApp from './screens/todoApp';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/todoApp" element={<TodoApp />} />
      </Routes>
    </div>
  );
}

export default App;
