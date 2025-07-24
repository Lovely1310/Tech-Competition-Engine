import React, { useState } from 'react';
import DevelopersNavbar from '../components/DeveloperNavbar';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);
  const [openPlanFeature, setOpenPlanFeature] = useState(null);

  const pricingPlans = [
    {
      name: 'Starter',
      monthlyPrice: '$165/mo',
      annualPrice: '$1,990 billed annually',
      features: [
        '1 user',
        'Access to Screen + Interview',
        'Advanced plagiarism detection',
        '2000+ questions',
        '120 attempts per year',
        '$15 per additional attempt',
      ],
      buttonText: 'Buy Now',
      isPro: false,
    },
    {
      name: 'Pro',
      monthlyPrice: '$375/mo',
      annualPrice: '$4,490 billed annually',
      features: [
        'Everything in Starter plus:',
        'Unlimited users',
        'Integrations:',
        'ATS: Greenhouse, Lever, Ashby',
        'Calendar: Google & Outlook',
        '4000+ questions',
        '300 attempts per year',
        '$15 per additional attempt',
        'Ability to pre-purchase additional attempts at checkout (annual plan only)',
      ],
      buttonText: 'Buy Now',
      isPro: true,
    },
    {
      name: 'Enterprise',
      monthlyPrice: 'Custom Pricing',
      annualPrice: 'Custom Pricing',
      features: [
        'Custom users and attempts',
        'Certified assessments',
        '40+ Integrations (including Workday, Oracle, and Eightfold)',
        'Full library of 7500+ questions',
        'Advanced user roles and permissions',
        'Test up to 100k candidates at once',
        'Designated account manager',
        'Access to Professional Services',
        'Single sign on (SSO/SCIM)',
        'Premium support',
      ],
      buttonText: 'Contact Us',
      isPro: false,
    },
  ];

  const featureComparisonData = [
    {
      feature: 'User Licenses',
      Starter: '1',
      Pro: 'Unlimited',
      Enterprise: 'Custom Quantities and Roles',
    },
    {
      feature: 'Attempts',
      Starter: 'Includes 120 attempts per year',
      Pro: 'Includes 300 attempts per year',
      Enterprise: 'Custom number of attempts',
    },
    { feature: 'Coding tests', Starter: true, Pro: true, Enterprise: true },
    { feature: 'Coding interviews', Starter: true, Pro: true, Enterprise: true },
    { feature: 'Plagiarism detection', Starter: true, Pro: true, Enterprise: true },
    { feature: 'Leaked-question detection', Starter: true, Pro: true, Enterprise: true },
    { feature: 'Real-world questions', Starter: true, Pro: true, Enterprise: true },
    { feature: 'Code reviews', Starter: true, Pro: true, Enterprise: true },
    { feature: 'Insights', Starter: true, Pro: true, Enterprise: true },
    { feature: 'Email & chat support', Starter: true, Pro: true, Enterprise: true },
    { feature: 'Customer success team', Starter: false, Pro: false, Enterprise: true },
    { feature: 'API access', Starter: false, Pro: false, Enterprise: true },
    {
      feature: 'Integrations',
      Starter: '',
      Pro: 'ATS: Greenhouse, Lever, Ashby; Calendar: Google & Outlook',
      Enterprise: '40+',
    },
    { feature: 'Single sign-on (SSO)', Starter: false, Pro: false, Enterprise: true },
    { feature: 'Archiving', Starter: false, Pro: false, Enterprise: true },
  ];

  const faqData = [
    {
      question: 'What are attempts?',
      answer: 'Attempts are the measurement of your use of HackerRank. When a candidate completes your Screen take-home assessment that counts as one attempt. When you interview a candidate, that also counts as an attempt. Sending a candidate an Invite to take an assessment does not count as an actual attempt. Starter and Pro subscription plans come with a set number of attempts. Any usage beyond what\'s included will be charged to your saved payment method at the end of your billing cycle or after you\'ve accumulated 25 extra attempts, whichever comes first.',
    },
    {
      question: 'What questions are included?',
      answer: 'Every plan comes with access to at least 1 question for every question type HackerRank offers. This allows each plan to be able to assess all Roles and Skills. HackerRank supports 14 different question types across 3 categories: general, programming, and real-world questions.',
    },
    {
      question: 'What is Screen?',
      answer: 'HackerRank Screen consists of skill-based coding tests to assess how well a developer can code. Companies find that including a technical screening phase in their hiring process helps them hire faster and make better hires.',
    },
    {
      question: 'What are Interview?',
      answer: 'HackerRank Interviews allow you and your candidates to simultaneously edit code, share files, and collaborate via chat and video - all within your browser. The platform comes with hiring-specific tools like code playback, scorecards, and a candidate lobby.',
    },
    {
      question: 'What are real-world questions?',
      answer: 'Real-world questions allow you to assess candidates in a sandboxed environment similar to what they use on the job. Unlike general coding questions, our real-world experience lets candidates work through extended problems and carry content forward from one challenge to the next.',
    },
    {
      question: 'What training and support are available?',
      answer: 'The HackerRank Academy provides on-demand training videos and recorded webinars for customers looking to learn more about using HackerRank. All customers also have access to technical support through articles, documentation, and email/chat with our support team. Beyond self-serve options, customers who choose the Custom plan have access to customer success and solution engineering support for services like test creation guidance, integration support, and onboarding.',
    },
  ];

  const FeatureCell = ({ value }) => {
    if (value === true) {
      return (
        <svg
          className="h-6 w-6 text-green-400 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      );
    } else if (value === false) {
      return (
        <svg
          className="h-6 w-6 text-gray-500 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      );
    }
    return <span className="text-gray-300 text-sm text-center block">{value}</span>;
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const togglePlanFeature = (index) => {
    setOpenPlanFeature(openPlanFeature === index ? null : index);
  };

  return (
<div className="min-h-screen pt-20 bg-gradient-to-b from-[#0c0c1e] to-[#1b1c2e] text-white">
      <DevelopersNavbar />      
      <div className="px-4 sm:px-6 lg:px-8 flex flex-col items-center py-12">
        <div className="text-center mb-12 max-w-2xl">
          <h1 className="text-4xl font-extrabold mb-4">Our Pricing Plans</h1>
          <p className="text-lg text-gray-300">
            Choose the plan that best fits your needs.
            From interns to experienced hires, evaluate skills for any developer role including:
            software engineer, back-end, front-end, DevOps, data scientist, and QA/SDET.
          </p>
        </div>

        <div className="flex bg-gray-700 rounded-full p-1 mb-12 shadow-inner">
          <button
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer hover:scale-105 ${
              !isAnnual ? 'bg-gray-800 text-white shadow-md' : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setIsAnnual(false)}
          >
            Monthly
          </button>
          <button
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative cursor-pointer hover:scale-105 ${
              isAnnual ? 'bg-blue-500 text-white shadow-md' : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setIsAnnual(true)}
          >
            Annual
            {isAnnual && (
              <span className="absolute -top-2 right-0 bg-blue-400 text-white text-xs px-2 py-0.5 rounded-full transform translate-x-1/2 -translate-y-1/2">
                2 months free
              </span>
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full px-4"> {/* Added px-4 for mobile padding */}
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative flex flex-col p-8 rounded-xl shadow-lg transition-all duration-300
                mx-auto max-w-xs md:max-w-none  // Changed max-w-sm to max-w-xs for more padding
                ${plan.isPro
                  ? 'bg-blue-800 text-white border-2 border-blue-500 transform scale-102 shadow-xl'
                  : 'bg-gray-800 text-white border border-gray-700'}
                hover:-translate-y-2 hover:shadow-2xl
                ${plan.isPro
                  ? 'hover:border-blue-300 hover:ring-2 hover:ring-blue-300 hover:scale-108'
                  : 'hover:border-gray-500 hover:ring-2 hover:ring-gray-500 hover:scale-102'}
                hover:z-10`}
            >
              <h2 className={`text-2xl font-semibold mb-4 ${plan.isPro ? 'text-violet-400' : 'text-white'}`}>
                {plan.name}
              </h2>

              <p className={`text-4xl font-bold mb-2 ${plan.isPro ? 'text-white' : 'text-white'}`}>
                {isAnnual ? plan.annualPrice : plan.monthlyPrice}
              </p>
              <p className="text-sm text-gray-400 mb-6">
                {plan.annualPrice}
              </p>

              <ul className="flex-grow space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className={`flex-shrink-0 h-6 w-6 ${plan.isPro ? 'text-cyan-400' : 'text-green-400'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className={`ml-3 text-base ${plan.isPro ? 'text-gray-200' : 'text-gray-300'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold text-lg transition-all duration-300 cursor-pointer hover:scale-105 ${
                  plan.isPro
                    ? 'bg-cyan-500 text-white hover:bg-cyan-600 shadow-lg'
                    : 'bg-gray-700 text-white border border-gray-600 hover:bg-gray-600'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 w-full max-w-6xl">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Features & Capabilities</h2>
          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto rounded-lg shadow-xl border border-gray-700">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-800">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Feature
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Starter
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Pro
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-900 divide-y divide-gray-700">
                {featureComparisonData.map((row, rowIndex) => (
                  <tr key={rowIndex} className="hover:bg-gray-800 transition-colors duration-200 odd:bg-gray-850">
                    <td className="px-6 py-4 text-sm font-medium text-white">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300 text-center">
                      <FeatureCell value={row.Starter} />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300 text-center">
                      <FeatureCell value={row.Pro} />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300 text-center">
                      <FeatureCell value={row.Enterprise} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Accordion View - Plans as Dropdowns */}
          <div className="md:hidden space-y-4">
            {pricingPlans.map((plan, planIndex) => (
              <div key={plan.name} className="bg-gray-800 rounded-lg shadow-md border border-gray-700">
                <button
                  className="w-full flex justify-between items-center p-5 text-left text-lg font-medium text-white focus:outline-none cursor-pointer hover:bg-gray-700"
                  onClick={() => togglePlanFeature(planIndex)}
                >
                  {plan.name} Plan Features
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      openPlanFeature === planIndex ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {openPlanFeature === planIndex && (
                  <div className="px-5 pb-5 text-gray-300 text-base leading-relaxed space-y-3">
                    {featureComparisonData.map((featureRow, featureIndex) => (
                      <div key={featureIndex} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0">
                        <span className="font-semibold text-gray-400">{featureRow.feature}:</span>
                        <FeatureCell value={featureRow[plan.name]} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 w-full max-w-4xl">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-gray-800 rounded-lg shadow-md border border-gray-700">
                <button
                  className="w-full flex justify-between items-center p-5 text-left text-lg font-medium text-white focus:outline-none cursor-pointer hover:bg-gray-700"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 text-gray-300 text-base leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
