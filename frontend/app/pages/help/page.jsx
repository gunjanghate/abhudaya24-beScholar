import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const Page = () => {
  return (
    <>
      <Header />
      <div className='min-h-screen'>
        <div className="max-w-4xl mx-auto p-6 bg-white text-gray-800">
          <header className="text-center mb-10 bg-orange-500 p-6 rounded-lg">
            <h1 className="text-white text-4xl font-bold">Scholarship Help Center</h1>
            <p className="text-white mt-2">Your guide to finding and applying for scholarships</p>
          </header>
          
          <section className="mb-8">
            <h2 className="text-orange-500 text-2xl font-semibold border-b-2 border-orange-500 pb-2">What is a Scholarship?</h2>
            <p className="mt-4">
              A scholarship is a financial aid award designed to help students pay for their education. Scholarships are typically awarded based on academic merit, financial need, or other criteria.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-orange-500 text-2xl font-semibold border-b-2 border-orange-500 pb-2">Eligibility Criteria</h2>
            <ul className="list-disc list-inside mt-4">
              <li>Must be enrolled or plan to enroll in an accredited college or university.</li>
              <li>Maintain a minimum GPA (usually 2.5 or higher).</li>
              <li>Demonstrate financial need.</li>
              <li>Meet specific criteria set by the scholarship provider (e.g., field of study, community service).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-orange-500 text-2xl font-semibold border-b-2 border-orange-500 pb-2">How to Apply</h2>
            <p className="mt-4">Follow these steps to successfully apply for scholarships:</p>
            <ol className="list-decimal list-inside mt-4">
              <li>Research scholarships that fit your profile.</li>
              <li>Prepare your documents (transcripts, recommendation letters, etc.).</li>
              <li>Write a compelling scholarship essay.</li>
              <li>Submit your application before the deadline.</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-orange-500 text-2xl font-semibold border-b-2 border-orange-500 pb-2">Tips for Success</h2>
            <p className="mt-4">Enhance your chances of winning scholarships with these tips:</p>
            <ul className="list-disc list-inside mt-4">
              <li>Start your search early.</li>
              <li>Tailor your application to each scholarship.</li>
              <li>Get organized with deadlines and requirements.</li>
              <li>Seek feedback on your essays and applications.</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
