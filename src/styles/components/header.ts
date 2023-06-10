import { styled } from "..";

export const HeaderContainer = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
})

export const IconContainer = styled('div', {
  variants: {
    itemsBadge: {
      true: {
        '&::after': {
          content: 'attr(data-items)',
          position: 'absolute',
          top: -12,
          right: -12,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          border: '3px solid $gray900',
          width: 24,
          height: 24,
          backgroundColor: '$green500',
          color: '$white',
          fontSize: '14px',
        },
      }
    }
  },
  position: 'relative',
  display: 'flex',
  padding: '0.5rem',
  borderRadius: 6,
  backgroundColor: '$gray800',
  color: '$gray500',
  cursor: 'pointer'
})