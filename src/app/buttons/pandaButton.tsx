import { cva, type RecipeVariantProps } from 'styled-system/css';
import { styled } from '../../../styled-system/jsx';

export const buttonStyles = cva({
  base: {
    display: 'flex',
  },
  variants: {
    visual: {
      solid: { bg: 'yellow.200', color: 'white' },
      outline: { borderWIdth: '1px', borderColor: 'red.200' },
    },
    size: {
      sm: { padding: '4', fontSize: '12px' },
      lg: { padding: '0', fontSize: '24px' },
    },
  },
});

export type ButtonStyleProps = RecipeVariantProps<typeof buttonStyles>;

export const PandaButton = styled('button', buttonStyles);

export const PinkButton = ({ text }: { text: string } & ButtonStyleProps) => (
  <PandaButton size="sm">{text}</PandaButton>
);
