import { Routes, Route } from 'react-router-dom';

// page pages
import Login from '../pages/Login';
import Home from '../pages/Home';
import AdminCreate from '../pages/AdminCreate';
import DealerCreate from '../pages/DealerCreate';

const RouteList = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/admin/create" element={<AdminCreate />} />
            <Route path="/dealer/create" element={<DealerCreate />} />
        </Routes>
    );
};

export default RouteList;
