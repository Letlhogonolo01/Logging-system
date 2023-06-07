// import React, { useState } from 'react';
// import axios from 'axios';

// const DateOfBirthInput = () => {
//   const [dob, setDob] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const empdata = {dob};
//     fetch("http://localhost:8000/employee", {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(empdata),
//     })
//     // Make a POST request to the JSON server to save the date of birth
//     try {
//       await axios.post("http://localhost:8000/employee", { dob });
//       console.log('Date of birth saved successfully');
//     } catch (error) {
//       console.error('Error saving date of birth', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Date of Birth:</label>
//       <input
//         type="date"
//         value={dob}
//         onChange={(e) => setDob(e.target.value)}
//       />
//       <button type="submit">Save</button>
//     </form>
//   );
// };

// export default DateOfBirthInput;
