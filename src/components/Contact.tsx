import { FC } from 'react'
import { socialNetworkLinks } from '../constants/index'

const contacts = [
  {
    title: 'Email',
    content: 'tuandangit2004@gmail.com',
  },
  {
    title: 'Address',
    content: 'Ha Dong - Ha Noi',
  },
]

const Contact: FC = () => {
  return (
    <div id="contact" className="w-full flex justify-center bg-white dark:bg-gray-800">
      <div className="max-w-7xl flex flex-col justify-center  px-4 md:px-8 pt-24 pb-12">
        <h2 className="text-black dark:text-white text-5xl font-bold text-center">
          Contact
        </h2>
        <div className="flex flex-col">
          <h3 className="mt-12 text-3xl font-semibold text-blue-500">Connect with me</h3>
          <span className="text-xl text-gray-500 dark:text-white text-start w-3/5 mt-6">
            If you want to know more about me or my work, or if you would just like to say
            hello, send me a message. I'd love to hear from you.
          </span>
        </div>
        <div className="flex flex-col lg:flex-row gap-20">
          <form className="flex flex-col w-full lg:w-1/2 my-6">
            <div className="flex flex-col mb-5 ">
              <label
                className="text-lg font-medium text-gray-900 dark:text-white mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                spellCheck={false}
                className="bg-gray-700 border border-gray-300 text-slate-50 text-sm rounded-lg p-2.5"
                placeholder="Enter your name"
                type="text"
                name="name"
              />
            </div>
            <div className="flex flex-col mb-5 ">
              <label
                className="text-lg font-medium text-gray-900 dark:text-white mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                spellCheck={false}
                className="bg-gray-700 border border-gray-300 text-slate-50 text-sm rounded-lg p-2.5"
                placeholder="Enter your email"
                type="email"
                name="email"
              />
            </div>
            <div className="mb-5 flex flex-col ">
              <label
                className="text-lg font-medium text-gray-900 dark:text-white mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                spellCheck={false}
                className="bg-gray-700 border border-gray-300 text-slate-50 text-sm rounded-lg p-2.5 min-h-[100px]"
                placeholder="Enter your message"
                name="message"
              />
            </div>

            <div className="flex justify-end">
              <button
                onClick={(e) => {
                  e.preventDefault()
                }}
                className="text-white w-full md:w-28 flex justify-center items-center bg-blue-500 rounded-md cursor-pointer text-md font-semibold py-2 px-3 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="flex flex-col w-full lg:w-1/2 items-end gap-5 ">
            {contacts?.map((item) => (
              <div className="flex flex-col items-end" key={item?.title}>
                <h4 className="text-3xl font-bold dark:text-white">{item?.title}</h4>
                <span className="text-blue-700 dark:text-blue-500 text-base font-semibold uppercase mt-3">
                  {item?.content}
                </span>
              </div>
            ))}
            <div className="flex flex-col items-end">
              <h4 className="text-3xl font-bold dark:text-white">Social</h4>
              <div className="flex flex-row gap-4 mt-4">
                {socialNetworkLinks?.map((item) => {
                  const Icon = item?.icon
                  return (
                    <a
                      className="text-3xl text-black dark:text-white"
                      key={item?.title}
                      target="_blank"
                      href={item?.link}
                    >
                      <Icon />
                    </a>
                  )
                })}
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
