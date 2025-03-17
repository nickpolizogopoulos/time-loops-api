import { Metadata } from "next";
import Link from "next/link";

import {
  imageCredit,
  logoCredit
} from "./credits";

const About = () => {
  return (
    <section className="container mx-auto pt-16 pb-24 px-5  xl:pl-10">

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
        About Time Loops API
      </h1>

      <div className="divider"></div>
      
      <div className='mb-10 flex flex-col gap-3'>
        <h2 className="text-4xl font-semibold mb-5">How & Why</h2>
        <p>Time Loops API is an{' '}
          <Link
            href='https://github.com/nickpolizogopoulos/time-loops-api'
            target='_blank'
            className='link link-primary'
          >
            open source
          </Link>{' '}
          JSON Placeholder / Fake Store API alternative. Time Loops offers{' '}
          <span className="underline">real data</span>{' '}
          and this is what makes it different than the others.
        </p>
        <p>
          The idea came to me after I saw what JSON Placeholder does for the first time, I wanted to create something similar.
          At that point, my skill level was low so I saved the idea in the back of my mind for later.
        </p>
        <p>
          The goal was to start with the very basics of backend development and understand
          how data is delivered via a simple REST API. Luckily, Next.js allows that.
        </p>
        <p>
          As a beginner in{' '}
          <Link className='link link-primary' href='https://nextjs.org' target='_blank'>Next.js</Link>,{' '}
          I thought it would be a great choice to use it for this project and strengthen my exposure to it as well.
          And so, the Time Loops API project began to unfold.
        </p>
        <p>
          This project uses{' '}
          <Link className='link link-primary' href='https://www.typescriptlang.org' target='_blank'>TypeScript</Link>{' '}
          and relies heavily on the{' '}
          <Link className='link link-primary' href='https://v4.daisyui.com' target='_blank'>Daisy UI</Link>{' '}&{' '}
          <Link className='link link-primary' href='https://v3.tailwindcss.com' target='_blank'>Tailwind</Link> combo,{' '}
          it validates data with{' '}
          <Link className='link link-primary' href='https://zod.dev' target='_blank'>Zod</Link>{' '}
          and is hosted on{' '}
          <Link className='link link-primary' href='https://vercel.com' target='_blank'>Vercel</Link>.
        </p>
      </div>

      <div className='flex flex-col gap-3 mb-6'>
        <h2 className="text-4xl font-semibold mb-5">Credits</h2>
        <p>I created the "Time Loops" logo and the home page asset is from{' '}
          <Link className='link link-primary' href='https://undraw.co/' target='_blank'>unDraw</Link>.
        </p>
        <p className="mb-4">
          Below is a list crediting the photographers for the skyscraper images I 
          downloaded from Unsplash, along with a list for the software tools logos.
        </p>
      </div>


      <div className="flex flex-col xl:flex-row gap-10">
        <div className="w-full xl:w-1/2 mb-10">

          <div className="xl:min-h-28 mb-5">
            <h3 className='text-2xl font-medium'>Skyscrapers</h3>
            <span>Thank you guys!</span>
          </div>

          <table className="table border border-1 border-base-200 w-full">
            <thead className="bg-base-200">
              <tr>
                <th></th>
                <th>Creator</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {
                imageCredit.map((credit, index) =>
                  <tr key={index} className='hover'>
                    <th>{index + 1}</th>
                    <td className="align-middle max-w-fit">
                      <Link href={credit.link} target='_blank' className="link link-primary">
                        {credit.name}
                      </Link>
                    </td>
                    <td className="align-middle max-w-fit">
                      <Link href={credit.imageLink} target='_blank' className="link link-primary">
                        {credit.imageContent}
                      </Link>
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
        
        <div className="w-full xl:w-1/2">
          <div className="xl:min-h-28 mb-5">
            <h3 className='text-2xl font-medium'>Software Tools logos</h3>
            <span>
              <span className='underline font-semibold'>I DO NOT OWN THE LOGOS</span>{' '}
              - they are served as part of an API response.{' '}
              If you are the owner and want a logo removed, just send me a{' '}
              <Link className='link link-primary' href='mailto:nick.polizogopoulos@gmail.com'>message</Link>{' '}
              and I'll remove it <span className='underline font-semibold'>immediately</span>, no questions asked (please don't).
            </span>
          </div>
          <table className="table border border-1 border-base-200 w-full">
            <thead className="bg-base-200">
              <tr>
                <th></th>
                <th>Tool</th>
                <th>Source</th>
              </tr>
            </thead>
            <tbody>
              {
                logoCredit.map((credit, index) =>
                  <tr key={index} className='hover'>
                    <th>{index + 1}</th>
                    <td className='align-middle'>
                      <Link href={credit.toolLink} target='_blank' className="link link-primary">
                        {credit.tool}
                      </Link>
                    </td>
                    <td className='align-middle'>
                      <Link href={credit.sourceLink} target='_blank' className="link link-primary">
                        {credit.source}
                      </Link>
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>

    </section>
  );
};

export const metadata: Metadata = {
  title: 'Time Loops API - About',
  description: 'A RESTful API that serves real data, offering seamless integration and efficient data management for modern web applications.'
};

export default About;