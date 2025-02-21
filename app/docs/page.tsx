import Link from 'next/link';

import PageHeader from '../components/PageHeader';
import SectionTitle from './_components/SectionTitle';
import { sections } from './Sections';
import { Metadata } from 'next';

const Docs = () => {
  return (
    <main className='flex'>
      <aside className='hidden sm:inline py-10 px-2 min-w-60'>
        <ul className="menu gap-1 text-base-content sticky top-5 border-r border-gray-400 min-h-screen border-solid">
          {
            sections.map(link => 
              <li key={link.path}>
                <Link 
                  href={`#${link.path}`}
                  className={`
                    text-base font-light
                    ${link.isCategoryTitle ? 'font-semibold lg:text-lg' : 'pl-7'}
                  `}
                >
                  {link.listTitle}
                </Link>
              </li>
            )
          }
        </ul>
      </aside>
      <section className='flex flex-col pt-14 pb-24 gap-16 px-5 max-w-full xl:max-w-7xl xl:pl-10'>
        <PageHeader title='Documentation' />
        {
          sections.map(link => 
            <section key={link.path} id={link.path}>
              <SectionTitle content={link.sectionTitle ? link.sectionTitle : link.listTitle} scrollToId={link.path} />
              {typeof link.content === 'string' ? <p>{link.content}</p> : link.content}
            </section>
          )
        }
      </section>
    </main>
  );
};

export const metadata: Metadata = {
  title: 'Time Loops API - Documentation',
  description: 'Learn how to utilize Time Loops API effectively. Explore endpoints, request parameters, and response formats to integrate seamlessly into your applications.'
};

export default Docs;