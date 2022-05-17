import Head from 'next/head'
import Image from 'next/image'
import data from '../utils/data'
import Link from "next/link"
import db from '../utils/db'
import Product from "../models/Product"

export default function Home(props) {
  const {products}=props
  return (
    <>
      <Head>
        <title>Online Book Store</title>
        <meta name="description" content="bookbazaar e-commerce bookstore" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <img src="/frontimg.jpg" className="object-cover h-96 w-full"/>
      </div>
      <div className="flex flex-wrap justify-around">
          {products.map((product)=>(
        <section key={product.name} className="text-gray-600 body-font">
          <div className="container px-5 py-12 mx-auto">
            <div className="mx-4">
              <div className="p-4 w-full">
                <a className="block relative rounded overflow-hidden">
                  <img alt="ecommerce" className="m-auto md:m-0" src={product.image} />
                </a>
                <div className="mt-4 flex flex-col md:flex-row">
                  <div className=" text-center md:text-left w-2/3">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.catogary}</h3>
                    <Link href={`/product/${product.slug}`}>
                      <a>
                        <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
                      </a>
                    </Link>
                    <p className="mt-1">{product.price}</p>
                  </div>
                  <div className="w-1/3">
                    <button>Add to Cart</button>
                  </div>  
                </div>
              </div>
            </div>
          </div>
        </section>))}
        </div>

      </>
  )
}

export async function getServerSideProps(){
  await db.connect()
  const products= await Product.find({}).lean()
  await db.disconnect()
  return{
    props:{
      products:products.map(db.convertDocToObj),
    }
  }
}