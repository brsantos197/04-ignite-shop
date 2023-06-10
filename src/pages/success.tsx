import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Stripe from "stripe";
import { useShoppingCart } from "use-shopping-cart";
import { stripe } from "../lib/stripe";
import { ImageContainer, ProductsContainer, SuccessContainer } from "../styles/pages/success";

type CustomProduct = Stripe.Product & {
  id: string
  quantity: number
}
interface SuccessProps {
  customerName: string
  products: CustomProduct[]
}

export default function Success({ customerName, products }: SuccessProps) {
  const { clearCart } = useShoppingCart()
  const allProductsCount = products.reduce((total, product) => total += product.quantity, 0)

  useEffect(() => {
    clearCart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <Head>
        <title>Compra Efetuada | Ignite Shop</title>
        <meta name='robots' content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>Compra Efetuada!</h1>
        <ProductsContainer>
          {products.map(product => (
            <ImageContainer key={product.id}>
              <Image src={product.images ? product.images[0] : ''} width={120} height={110} alt={product.name} />
            </ImageContainer>
          ))}
        </ProductsContainer>

        <p>Uhuul <strong>{customerName}</strong>, sua compra de {allProductsCount} {allProductsCount > 1 ? 'Camisetas' : 'Camiseta'} já está a caminho da sua casa. </p>

        <Link href='/'>
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details.name
  const products = session.line_items.data.map(({ id, price, quantity }) => ({ id, ...price.product as Stripe.Product, quantity }))

  return {
    props: {
      customerName,
      products
    }
  }
}