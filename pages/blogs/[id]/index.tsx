import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import AsideBlogs from '../../../src/components/Blogs/AsideBlogs';
import SingleBlog from '../../../src/components/SingleBlog';

const BlogDetails: NextPage = () => {
  return (
    <>
      <Head>
        <title>HEKTO | Get your own comfortable place</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="w-full min-h-screen py-14 flex">
          <div className="w-[1024px] m-auto min-h-[32rem] flex items-stretch gap-10">
            <SingleBlog />
            <AsideBlogs />
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogDetails;
