import React, { useState } from 'react';
import ageimg from '../../ageimg.png';


function AgeCalculator() {

  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);
  const [error, setError] = useState('');
  const [dob, setdob] = useState('');

  const [showResults, setShowResults] = useState(false);

  const calculateAge = () => {
    const today = new Date(), birth = new Date(birthDate);

    if (!birthDate) {
      setError("Please selct a date");
      // setAge(null);
      return
    }

    if (birth > today) return setError('Birthdate cannot be in the future'), setAge(null);

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(), months--;

    if (months < 0) months += 12, years--;

    setError("");
    setAge({ years, months, days });
    setShowResults(true);

    let dobYears = birth.getFullYear();
    let dobMonths = birth.getMonth() + 1;
    let dobDays = birth.getDate();

    setdob({ dobYears, dobMonths, dobDays });

    
  }

  return (
    <div className='main-container flex'>
      {!showResults ? <div className="container p-5 md:p-[50px] w-10/12 md:w-4/12">
        <h2 className="title"></h2>
        <label className="label"></label>

        <input id="birthdate" type="date" className="input-date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />

        <button onClick={calculateAge} className="btn-calc font-semibold text-lg p-2 bg-[#34495e]">Calculate Age</button>

        {error && <p className="error-msg">{error}</p>}
      </div> : <div className="container p-5 md:p-[50px] w-10/12 md:w-4/12">
        <div className='p-2 bg-[#35488c] rounded-md'>
          <p className='text-lg font-semibold sm:font-normal sm:text-2xl text-white'>📅 Your Date Of Birth</p>

        </div>

        <div className='flex justify-between m-5'>
          <p className='flex flex-col text-black font-bold text-[18px]'>
            {age && !error && (<span className='bg-gray-200 p-3 sm:p-5  rounded-md mb-2'>{dob.dobYears}</span>)}
            Year
          </p>

          <p className='flex flex-col text-black font-bold text-[18px]'>
            {age && !error && (<span className='bg-gray-200 p-3 sm:p-5  rounded-md mb-2'>{dob.dobMonths}</span>)}
            Month
          </p>

          <p className='flex flex-col text-black font-bold text-[18px]'>
            {age && !error && (<span className='bg-gray-200 p-3 sm:p-5  rounded-md mb-2'>{dob.dobDays}</span>)}
            Day
          </p>
        </div>

        <div className='p-2 bg-[#35488c] rounded-md'>
          <p className='text-lg font-semibold sm:font-normal sm:text-2xl text-white'>🕰️ Your Age Till Today</p>

        </div>

        <div className='flex justify-between m-5'>
          <p className='flex flex-col text-black font-bold text-[18px]'>
            {age && !error && (<span className='bg-gray-200 p-5  rounded-md mb-2'>{age.years}</span>)}
            Year
          </p>

          <p className='flex flex-col text-black font-bold text-[18px]'>
            {age && !error && (<span className='bg-gray-200 p-5  rounded-md mb-2'>{age.months}</span>)}
            Month
          </p>

          <p className='flex flex-col text-black font-bold text-[18px]'>
            {age && !error && (<span className='bg-gray-200 p-5  rounded-md mb-2'>{age.days}</span>)}
            Day
          </p>

        </div>
        
        <button className='mt-1 bg-green-600 btn-calc font-semibold text-lg p-2' onClick={() => setShowResults(false)}>Calculate Again</button>
      </div>}

      

    </div>
  );
}

export default AgeCalculator;
