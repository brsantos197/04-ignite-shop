import { X } from "@phosphor-icons/react";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { CartContainer, CartContent, CartItem, CloseIcon, ImageContainer, ItemsContainer } from "../../styles/components/cart";
import { Button } from "../../styles/pages/app";

export const Cart = () => {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
  const { cartDetails, cartCount, formattedTotalPrice, shouldDisplayCart, handleCloseCart, removeItem } = useShoppingCart()

  const items = Object.values(cartDetails)

  const handleSendCart = async () => {
    try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        line_items: items.map(({ quantity, price_id }) => ({ price: price_id, quantity }))
      })
      const { checkoutUrl } = response.data
      window.location.href = checkoutUrl
    } catch (error) {
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <CartContainer show={shouldDisplayCart} >
      <CartContent>
        <CloseIcon onClick={handleCloseCart}>
          <X weight="bold" size={24} />
        </CloseIcon>
        <div>
          <h4>Sacola de compras</h4>
          <ItemsContainer>
            {items.map(item => (
              <CartItem key={item.id}>
                <ImageContainer>
                  <Image src={item.image} width={90} height={80} alt="" />
                </ImageContainer>
                <div>
                  <p>{item.name}</p>
                  <p><strong>{item.formattedValue}</strong></p>
                  <a onClick={() => { removeItem(item.id) }}>Remover</a>
                </div>
              </CartItem>
            ))}
          </ItemsContainer>
        </div>
        {!items.length && (<h1 style={{ margin: '0 auto' }}>Carrinho Vazio</h1>)}
        <footer>
          <div>
            <p>Quantidade</p>
            <span>{cartCount} itens</span>
          </div>
          <div>
            <strong>Valor total</strong>
            <b>{formattedTotalPrice}</b>
          </div>
          <Button
            disabled={isCreatingCheckoutSession || !items.length}
            onClick={handleSendCart}
          >
            Finalizar Compra
          </Button>
        </footer>
      </CartContent>
    </CartContainer>
  );
}