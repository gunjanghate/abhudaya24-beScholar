import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
        <>
        {/* Main Section */}
        <section className="flex justify-center items-center p-20 bg-white">
          <div className="image-container mr-10">
          <Image
          src="https://drive.google.com/uc?export=download&id=1Mw0EcZHPZRRmK6SPwtBjMTNqYlaizVmL"
          width={300}
          height={300}
          />
          </div>
          <div className="section-right max-w-xl text-left mt-32"> {/* mt-32 for spacing */}
            <div className="write mb-5">
              <span className="ask">
                <span className="text-orange-500 text-5xl">Welcome,</span>
              </span>
              <br />
              <span className="ans">
                <span className="text-blue-500 font-bold text-3xl">
                  Students and scholarship enthusiasts, to the world of{' '}
                </span>
                <span className="text-orange-500 text-4xl">Be a Scholar!</span>
              </span>
              <br />
              <span className="cont text-lg">
                This platform is designed to help you find the best scholarships that match your educational and career goals.
                Whether you are a high school student or a university scholar, we are here to guide you in exploring scholarship
                opportunities and taking the next step towards your dreams.
              </span>
            </div>
            <div className="direct mt-8">
              <button className="button bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-bold hover:bg-orange-500">
                <Link href="/pages/form">Explore Scholarships →</Link> 
              </button>
            </div>
          </div>
        </section>
      </>
  );
}
