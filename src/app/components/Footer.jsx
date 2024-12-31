export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-10 mt-10 pl-3">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col mb-8 lg:mb-0">
          <p className="text-sm text-left text-wrap w-full lg:w-1/2">
            Design outstanding interfaces with advanced Figma features in a matter of minutes.
          </p>
          <div className="flex space-x-2 mt-4">
            <a href="#" className="text-xl"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-xl"><i className="fab fa-google"></i></a>
            <a href="#" className="text-xl"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        <div className="flex flex-col space-y-2 mb-8 lg:mb-0 ml-2">
          <h3 className="text-xs font-bold text-yellow-300">START A BUSINESS</h3>
          <ul className="list-none">
            <li><a href="#" className="hover:text-gray-200 text-xs">Features</a></li>
            <li><a href="#" className="hover:text-gray-200 text-xs">Solutions</a></li>
            <li><a href="#" className="hover:text-gray-200 text-xs">Integrations</a></li>
            <li><a href="#" className="hover:text-gray-200 text-xs">Enterprise Solutions</a></li>
          </ul>
        </div>

        <div className="flex flex-col space-y-2 mb-8 lg:mb-0 ml-2">
          <h3 className="text-xs font-bold text-yellow-300">GOVERNMENT REGISTRATION</h3>
          <ul className="list-none">
            <li><a href="#" className="hover:text-gray-200 text-xs">Partners</a></li>
            <li><a href="#" className="hover:text-gray-200 text-xs">Community</a></li>
            <li><a href="#" className="hover:text-gray-200 text-xs">Developers</a></li>
            <li><a href="#" className="hover:text-gray-200 text-xs">Blog</a></li>
          </ul>
        </div>

        <div className="flex flex-col space-y-2 mb-8 lg:mb-0 ml-2">
          <h3 className="text-xs font-bold  text-yellow-300">COMPLIANCE & TAX</h3>
          <ul className="list-none">
            <li><a href="#" className="hover:text-gray-200 text-xs">Channels</a></li>
            <li><a href="#" className="hover:text-gray-200 text-xs">Scale</a></li>
            <li><a href="#" className="hover:text-gray-200 text-xs">Watch the Demo</a></li>
            <li><a href="#" className="hover:text-gray-200 text-xs">Our Competition</a></li>
          </ul>
        </div>

        <div className="flex flex-col space-y-2 ml-2">
          <h3 className="text-xs font-bold text-yellow-300">BIS & CDSCO</h3>
          <ul className="list-none">
            <li><a href="#" className="hover:text-gray-200 text-xs">About Us</a></li>
            <li><a href="#" className="hover:text-gray-200 text-xs">News</a></li>
            <li><a href="#" className="hover:text-gray-200 text-xs">Leadership</a></li>
            <li><a href="#" className="hover:text-gray-200 text-xs">Media Kit</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-4">
        <a href="#" className="text-2xl"><i className="fas fa-chevron-up"></i></a>
      </div>

      <div className="text-center mt-4 pb-5 pt-5">
        <p className="text-xs">&copy; 2024 Registerkaro. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
