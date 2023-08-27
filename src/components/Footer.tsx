import { FC } from 'react'

const Footer: FC = () => {
  return (
    <div className="w-full flex justify-center items-center bg-gray-100 dark:bg-slate-900 py-4 shadow-xl">
      <span className="text-lg md:text-xl font-semibold text-black dark:text-white">
        Made with ❤ by{' '}
        <a
          className="hover:underline"
          target="_blank"
          href="https://github.com/tuan204-dev"
        >
          Tuan Dang
        </a>
      </span>
    </div>
  )
}

export default Footer
