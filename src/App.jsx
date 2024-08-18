import './App.css';
import { useState } from 'react';
import StudentLogin from './Login/StudentLogin';
import TeacherLogin from './Login/TeacherLogin';

function App() {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'TeacherLogin':
        return <TeacherLogin />;
      case 'StudentLogin':
        return <StudentLogin />;
      default:
        return (
          <div className="appBox bg-gray-50 dark:bg-gray-900">
            <button 
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-3.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={() => setActiveComponent('TeacherLogin')}
            >
              Login as Teacher
            </button>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-3.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={() => setActiveComponent('StudentLogin')}
            >
              Login as Student
            </button>
          </div>
        );
    }
  };

  return <div>{renderComponent()}</div>;
}

export default App;
