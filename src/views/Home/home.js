import React from 'react';
import './home.css';
import ParticipantCard from '../../components/membercards/ParticipantsCard';
import Navbar from '../../components/navbar/navbar';
import ScreenImage from './presentation/screen.png'; 
import Footer from '../../components/footer/footer';


function Home() {
  const participants = [
    { name: 'Aman Pawar',
       img: "https://i.pravatar.cc/400?img=2",
     },
    { name: 'Shashikant Surve',
       img: "https://i.pravatar.cc/400?img=58"
     },
    { name: 'Harshal Patil',
       img: "https://i.pravatar.cc/400?img=14"
     },
    { name: 'Swanand Gholap',
       img: "https://i.pravatar.cc/400?img=3"
     },
    { name: 'Uddhav Hon',
       img: "https://i.pravatar.cc/400?img=52"
     },
    { name: 'Sanket Tamnar',
       img: "https://i.pravatar.cc/400?img=54"
     },
    { name: 'Chaintanya Jadhav',
      img: "https://i.pravatar.cc/400?img=7"
     },
    { name: 'Harsh Deshpandey',
      img: "https://i.pravatar.cc/400?img=8"
     },
    { name: 'Bob Brown',
      img: "https://i.pravatar.cc/400?img=9"
     },
    { name: 'Bob Brown',
      img: "https://i.pravatar.cc/400?img=10" },
    { name: 'Bob Brown',
      img: "https://i.pravatar.cc/400?img=11" },
    { name: 'Bob Brown',
      img: "https://i.pravatar.cc/400?img=12" },
    { name: 'Bob Brown',
      img: "https://i.pravatar.cc/400?img=13" },
  ];

  return (
    <>
    <div className='meeting-container'>
    <Navbar/>
    <div className='main-content'>
      <div className='screen'>
          <img src={ScreenImage} alt=''/>
      </div>
    <div className='Card-container'>
      <ParticipantCard  participants={participants} />
    </div>
    </div>
    
    </div>
    <Footer/>
    </>
  );
}
export default Home;