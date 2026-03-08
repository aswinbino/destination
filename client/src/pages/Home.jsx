import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import FaceScanModal from '../components/FaceScanModal';

const Home = () => {
    const [isFaceScanOpen, setIsFaceScanOpen] = useState(false);
    const navigate = useNavigate();

    const handleStartSafeRide = () => {
        setIsFaceScanOpen(true);
    };

    const handleFaceScanSuccess = () => {
        setIsFaceScanOpen(false);
        // After successful verification, redirect to dashboard or search
        navigate('/search');
    };

    return (
        <>
            <HeroSection onStartSafeRide={handleStartSafeRide} />
            <FaceScanModal
                isOpen={isFaceScanOpen}
                onClose={() => setIsFaceScanOpen(false)}
                onSuccess={handleFaceScanSuccess}
            />
        </>
    );
};

export default Home;
