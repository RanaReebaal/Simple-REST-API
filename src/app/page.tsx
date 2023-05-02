import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from "react";
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

      <div>
        <div className="bg-gradient-to-br from-pink-500 to-purple-500 shadow-lg p-8">
          <h1 className=" text-center text-3xl font-bold text-gray-800 mb-4">Simple Books API by RANA REEBAAL</h1>
          <p className="text-green-600 text-2xl leading-relaxed">
            Build at high performance Edge API Routes with Next.js. Using the Edge Runtime,
            Edge API Routes on standard Web APIs, Neon Database, Middleware and JSON web token (JWT) for authentication purpose.
          </p>
        </div>
      </div>


      <section className="bg-gradient-to-br from-pink-500 to-purple-500 min-h-screen flex items-center justify-center">

        <div className="flex text-center items-center justify-center mt-6">
          <table className="w-full md:w-[999px] lg:h-[999px]">
            <thead>
              <tr>
                <th className="px-0 py-2 text-gray-800">API Endpoints</th>
                <th className="px-4 py-2 text-gray-800">Method</th>
                <th className="px-4 py-2 text-gray-800">Authentication</th>
                <th className="px-4 py-2 text-gray-800">API Full link</th>
              </tr>
            </thead>
            <br />
            <tbody>
              <tr>
                <td className="border px-4 py-2">Status</td>
                <td className="border px-4 py-2">GET</td>
                <td className="border px-4 py-2">Not required</td>
                <td className="border px-4 py-2">https://reebaal-books-api.vercel.app/api/status</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">List of books available</td>
                <td className="border px-4 py-2">GET</td>
                <td className="border px-4 py-2">Not required</td>
                <td className="border px-4 py-2">https://reebaal-books-api.vercel.app/api/books</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Check by id</td>
                <td className="border px-4 py-2">GET</td>
                <td className="border px-4 py-2">Not required</td>
                <td className="border px-4 py-2">https://reebaal-books-api.vercel.app/api/books/14</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Get in a specific limit</td>
                <td className="border px-4 py-2">GET</td>
                <td className="border px-4 py-2">Not required</td>
                <td className="border px-4 py-2">https://reebaal-books-api.vercel.app/api/books?limit=7</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">To get authorization</td>
                <td className="border px-4 py-2">POST</td>
                <td className="border px-4 py-2">Required</td>
                <td className="border px-4 py-2">https://reebaal-books-api.vercel.app/api/api-clients</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">To place an order</td>
                <td className="border px-4 py-2">POST</td>
                <td className="border px-4 py-2">Required</td>
                <td className="border px-4 py-2">https://reebaal-books-api.vercel.app/api/orders</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">To view the list of all orders</td>
                <td className="border px-4 py-2">GET</td>
                <td className="border px-4 py-2">Required</td>
                <td className="border px-4 py-2">https://reebaal-books-api.vercel.app/api/orders</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">To check order by id</td>
                <td className="border px-4 py-2">GET</td>
                <td className="border px-4 py-2">Required</td>
                <td className="border px-4 py-2">https://reebaal-books-api.vercel.app/api/orders/rEEpm</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">To update order by id</td>
                <td className="border px-4 py-2">PATCH</td>
                <td className="border px-4 py-2">Required</td>
                <td className="border px-4 py-2">https://reebaal-books-api.vercel.app/api/orders/rEEpm</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">To delete order by id</td>
                <td className="border px-4 py-2">DELETE</td>
                <td className="border px-4 py-2">Required</td>
                <td className="border px-4 py-2">https://reebaal-books-api.vercel.app/api/orders/rEEpm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </>
  )
}