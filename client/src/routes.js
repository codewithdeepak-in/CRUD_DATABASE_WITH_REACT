import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import NotFound from './NotFound';
import Data from './data';
import Update from './update';


const RoutesComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/update/:id" element={<Update />} />
                <Route path="/data" element={<Data />} />
            </Routes>
        </Router>
    );
};

export default RoutesComponent;
