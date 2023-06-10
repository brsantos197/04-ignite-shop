import { styled } from ".."

export const CartContainer = styled('div', {
  variants: {
    show: {
      true: {
        transform: 'translate(0, 0)',
      },
      false: {
      }
    },
  },
  height: '100vh',
  width: '480px',
  zIndex: 999,
  transform: 'translate(510px, 0)',
  position: 'fixed',
  display: 'flex',
  right: 0,
  backgroundColor: '$gray800',
  boxShadow: '-4px 0 30px 0 rgba(0, 0, 0, .8)',
  transition: 'all 0.6s ease-in-out'
})

export const CartContent = styled('div', {
  position: 'relative',
  flex: 1,
  padding: '4.5rem 3rem 3rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  h4: {
    fontSize: '$lg',
    fontWeight: 'bold',
    marginBottom: '2rem',
  },

  footer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',

    button: {
      marginTop: '3.5rem',
    },

    div: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

      span: {
        fontSize: '$md',
        color: '$gray300',
      },

      strong: {
        fontSize: '$md',
      },

      b: {
        fontSize: '$xl'
      }
    }
  }
})

export const ItemsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  overflow: 'auto',
  maxHeight: '424px',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
  '-ms-overflow-style': 'none',  /* IE and Edge */
  'scrollbar-width': 'none',  /* Firefox */
})

export const CartItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem',
  fontSize: '$md',

  div: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%'
  },

  a: {
    display: 'block',
    fontSize: '$lg',
    fontWeight: 'bold',
    color: '$green500',
    textDecoration: 'none',
    cursor: 'pointer',

    '&:hover': {
      color: '$green300',
    }
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 100,
  minHeight: 95,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  }
})

export const CloseIcon = styled('div', {
  position: 'absolute',
  top: 24,
  right: 24,
  cursor: 'pointer',
  svg: {
    color: '$gray500'
  }
})