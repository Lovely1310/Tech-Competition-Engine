import React from 'react';
import { motion } from 'framer-motion';

const ResourcesAndContact = () => {
  const resources = [
    {
      title: "2025 Developer Skills Report",
      image: "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/67d48e70199a4e774ff10a21_2025devskillsreport-p-2000.png"
    },
    {
      title: "Research: HackerRank tests \"invisible\" interview tools", 
      image: "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/67622f749230f78408bca155_Guides%2025%20-%20HackerRank_Growing-Tech-1024x696.png"
    },
    {
      title: "The Hiring Crisis in an AI-driven world",
      image: "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/67d48e2bb88e5d56192d692f_hiring%20crisis%20meta%20image.jpg"
    }
  ];

  return (
    <section
      id="contact-section"
      className="py-20 text-white"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(120deg, #b31217 0%, #e96443 40%, #fbc531 100%)',
      }}
    >
      <div className="container mx-auto px-6">
        {/* Resources */}
        <div className="mb-20">
          <h3 className="text-5xl font-extrabold text-center mb-12" style={{ 
            fontFamily: 'Playfair Display, serif',
            background: 'linear-gradient(90deg, #FDB813, #FFD700, #FDB813)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            textShadow: '0 2px 10px rgba(253, 184, 19, 0.4)',
          }}>Resources</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="relative rounded-2xl overflow-hidden shadow-lg group transform hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <img 
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-48 md:h-80 object-contain bg-white transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h4 className="text-xl font-semibold text-white group-hover:text-yellow-300 transition-colors duration-300" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {resource.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              See HackerRank In{' '}
              <motion.span
                className="font-bold"
                style={{ fontFamily: 'DotGothic16, Space Grotesk, sans-serif' }}
                animate={{
                  color: [
                    '#475569', // slate-600
                    '#5b21b6', // violet-800
                    '#1e3a8a', // blue-800
                    '#374151', // slate-700
                    '#475569', // slate-600
                  ],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: 'linear',
                  repeatType: 'mirror',
                }}
              >
                Action
              </motion.span>
            </h2>
            <p className="text-xl text-gray-900 leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>
              We've helped companies hire millions of developers, and along the way we've learned 
              that hiring processes are more effective when they're tailored for the nuances of each role.
            </p>
          </div>
          
          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700 p-8 md:p-12 rounded-2xl shadow-2xl shadow-black/30">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Business Email*</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="you@company.com"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">First Name*</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Last Name*</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Company Name*</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Job Title*</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Company Size*</label>
                  <select className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200">
                    <option>Please select...</option>
                    <option>1-100</option>
                    <option>101-500</option>
                    <option>501-1000</option>
                    <option>1001-5000</option>
                    <option>5001-10000</option>
                    <option>10000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Country*</label>
                  <select className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200">
                    <option>Please select...</option>
                    <option>Afghanistan</option>
                    <option>Albania</option>
                    <option>Algeria</option>
                    <option>Andorra</option>
                    <option>Angola</option>
                    <option>Antigua and Barbuda</option>
                    <option>Argentina</option>
                    <option>Armenia</option>
                    <option>Australia</option>
                    <option>Austria</option>
                    <option>Azerbaijan</option>
                    <option>Bahamas</option>
                    <option>Bahrain</option>
                    <option>Bangladesh</option>
                    <option>Barbados</option>
                    <option>Belarus</option>
                    <option>Belgium</option>
                    <option>Belize</option>
                    <option>Benin</option>
                    <option>Bhutan</option>
                    <option>Bolivia</option>
                    <option>Bosnia and Herzegovina</option>
                    <option>Botswana</option>
                    <option>Brazil</option>
                    <option>Brunei</option>
                    <option>Bulgaria</option>
                    <option>Burkina Faso</option>
                    <option>Burundi</option>
                    <option>Cabo Verde</option>
                    <option>Cambodia</option>
                    <option>Cameroon</option>
                    <option>Canada</option>
                    <option>Central African Republic</option>
                    <option>Chad</option>
                    <option>Chile</option>
                    <option>China</option>
                    <option>Colombia</option>
                    <option>Comoros</option>
                    <option>Congo, Democratic Republic of the</option>
                    <option>Congo, Republic of the</option>
                    <option>Costa Rica</option>
                    <option>Cote d'Ivoire</option>
                    <option>Croatia</option>
                    <option>Cuba</option>
                    <option>Cyprus</option>
                    <option>Czech Republic</option>
                    <option>Denmark</option>
                    <option>Djibouti</option>
                    <option>Dominica</option>
                    <option>Dominican Republic</option>
                    <option>East Timor (Timor-Leste)</option>
                    <option>Ecuador</option>
                    <option>Egypt</option>
                    <option>El Salvador</option>
                    <option>Equatorial Guinea</option>
                    <option>Eritrea</option>
                    <option>Estonia</option>
                    <option>Eswatini</option>
                    <option>Ethiopia</option>
                    <option>Fiji</option>
                    <option>Finland</option>
                    <option>France</option>
                    <option>Gabon</option>
                    <option>Gambia</option>
                    <option>Georgia</option>
                    <option>Germany</option>
                    <option>Ghana</option>
                    <option>Greece</option>
                    <option>Grenada</option>
                    <option>Guatemala</option>
                    <option>Guinea</option>
                    <option>Guinea-Bissau</option>
                    <option>Guyana</option>
                    <option>Haiti</option>
                    <option>Honduras</option>
                    <option>Hungary</option>
                    <option>Iceland</option>
                    <option>India</option>
                    <option>Indonesia</option>
                    <option>Iran</option>
                    <option>Iraq</option>
                    <option>Ireland</option>
                    <option>Israel</option>
                    <option>Italy</option>
                    <option>Jamaica</option>
                    <option>Japan</option>
                    <option>Jordan</option>
                    <option>Kazakhstan</option>
                    <option>Kenya</option>
                    <option>Kiribati</option>
                    <option>Korea, North</option>
                    <option>Korea, South</option>
                    <option>Kosovo</option>
                    <option>Kuwait</option>
                    <option>Kyrgyzstan</option>
                    <option>Laos</option>
                    <option>Latvia</option>
                    <option>Lebanon</option>
                    <option>Lesotho</option>
                    <option>Liberia</option>
                    <option>Libya</option>
                    <option>Liechtenstein</option>
                    <option>Lithuania</option>
                    <option>Luxembourg</option>
                    <option>Madagascar</option>
                    <option>Malawi</option>
                    <option>Malaysia</option>
                    <option>Maldives</option>
                    <option>Mali</option>
                    <option>Malta</option>
                    <option>Marshall Islands</option>
                    <option>Mauritania</option>
                    <option>Mauritius</option>
                    <option>Mexico</option>
                    <option>Micronesia</option>
                    <option>Moldova</option>
                    <option>Monaco</option>
                    <option>Mongolia</option>
                    <option>Montenegro</option>
                    <option>Morocco</option>
                    <option>Mozambique</option>
                    <option>Myanmar (Burma)</option>
                    <option>Namibia</option>
                    <option>Nauru</option>
                    <option>Nepal</option>
                    <option>Netherlands</option>
                    <option>New Zealand</option>
                    <option>Nicaragua</option>
                    <option>Niger</option>
                    <option>Nigeria</option>
                    <option>North Macedonia</option>
                    <option>Norway</option>
                    <option>Oman</option>
                    <option>Pakistan</option>
                    <option>Palau</option>
                    <option>Palestine</option>
                    <option>Panama</option>
                    <option>Papua New Guinea</option>
                    <option>Paraguay</option>
                    <option>Peru</option>
                    <option>Philippines</option>
                    <option>Poland</option>
                    <option>Portugal</option>
                    <option>Qatar</option>
                    <option>Romania</option>
                    <option>Russia</option>
                    <option>Rwanda</option>
                    <option>Saint Kitts and Nevis</option>
                    <option>Saint Lucia</option>
                    <option>Saint Vincent and the Grenadines</option>
                    <option>Samoa</option>
                    <option>San Marino</option>
                    <option>Sao Tome and Principe</option>
                    <option>Saudi Arabia</option>
                    <option>Senegal</option>
                    <option>Serbia</option>
                    <option>Seychelles</option>
                    <option>Sierra Leone</option>
                    <option>Singapore</option>
                    <option>Slovakia</option>
                    <option>Slovenia</option>
                    <option>Solomon Islands</option>
                    <option>Somalia</option>
                    <option>South Africa</option>
                    <option>South Sudan</option>
                    <option>Spain</option>
                    <option>Sri Lanka</option>
                    <option>Sudan</option>
                    <option>Suriname</option>
                    <option>Sweden</option>
                    <option>Switzerland</option>
                    <option>Syria</option>
                    <option>Taiwan</option>
                    <option>Tajikistan</option>
                    <option>Tanzania</option>
                    <option>Thailand</option>
                    <option>Togo</option>
                    <option>Tonga</option>
                    <option>Trinidad and Tobago</option>
                    <option>Tunisia</option>
                    <option>Turkey</option>
                    <option>Turkmenistan</option>
                    <option>Tuvalu</option>
                    <option>Uganda</option>
                    <option>Ukraine</option>
                    <option>United Arab Emirates</option>
                    <option>United Kingdom</option>
                    <option>United States</option>
                    <option>Uruguay</option>
                    <option>Uzbekistan</option>
                    <option>Vanuatu</option>
                    <option>Vatican City</option>
                    <option>Venezuela</option>
                    <option>Vietnam</option>
                    <option>Yemen</option>
                    <option>Zambia</option>
                    <option>Zimbabwe</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Which HackerRank products are you interested in?*</label>
                <select className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200">
                  <option>Please select...</option>
                  <option>Hiring solutions for my organization</option>
                  <option>Upskilling solutions for my organization</option>
                  <option>Learning solutions for myself</option>
                </select>
              </div>
              
              <p className="text-sm text-slate-400">
                By clicking Schedule a demo below you confirm that you have read and agree to HackerRank's 
                <a href="#" className="text-green-400 hover:text-green-300"> Privacy Policy</a>
              </p>
              
              <div className="flex justify-center pt-4">
                <button 
                  type="submit" 
                  className="w-auto px-10 py-3 bg-purple-600 hover:bg-black-500 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-600/30 hover:shadow-green-500/50"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Schedule a demo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesAndContact;