import { Routes, Route } from 'react-router-dom';

// page pages
import Login from '../pages/Login';
import Home from '../pages/Home';
import AdminCreate from '../pages/AdminCreate';
import DealerCreate from '../pages/DealerCreate';
import BikeCreate from '../pages/BikeCreate';
import BikeLease from '../pages/bike-lease/BikeLease';
import BikeLeaseList from '../pages/bike-lease/List';

const RouteList = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/admin/create" element={<AdminCreate />} />
            <Route path="/dealer/create" element={<DealerCreate />} />
            <Route path="/bike/create" element={<BikeCreate />} />
            <Route path="/lease-application/create" element={<BikeLease />} />
            <Route path="/lease-application/list" element={<BikeLeaseList />} />
        </Routes>
    );
};

export default RouteList;
