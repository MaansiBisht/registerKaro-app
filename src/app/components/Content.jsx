'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faCheck, faSmile, faUserSecret, faUserTie } from '@fortawesome/free-solid-svg-icons';

const companies = [
  { id: 1, name: 'Oracle', logoUrl: 'oracle.png' },
  { id: 2, name: 'Morpheus', logoUrl: 'morpheus.png' },
  { id: 3, name: 'Samsung', logoUrl: 'samsung.png' },
];

function Content() {
  const [companyDetails, setCompanyDetails] = useState(null);

  const handleClick = async (companyId) => {
    try {
      const response = await fetch(`/api/companies/${companyId}`);

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setCompanyDetails(data);
      } else {
        console.log('Failed to fetch company details');
      }
    } catch (error) {
      console.log('Error fetching company details:', error);
    }
  };

  return (
    <div className='bg-white text-black'>
      <section className="bg-white container mx-auto px-4 py-16 flex flex-col items-center">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-black text-center">Your trusted partner for compliance business needs</h1>
          <p className="text-lg text-gray-600">
            An online business compliance platform that helps entrepreneurs and other individuals with various registrations, tax filings, and other legal matters.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row space-y-6 lg:space-x-8 lg:space-y-0 mb-8 items-center lg:items-start">
          <div className="flex items-center space-x-2">
            <i className="fas fa-star w-6 h-6 text-gray-500"></i>
            <span className="text-xl font-semibold text-black">4.5+</span>
            <span className="text-gray-500">Customer Rating</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-users w-6 h-6 text-gray-500"></i>
            <span className="text-xl font-semibold text-black">20,000+</span>
            <span className="text-gray-500">Clients</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-chart-line w-6 h-6 text-gray-500"></i>
            <span className="text-xl font-semibold text-black">99.8%</span>
            <span className="text-gray-500">Financial Stability</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-16 justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md w-full sm:w-auto">
            Talk An Expert
          </button>
          <button className="border border-blue-500 text-blue-500 px-6 py-3 rounded-md w-full sm:w-auto hover:bg-blue-500 hover:text-white">
            See how it works
          </button>
        </div>
        <div>
          <div className="flex flex-wrap justify-center cursor-pointer">
            {companies.map((company) => (
              <img
                key={company.id}
                src={company.logoUrl}
                alt={company.name}
                className="w-38 h-8 mx-2"
                onClick={() => handleClick(company.id)}
              />
            ))}
          </div>

          {companyDetails && (
            <div className="mt-4 p-4 border rounded-lg shadow-lg">
              {/* Company Details */}
              <div className="mb-6">
                <h2 className="text-3xl font-semibold text-gray-800">{companyDetails.company.name}</h2>
                <p className="text-gray-600 mt-2">{companyDetails.company.details}</p>
              </div>

              {/* Directors List */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">Directors</h3>
                <ul className="mt-4 space-y-2">
                  {companyDetails.directors.map((director) => (
                    <li key={director.id} className="flex items-center space-x-3">
                      {/* Director Avatar */}
                      <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                        <span className="text-white text-lg">{director.director_name[0]}</span>
                      </div>
                      {/* Director Name */}
                      <span className="text-lg text-gray-700">{director.director_name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto py-16 px-4 min-h-screen">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">About <span className='text-orange-500'>RegisterKaro</span></h2>
            <p className="text-gray-700">
              We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years and I'm extremely pleased with their performance, ability to execute, and willingness to adapt in our ever-changing environment. Perry is an outstanding leader who is fanatical about customer satisfaction. He has built a solid team which has consistently delivered on projects thereby exceeding everyone's expectations.
            </p>
            <p className="mt-4">I would strongly recommend their services to any organization that is looking for solid, reliable, and predictable outcomes.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4">Learn More</button>
          </div>
          <div className="md:w-1/2">
            <img src="about-us.png" alt="About Us" className="w-full h-full" />
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16 px-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">Why Choose Register Karo</h2>
      <p className="text-center text-gray-700 mb-8">
        It is with consistent services and results that build trust with the people and that in turn help us to serve the business better.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 rounded-lg p-6 text-center">
          <FontAwesomeIcon icon={faUserSecret} className="w-10 h-10 text-blue-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Confidential & Safe</h3>
          <p className="text-gray-500">All your private information is safe with us</p>
        </div>

        <div className="bg-green-50 rounded-lg p-6 text-center">
          <FontAwesomeIcon icon={faCheck} className="w-10 h-10 text-green-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No Hidden Fee</h3>
          <p className="text-gray-500">Everything is put before you with no hidden charges or conditions</p>
        </div>

        <div className="bg-yellow-50 rounded-lg p-6 text-center">
          <FontAwesomeIcon icon={faSmile} className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Guaranteed Satisfaction</h3>
          <p className="text-gray-500">We ensure that you stay 100% satisfied with our offered services</p>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 text-center">
          <FontAwesomeIcon icon={faUserTie} className="w-10 h-10 text-blue-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Expert CA/CS Assistance</h3>
          <p className="text-gray-500">Prompt support from our in-house expert professionals</p>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 text-center">
          <FontAwesomeIcon icon={faUserSecret} className="w-10 h-10 text-blue-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Confidential & Safe</h3>
          <p className="text-gray-500">All your private information is safe with us</p>
        </div>
      </div>
    </section>

      <section className="bg-blue-900 mx-auto py-16 px-4 text-white flex items-center">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between px-4">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-2xl font-bold mb-4">Our Video Introductions</h1>
            <p className="text-sm mb-8 text-gray-400">
              Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt apis dui.
            </p>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <div>
                  <h2 className="text-sm font-semibold mb-2">Explore Ideas Together</h2>
                  <p className="text-gray-400">
                    Engage audience segments and finally create actionable insights. Amplify vertical integration.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div>
                  <h2 className="text-sm font-semibold mb-2">Bring Those Ideas to Life</h2>
                  <p className="text-gray-400">
                    Engage audience segments and finally create actionable insights. Amplify vertical integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center lg:order-last">
            <img src="ss1.png" alt="Video Introduction" className="w-full lg:w-4/5" />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Frequent Ask Questions</h2>
          <div className="space-y-4">
            <FaqItem question="Can I recover deleted files from desktop with this software?" />
            <FaqItem question="Can I recover deleted files from desktop with this software?" />
            <FaqItem question="Can I recover deleted files from desktop with this software?" />
            <FaqItem question="Can I recover deleted files from desktop with this software?" />
            <FaqItem question="Can I recover deleted files from desktop with this software?" />
          </div>
          <button className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
            Show More →
          </button>
        </div>
      </section>
    </div>

  );
}

function FaqItem({ question }) {
  return (
    <div className="bg-white rounded-lg p-4 flex justify-between items-center">
      <p className="text-gray-800">{question}</p>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </div>
  );
}

export default Content;
