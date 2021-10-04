import React from 'react';

const SignIn = () => {
    return (
        <div className="text-center my-60">
             <input className="border-2 rounded px-4 w-11/12 w-96 h-12 border-green-500  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Enter E-mail"/><br/> <br/>
            <input className="border-2 px-5 rounded  w-11/12 w-96 h-12 border-green-500  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"placeholder="Enter Password"/><br/><br/>
           <button className="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 w-52 h-10 text-white font-semibold text-xl rounded">
    Sign In
  </button>
        </div>
    );
};

export default SignIn;