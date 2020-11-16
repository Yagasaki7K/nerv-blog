import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Made with so much love and JS.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:w-1/3">
            <a
              href="https://github.com/nerv-opensource" target="_blank "
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              View the code on Github
            </a>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:w-1/4">
            <a
              href="https://discord.gg/pZdN8jTmKA" target="_blank "
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Join us to Discord
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
