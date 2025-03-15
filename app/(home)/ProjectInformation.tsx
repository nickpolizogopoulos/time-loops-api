import Image from 'next/image';
import Link from 'next/link';

const ProjectInformation = () => {
  return (
    <section className="flex justify-center items-center xl:items-start flex-col-reverse xl:flex-row gap-20 xl:gap-40 mb-28">
        <Image
            src='/undraw_add-information_06qr.svg'
            alt='"Add Information" by unDraw - Katerina Limpitsouni'
            title='"Add Information" by unDraw - Katerina Limpitsouni'
            width={600} height={600}
        />
        <div className='text-center xl:text-start'>
            <h1 className='text-4xl font-semibold mb-5 text-center'>
                Full CRUD - Powered by Next.js
            </h1>
            <p className='max-w-fit xl:max-w-lg mb-5'>
                ⚬ Time Loops API gives you the{' '}
                <span className='font-semibold'>
                    full power of CRUD — Create, Read, Update, Delete
                </span>{' '}
                — effortlessly!
            </p>
            <p className='max-w-fit xl:max-w-lg mb-5'>
                ⚬ <span className='font-semibold'>
                    Blazing fast, always online, and 100% free!
                </span>{' '}
                Build, test, and scale your apps with real world API data — no setup required!
            </p>
            <p className='max-w-fit xl:max-w-lg mb-10'>
                ⚬ Four categories with{' '}
                <span className='font-semibold'>more to come!</span>{' '}
                Hit Time Loops API endpoints and get your real data!
            </p>
            <Link href='docs' className="btn btn-neutral w-[150px]">Show me!</Link>
        </div>
    </section>
  );
};

export default ProjectInformation;