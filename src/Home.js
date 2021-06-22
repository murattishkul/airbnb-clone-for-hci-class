import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'
import Header from './Header';

// this component renders all main contents
function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className='home__section'>
            <Card
                src="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=720"
                title="Outdoor Getaways"
                description="Unique activities we can do together, led by a world of hosts."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=720"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=720"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
            />
            </div>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Card
                src="https://a0.muscache.com/im/pictures/791aba62-2de8-4722-99b5-45838715eb34.jpg?im_q=medq&im_w=720"
                title="Try Hosting"
                description="Earn extra income and unlock new opportunities by sharing your space."
                suka
            />
            </div>
        </div>
    )
}

export default Home
