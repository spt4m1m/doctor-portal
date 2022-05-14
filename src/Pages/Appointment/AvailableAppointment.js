import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentCard from './AppointmentCard';

const AvailableAppointment = ({ date }) => {
    const [bookings, setBookings] = useState();
    useEffect(() => {
        fetch('Services.json')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <div className='py-16'>
            <p className='text-secondary font-semibold text-lg text-center pb-5'>Available Appointment on {format(date, "PP")}</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto'>
                {
                    // console.log(bookings)
                    bookings?.map(data => <AppointmentCard key={data._id} item={data} />)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;