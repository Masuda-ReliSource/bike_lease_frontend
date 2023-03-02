import { Routes, Route } from 'react-router-dom';

// page pages
import Login from '../pages/Login';
import Home from '../pages/Home';

const RouteList = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};

export default RouteList;