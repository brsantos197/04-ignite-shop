import { Handbag } from "@phosphor-icons/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useShoppingCart } from "use-shopping-cart";

import Link from "next/link";
import logoImg from '../../assets/logo.svg';
import { HeaderContainer, IconContainer } from "../../styles/components/header";


export const Header = () => {
  const { cartCount, handleCartHover } = useShoppingCart()
  const { route } = useRouter()

  return (
    <HeaderContainer css={route === '/success' && { justifyContent: 'center' }}>
      <Link href='/'>
        <Image src={logoImg} alt="logo" />
      </Link>
      {route !== '/success' && <IconContainer itemsBadge={!!cartCount} data-items={cartCount} onClick={handleCartHover}>
        <Handbag size={24} weight="bold" />
      </IconContainer>}
    </HeaderContainer>
  );
}
