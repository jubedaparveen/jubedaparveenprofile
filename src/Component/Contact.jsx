import React from "react";

const Contact = () => {
  return (
    <div className="border-b border-slate-700" id="Contact">
      <div className="text-white md:mt-16 mt-2 bg-black">
        <h2 className="text-xl md:text-4xl uppercase font-semibold text-center mb-2 md:mb-16 tracking-widest bg-slate-800 px-4 py-1 md:rounded-full">
          Contact
        </h2>

        <div className="mb-8 text-white" data-aos="zoom-in"> 
          <div className="md:w-1/2 border mx-auto border-slate-700 shadow-lg shadow-slate-700 md:p-4 p-2">
            <div className=" mx-auto rounded-3xl shadow-inner shadow-slate-500 border border-slate-700 p-8">
              <h2 className="md:my-4 uppercase tracking-widest md:text-2xl font-bold text-center">
                Contact form
              </h2>
              <form method="post" className=" ">
                <div className="md:my-16">
                  <div class="grid md:grid-cols-2 md:gap-6 text-white">
                    <div class="relative z-0 w-full mb-5 group">
                      <input
                        type="text"
                        name="floating_first_name"
                        id="floating_first_name"
                        class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        for="floating_first_name"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        First name
                      </label>
                    </div>
                    <div class="relative z-0 w-full mb-5 group">
                      <input
                        type="text"
                        name="floating_last_name"
                        id="floating_last_name"
                        class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        for="floating_last_name"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Last name
                      </label>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div class="relative z-0 w-full md:mb-16 mb-2 group text-white">
                    <input
                      type="email"
                      name="floating_email"
                      id="floating_email"
                      class="block py-2.5 px-0 w-full text-sm text-white  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_email"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Email address
                    </label>
                  </div>
                </div>

                <div className="">
                  <div class="relative z-0 w-full md:mb-16 mb-2 group text-white">
                    <input
                      type="number"
                      name="floating_email"
                      id="floating_email"
                      class="block py-2.5 px-0 w-full text-sm text-white  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_phone"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Phone
                    </label>
                  </div>
                </div>

                <div className="md:mb-16 mb-2" >
                  <textarea 
                    id="message"
                    rows="4"
                    className="md:text-2xl block p-2 w-full text-white bg-black rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>

                <div className="md:text-2xl font-bold md:tracking-widest text-center bg-slate-800 md:px-4 md:py-3 py-2 md:mb-5 rounded-full ">
                  <button className="uppercase">submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
