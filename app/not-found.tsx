import Link from 'next/link';

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[38rem]">
      <h2 className="text-4xl font-semibold">
        404 - Page Not Found
      </h2>
      <p className="my-8">
        Oops! The page you are looking for does not exist.
      </p>
      <div className='flex gap-10'>
        <Link href='/' className="btn btn-neutral">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
          </svg>
          Back to Home
        </Link>
        <Link href='/docs' className="btn btn-neutral min-w-60 sm:min-w-44">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" strokeWidth="2" d="M14 1v7h7m0 15H3V1h12l3 3l3 3v16Z"/>
          </svg>
          Documentation
        </Link>
      </div>
    </section>
  );
};

export default NotFound;