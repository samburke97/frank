const HomeContact = (props) => {
  const title = props.title;
  const cls = props.cls;
  const text = props.text;
  const btn = props.btn;
  const btntext = props.btntext;
  const paratext = props.paratext;
  const paratext2 = props.paratext2;
  return (
    <>
      <div className={`${text} ${cls}`}>
        <div className="container py-20 lg:py-40 text-xl lg:text-2xl font-primary">
          <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-32 space-x-0 items-center">
            <div className="flex-1 align-center lg:mb-0 mb-10 text-5xl md:text-7xl text-center lg:text-left">
              {title}
              <div className="text-lg md:text-2xl font-secondary">
                <p>{paratext}</p>
                <p>{paratext2}</p>
              </div>
            </div>
            <div className="flex-1 w-full max-w-lg text-xl md:text-2xl">
              <form
                name="contact"
                action="/success"
                method="POST"
                netlify-honeypot="bot-field"
                data-netlify="true"
              >
                <input type="hidden" name="form-name" value="contact" />

                <div className="flex flex-wrap -mx-3">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    {/* First Name */}
                    <label
                      className={`${text} block uppercase tracking-wide`}
                      htmlFor="firstname"
                    >
                      First Name*
                    </label>
                    <input
                      className="appearance-none block w-full py-3 px-4 mb-3 text-primary border rounded leading-tight focus:outline-none bg-white"
                      name="first-name"
                      id="firstname"
                      type="text"
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    {/* Last Name */}
                    <label
                      className={`${text} block uppercase tracking-wide`}
                      htmlFor="lastname"
                    >
                      Last Name*
                    </label>
                    <input
                      className="appearance-none block w-full py-3 px-4 mb-3 text-primary border rounded leading-tight focus:outline-none bg-white"
                      name="last-name"
                      id="lastname"
                      type="text"
                      required
                    />
                  </div>
                </div>

                {/* Email */}

                <div className="flex flex-wrap -mx-3 mb-6 md:mb-0">
                  <div className="w-full px-3">
                    <label
                      className={`${text} block uppercase tracking-wide`}
                      htmlFor="email"
                    >
                      E-mail*
                    </label>
                    <input
                      className="appearance-none block w-full rounded py-3 px-4 mb-3 text-primary border leading-tight focus:outline-none bg-white"
                      name="email"
                      id="email"
                      type="email"
                      required
                    />
                  </div>
                </div>

                {/* Phone Number */}

                <div className="flex flex-wrap -mx-3 mb-6 md:mb-0">
                  <div className="w-full px-3">
                    <label
                      className={`${text} block uppercase tracking-wide`}
                      htmlFor="number"
                    >
                      Phone Number
                    </label>
                    <input
                      className="appearance-none block w-full rounded py-3 px-4 mb-3 text-primary border leading-tight focus:outline-none bg-white"
                      name="number"
                      id="number"
                      type="text"
                    />
                  </div>
                </div>

                {/* Messages */}

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className={`${text} block uppercase tracking-wide`}
                      htmlFor="message"
                    >
                      What's the plan?
                    </label>
                    <textarea
                      className="no-resize appearance-none block py-3 px-4 mb-3 w-full text-primary border border-gray-200 rounded leading-tight focus:outline-none bg-white h-32"
                      name="message"
                      id="message"
                    ></textarea>
                  </div>
                </div>

                {/* Services Section */}

                <div className="inline-block relative w-full">
                  <select
                    className="block appearance-none w-full px-4 py-2 pr-8 text-primary text-center bg-white border border-gray-400 hover:border-gray rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    name="option"
                    required
                  >
                    <option>Website Development</option>
                    <option>Content Creation</option>
                    <option>Copywriting</option>
                  </select>

                  <div className="flex items-center px-2 absolute inset-y-0 right-0 text-primary pointer-events-none">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>

                {/* Submit Button */}

                <button
                  className={`${btn} ${btntext} block w-full mt-8 hover:bg-accent hover:text-white text-primary py-2 px-4 text-2xl md:text-4xl`}
                  type="submit"
                >
                  Knock, Knock
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContact;
