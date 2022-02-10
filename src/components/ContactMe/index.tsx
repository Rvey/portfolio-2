const ContactMe = () => {
  return (
    <div className="relative py-20 ">
      <div className="relative container px-4 mx-auto">
        <div className="text-left mb-20">
          <h2 className="mt-10 text-5xl font-bold font-heading text-gray-300">
            <span className="border-b-4 border-yellow-300">Con</span>tact me
          </h2>
        </div>
        <div className=" mx-auto bg-gray-800  p-3">
          <div className="flex flex-wrap ">
            <div className="w-full lg:w-1/2  lg:mb-0">
       
                <div className="px-14 py-14">
                  <label className="block mb-2 text-md font-medium  text-gray-400">
                    Your message
                  </label>
                  <div className="mb-6 py-px bg-yellow-400"></div>
                  <div className="mb-6">
                    <input

                      type="email"
                      id="email"
                      className="shadow-sm bg-gray-700  text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Your Email ...."
                      required
                    />
                  </div>
                  <textarea
                    id="message"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-700  focus:ring-blue-500 focus:border-blue-500 "
                    placeholder="Leave a comment..."
                  ></textarea>
                  <div className="md:text-left mt-6">
                    <button
                      type="button"
                      className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-yellow-400 hover:bg-yellow-100 hover:text-gray-700 focus:z-10 focus:ring-2 "
                    >
                      Send
                    </button>
                  </div>
                </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
