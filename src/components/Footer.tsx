import { FC, memo } from 'react'

const Footer: FC = () => {
  return (
    <div className="flex items-center justify-center w-full py-4 bg-gray-100 shadow-xl dark:bg-slate-900">
      <span className="text-lg font-semibold text-black md:text-xl dark:text-white">
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

export default memo(Footer)
