import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight md:pr-8">
      <a href="#">
          NERV Blog
        </a>{' '}
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Never is too late to learn to development.{' '}
      </h4>
    </section>
  )
}

export default Intro
