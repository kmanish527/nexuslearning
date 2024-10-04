import { BrowserRouter as Router } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters';
import { NotificationProvider } from './customer/components/pages/NotificationPage/NotificationContext';


const App = () => {
  return (
    
      <NotificationProvider>
        <Router>
          <div className="min-h-screen">
            {/* Include the ModeToggle in the navigation or a visible component */}
            
            <CustomerRouters />
          </div>
        </Router>
      </NotificationProvider>

  );
};

export default App;
