import Link from 'next/link';

import PageHeader from '../components/PageHeader';
import SectionTitle from './_components/SectionTitle';
import { sideLinks } from './sideLinks';

const Docs = () => {
  return (
    <main className='flex'>
      <aside className='px-5 hidden sm:inline pt-10 min-w-60'>
        <ul className="menu gap-1 text-base-content sticky top-5">
          {
            sideLinks.map(link => 
              <li key={link.path}>
                <Link 
                  href={`#${link.path}`}
                  className='text-sm lg:text-lg'
                >
                  {link.title}
                </Link>
              </li>
            )
          }
        </ul>
      </aside>
      <section className='flex flex-col pt-14 pb-24 gap-16 px-5'>
        <PageHeader title='Documentation' />

        <section id=''>
          <SectionTitle content='Getting Started' scrollToId='getting-started' />
          <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus provident perspiciatis impedit laboriosam sapiente, ab debitis error ex. Sit vitae inventore architecto nesciunt temporibus officia praesentium. Nulla deleniti placeat cupiditate, voluptate enim obcaecati corrupti expedita nesciunt iste architecto facilis ad quaerat sequi accusamus quo eius quisquam at harum voluptates tempore.</p>
          <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugit blanditiis cupiditate! Vitae perspiciatis mollitia esse facere ipsum ratione impedit laudantium dicta ipsam quasi, recusandae porro, doloribus officiis fugit nihil.</p>
        </section>
        <section id=''>
          <SectionTitle content='Getting Started' scrollToId='' />
          <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus provident perspiciatis impedit laboriosam sapiente, ab debitis error ex. Sit vitae inventore architecto nesciunt temporibus officia praesentium. Nulla deleniti placeat cupiditate, voluptate enim obcaecati corrupti expedita nesciunt iste architecto facilis ad quaerat sequi accusamus quo eius quisquam at harum voluptates tempore.</p>
          <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugit blanditiis cupiditate! Vitae perspiciatis mollitia esse facere ipsum ratione impedit laudantium dicta ipsam quasi, recusandae porro, doloribus officiis fugit nihil.</p>
        </section>
        <section id=''>
          <SectionTitle content='Getting Started' scrollToId='' />
          <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus provident perspiciatis impedit laboriosam sapiente, ab debitis error ex. Sit vitae inventore architecto nesciunt temporibus officia praesentium. Nulla deleniti placeat cupiditate, voluptate enim obcaecati corrupti expedita nesciunt iste architecto facilis ad quaerat sequi accusamus quo eius quisquam at harum voluptates tempore.</p>
          <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugit blanditiis cupiditate! Vitae perspiciatis mollitia esse facere ipsum ratione impedit laudantium dicta ipsam quasi, recusandae porro, doloribus officiis fugit nihil.</p>
        </section>
      </section>
    </main>
  );
};

export default Docs;