import { FC, memo, useRef } from 'react'
import { INFO, contacts, socialNetworkLinks } from '../constants'
import toast, { Toaster } from 'react-hot-toast'
import { motion } from 'framer-motion'
import { useInViewSection } from '../context/ScrollProvider'
import { SECTIONS } from '../types/section'

const Contact: FC = () => {
  const nameRef = useRef<any>()
  const subjectRef = useRef<any>()
  const msgRef = useRef<any>()

  const ref = useInViewSection(SECTIONS.CONTACT)

  const handleSubmit = () => {
    const href = `mailto:${INFO.EMAIL}?subject=${
      subjectRef?.current?.value
    }&body=${msgRef?.current?.value}`

    window.open(href)
  }

  const handleCopyText = (value: string) => {
    toast.success('Copied!')
    navigator.clipboard.writeText(value)
  }

  return (
    <div
      ref={ref}
      id="contact"
      className="flex justify-center w-full duration-150 bg-white dark:bg-gray-800"
    >
      <div className="w-[min(80rem,100%)] px-6 md:px-8 pt-24 pb-12 flex flex-col justify-center md:items-stretch">
        <motion.h2
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ type: 'spring' }}
          className="text-5xl font-bold text-center text-black dark:text-white"
        >
          Contact
        </motion.h2>
        <motion.div
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ type: 'spring' }}
          className="flex flex-col"
        >
          <h3 className="mt-12 text-3xl font-semibold text-blue-500">Connect with me</h3>
          <span className="w-full mt-6 text-xl text-gray-500 dark:text-white text-start md:w-3/5">
            If you want to know more about me or my work, or if you would just like to say
            hello, send me a message. I'd love to hear from you.
          </span>
        </motion.div>
        <div className="flex flex-col gap-20 lg:flex-row">
          <motion.form
            initial={{ translateY: 100, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ type: 'spring' }}
            target="_blank"
            onSubmit={() => handleSubmit()}
            className="flex flex-col w-full my-6 lg:w-1/2"
          >
            <div className="flex flex-col mb-5 ">
              <label
                className="mb-2 text-lg font-medium text-gray-900 dark:text-white"
                htmlFor="name"
              >
                Name
              </label>
              <input
                spellCheck={false}
                className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:text-slate-50 text-sm rounded-lg p-2.5 "
                placeholder="Enter your name"
                type="text"
                name="name"
                required
                ref={nameRef}
              />
            </div>
            <div className="flex flex-col mb-5 ">
              <label
                className="mb-2 text-lg font-medium text-gray-900 dark:text-white"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                spellCheck={false}
                className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:text-slate-50 text-sm rounded-lg p-2.5"
                placeholder="Subject"
                type="text"
                name="subject"
                required
                ref={subjectRef}
              />
            </div>
            <div className="flex flex-col mb-5 ">
              <label
                className="mb-2 text-lg font-medium text-gray-900 dark:text-white"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                spellCheck={false}
                className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:text-slate-50 text-sm rounded-lg p-2.5 min-h-[100px]"
                placeholder="Enter your message"
                name="message"
                required
                ref={msgRef}
              />
            </div>

            <div className="flex justify-end">
              <button className="flex items-center justify-center w-full px-3 py-2 font-semibold text-white transition-colors bg-blue-500 rounded-md cursor-pointer md:w-28 text-md">
                Submit
              </button>
            </div>
          </motion.form>
          <motion.div
            initial={{ translateY: 100, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ type: 'spring' }}
            className="flex flex-col items-start w-full gap-5 lg:w-1/2 lg:items-end "
          >
            {contacts?.map((item) => (
              <div
                onClick={() => handleCopyText(item?.content)}
                className="flex flex-col items-start lg:items-end"
                key={item?.title}
              >
                <h4 className="text-3xl font-bold dark:text-white">{item?.title}</h4>
                <span className="mt-3 text-base font-semibold text-blue-700 uppercase cursor-pointer hover:text-blue-600 hover:dark:text-gray-100 dark:text-gray-400">
                  {item?.content}
                </span>
              </div>
            ))}
            <div className="flex flex-col items-start lg:items-end">
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
          </motion.div>
        </div>
      </div>
      <Toaster
        toastOptions={{
          className: 'dark:bg-dark-cloud dark:text-white',
        }}
      />
    </div>
  )
}

export default memo(Contact)
