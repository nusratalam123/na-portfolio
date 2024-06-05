"use client";
import React from 'react'
import Link from "next/link";

const knowledge = () => {
  return (
    <section>
      <div>
        <Link href="/" className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3" >
          <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
            Download CV
          </span>
        </Link>
      </div>
    </section>
  );
}

export default knowledge;
