import { 
  FaInstagram, 
  FaGithub, 
  FaLinkedin, 
  FaFacebook, 

} from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h5>
              <span className="text-blue-400 text-2xl font-bold">ADRS</span><br />Advanced Digital & Reliable Solutions
            </h5>
            <p className="text-gray-400">
              Innovating the future with cutting-edge technology solutions for your business.
            </p>
             <div className="flex space-x-4 icon_width">
              <a href="https://www.instagram.com/adrstechno?igsh=MWhjOGdvdXpzOXBwYg==" className="text-gray-400 hover:text-white transition" aria-label="Instagram">
                <FaInstagram className="w-5 h-6" />
              </a>
              <a href="https://github.com/adrstechno" className="text-gray-400 hover:text-white transition" aria-label="GitHub">
                <FaGithub className="w-5 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/adrs-technology/" className="text-gray-400 hover:text-white transition" aria-label="LinkedIn">
                <FaLinkedin className="w-5 h-6" />
              </a>
              <a href="https://www.instagram.com/adrstechno?igsh=MWhjOGdvdXpzOXBwYg==" className="text-gray-400 hover:text-white transition" aria-label="Facebook">
                <FaFacebook className="w-5 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/services" className="hover:text-white transition">Services</a></li>
              <li><a href="/product" className="hover:text-white transition">Products</a></li>
              <li><a href="/career" className="hover:text-white transition">Career</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/services" className="hover:text-white transition">Web Development</a></li>
              <li><a href="/services" className="hover:text-white transition">Mobile App Development</a></li>
              <li><a href="/services" className="hover:text-white transition">Software Development</a></li>
              <li><a href="/services" className="hover:text-white transition">Digital Marketing</a></li>
              <li><a href="/services" className="hover:text-white transition">Graphic Designing</a></li>
              
             
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <address className="not-italic text-gray-400 space-y-2">
              <p> ADRS Technosoft Office , 71,Dadda Nagar ,Jabalpur, India </p>
              <p>Jabalpur, MP 482002</p>
              <p>Email: support@adrstechno.com</p>
              <p>Phone: (+91) 9201347033</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ADRS PVT LTD. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy-policy" className="text-sm hover:underline">Privacy Policy</a>

            <a href="/terms" className="text-sm hover:underline">Terms of Service</a>

            <a href="/cookies-policy" className="text-sm hover:underline">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;