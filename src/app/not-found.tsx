import React from 'react';

const ErrorPage: React.FC = () => {
  return (
    <div className='flex items-center justify-center' style={{ textAlign: 'center', padding: '50px' , height:"100vh" }}>
    <div>
    <h1 className='text-xl mb-2' ><span className='font-bold' >404</span> - Page Not Found</h1>
      <p className='mb-6 text-slate-600' >Sorry, the page you are looking for does not exist.</p>
      <a href="/" className='bg-purple_col text-white p-3 rounded-lg '>Go Back to Home</a>
    </div>
    </div>
  );
};

export default ErrorPage;
