import React from 'react';

const ContactForm = () => {
    return (
        <div className="w-full max-w-md mx-auto flex justify-center items-center">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-3/5 sm:w-4/5 ">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fname">Full name:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="fname"
                placeholder="Enter full name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message-text">Message:</label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="messageText"
                placeholder="Enter your message"
              ></textarea>
            </div>
          </form>
        </div>
    );
};

export default ContactForm;
