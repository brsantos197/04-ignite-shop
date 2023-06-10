import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import { CartProvider } from "use-shopping-cart";
import { Cart } from "../components/Cart";
import { Header } from "../components/Header";
import { Container } from "../styles/pages/app";
globalStyles()

export default function App({ Component, pageProps }: AppProps) {

  return (
    <CartProvider
      cartMode="checkout-session"
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}
      currency="BRL"
      shouldPersist
    >
      <Container>
        <Header />
        <Cart />
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}