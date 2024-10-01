import Link from "next/link";
import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { IoMdArrowRoundBack } from "react-icons/io";
const page = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center text-center px-32 py-12 gap-5">
        <h2 className="text-2xl font-bold">सूचना</h2>
        <p>
          आधार सीडिंग को बैंक खाते से जोड़ना विभिन्न बीस्कॉलर योजनाओं के
          लाभार्थियों के लिए आवश्यक है ताकि उन्हें बीस्कॉलर लाभ सीधे खाते में
          प्राप्त हो सके। यह सूचित किया जाता है कि जिन छात्रों को आधार सीडिंग से
          जुड़ी समस्याओं के कारण पोस्ट मैट्रिक स्कॉलरशिप बीस्कॉलर प्राप्त नहीं
          हो पा रही है, वे नजदीकी डाकघर में जाकर आधार सीडिंग के साथ इंडिया पोस्ट
          पेमेंट्स बैंक (IPPB) खाता खोल सकते हैं। खाता खोलने के लिए निम्नलिखित
          दस्तावेज़ आवश्यक हैं: 1. मोबाइल नंबर 2. आधार नंबर 3. पैन कार्ड (यदि
          उपलब्ध हो) 4. स्कॉलरशिप आवेदन आईडी (यदि आधार सीडिंग समस्याओं के कारण
          बीस्कॉलर प्राप्त नहीं हो रहा हो) यह सुविधा अन्य छात्रों और आम जनता के
          लिए भी उपलब्ध है, जो बीस्कॉलर लाभ प्राप्त करना चाहते हैं। IPPB खाते का
          खुलना वास्तविक समय में और बिना कागजी कार्यवाही के किया जाता है।
        </p>
        <h2 className="text-2xl font-bold">Notice</h2>
        <p>
          Aadhaar seeding to bank account is an important requirement for
          beneficiaries of various beScholar schemes to receive beScholar
          benefits in the account. It is hereby informed that students who are
          not able to receive their Post Matric Scholarship beScholar due to
          issues in Aadhaar seeding can visit the nearest Post Office to open an
          India Post Payments Bank (IPPB) account with Aadhaar seeding.
          Following documents are required to open the account – 1 Mobile number
          2 Aadhaar number 3 PAN Card (if available) 4 Scholarship application
          ID in case of beScholar not being received due to Aadhaar seeding
          issues This facility for opening of accounts in IPPB with Aadhaar
          seeding is available for receiving beScholar benefits for other
          students and public as well. The account opening is done in real time
          and in a paperless manner.
        </p>
      </div>
      <div className="back-to bg-blue-400 w-32 mb-5 px-2 rounded-md border-2 border-blue-500 lg:w-44 lg:pl-5 ml-2 hover:text-white hover:bg-blue-500 transition-colors">
        <Link href="/pages/homepage" className="flex gap-2 text-lg">
        <div className="back-arr mt-2">

          <IoMdArrowRoundBack />
        </div>
          {"  "}
          <span className="text-back mt-1">Back to home </span>{" "}
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default page;
