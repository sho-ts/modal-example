import { css } from '@emotion/react';
import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
} from 'react';

type Props = ComponentPropsWithoutRef<'button'> & {
  children?: React.ReactNode;
};

export const Button: React.FC<Props> = (props) => {
  return <button css={styles.base} {...props} />;
};

const styles = {
  base: css`
    height: 48px;
    border-radius: 24px;
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#3145f9+0,7db9e8+100 */
    background: #3145f9; /* Old browsers */
    background: -moz-linear-gradient(
      left,
      #3145f9 0%,
      #7db9e8 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      left,
      #3145f9 0%,
      #7db9e8 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to right,
      #3145f9 0%,
      #7db9e8 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    color: white;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 24px;
    cursor: pointer;
  `,
};
