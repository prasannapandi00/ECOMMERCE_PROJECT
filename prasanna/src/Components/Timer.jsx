import React, { useEffect, useRef, useState } from 'react'

function Timer() {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

let interval = useRef();

const startTimer = () => {
   const countdownDate = new Date('April 25, 2024 00:00:00').getTime();

   interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor (distance / (1000 * 60 * 60* 24));
    const hours = Math.floor ((distance % (1000 * 60 * 60* 24) / (1000 * 60 * 60)));
    const minutes = Math.floor ((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor ((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
      //stop our timer
      clearInterval(interval.current);
    } else {
      //update timer
      setTimerDays(days);
      setTimerHours(hours);
      setTimerMinutes(minutes);
      setTimerSeconds(seconds);
    }
    
   },1000);
};

//componentDidMount
useEffect(() => {
  startTimer();
  return () => {
    clearInterval(interval.current);
  };
});

  return (
    <div>
      <div>
      <div className=' mt-20 w-10/12 mx-auto flex '>
        <p className=' w-5 h-9 bg-red-500 border-4  border-red-500 border-solid  rounded-md'></p>
        <p className=' text-red-500 font-semibold ml-5 mt-1'>Today's</p>
      </div>


      <div className=' w-10/12 mx-auto flex justify-between mt-5  '>
        <div className='flex  '>
          <div>
            <p className=' font-semibold text-2xl tracking-wide '>Flash Sales</p></div>
          <div className=' ml-14 -my-2 '>
            <div className='flex'>
              <p className=' text-xs' >Days</p>
              <p className=' text-xs ml-9' >Hours</p>
              <p className=' text-xs ml-8' >Minutes</p>
              <p className=' text-xs ml-9' >Seconds</p>
            </div>
            <div className='flex'>
              <p className=' font-semibold text-2xl'>{timerDays}</p>
              <p className=' text-2xl text-red-500 ml-6 -my-1'>: </p>
              <p className=' font-semibold text-2xl ml-6'>{timerHours} </p>
              <p className=' text-2xl text-red-500 ml-6 -my-1'>:</p>
              <p className=' font-semibold text-2xl ml-6'>{timerMinutes} </p>
              <p className=' text-2xl text-red-500 ml-6 -my-1'>:</p>
              <p className=' font-semibold text-2xl ml-6 mr-72'>{timerSeconds} </p>
            </div>
          </div>


          {/* <div className=' flex  ml-96 '>
            <FaArrowLeft className=' bg-gray-300  border-4  border-gray-300 border-solid  rounded-full text-3xl p-1 mr-3' /><br />
            <FaArrowRight className=' bg-gray-300  border-4  border-gray-300 border-solid  rounded-full text-3xl p-1' />
          </div> */}
        </div>
      </div> 
    </div>
    </div>
  )
}

export default Timer;
