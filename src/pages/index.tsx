/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import CustomLink from '@/components/links/CustomLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';
import MainForm from '@/components/MainForm';
import { PopupButton } from '@typeform/embed-react'

import imgs from 'public/images/united-states-military-branch-logos.png';


export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-dark'>
          {/* <div >
          <img src={imgs} alt='satisfy the machine'/>
          </div> */}
          <div className='flex flex-col items-center justify-center min-h-screen text-center layout'>
            <h1>Prior Service FM</h1>
            <p className='mt-2 text-sm'>
              Opportunity • Explore • Apply{' '}
            </p>
            <p className='mt-2 text-sm text-gray-200'>
              
            </p>
            <div className="flex flex-wrap h-48 content-evenly">
            
            <PopupButton

            className="typeForm-button"

              id="L30MTwVa"
              size={90}
              hidden={{
                foo: 'Foo Value',
                bar: 'Bar Value',
              }}
              onReady={() => {
                console.log('form has opened!')
              }}
              enableSandbox
            >
              VETERAN
            </PopupButton>

            <PopupButton
            className="typeForm-button"
              id="L30MTwVa"
              size={90}
              hidden={{
                foo: 'Foo Value',
                bar: 'Bar Value',
              }}
              onReady={() => {
                console.log('form has opened!')
              }}
              enableSandbox
            >
              ACTIVE
            </PopupButton>

            <PopupButton
            className="typeForm-button"
              id="L30MTwVa"
              size={90}
              hidden={{
                foo: 'Foo Value',
                bar: 'Bar Value',
              }}
              onReady={() => {
                console.log('form has opened!')
              }}
              enableSandbox
            >
              RESERVE
            </PopupButton>

            <PopupButton
            className="typeForm-button"
              id="L30MTwVa"
              size={90}
              hidden={{
                foo: 'Foo Value',
                bar: 'Bar Value',
              }}
              onReady={() => {
                console.log('form has opened!')
              }}
              enableSandbox
            >
              PRIOR SERVICE
            </PopupButton>
            
           </div>
            

            <footer className='absolute text-green-900 bottom-2'>
              © {new Date().getFullYear()} {''}
              <CustomLink href='https://github.com/Parham-S/psfm'>
              Prior Service Field Manual 
              </CustomLink>
          
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}

/**
 * Default info that you should change:
 * components/Seo.tsx
 * next-sitemap.js
 * public/favicon
 *
 * Please refer to the README.md
 */
