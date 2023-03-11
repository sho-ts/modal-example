import { TransitionEventHandler, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { css } from '@emotion/react';
import { Button } from './Button';

type Props = {
  isOpen?: boolean;
  onRequestClose?: () => void;
};

export const Modal: React.FC<Props> = ({ isOpen, onRequestClose }) => {
  const [isBeforeOpen, setIsBeforeOpen] = useState(false);
  const [isAfterOpen, setIsAfterOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const portalElement = useMemo(() => (typeof document === 'undefined' ? null : document.body), []);

  const handleAfterOpen = useCallback(() => {
    if (ref.current) {
      setIsAfterOpen(true);
      return;
    }
    requestAnimationFrame(handleAfterOpen);
  }, []);

  const handleTransitionEnd: TransitionEventHandler<HTMLDivElement> = useCallback((event) => {
    if (parseFloat(window.getComputedStyle(event.currentTarget).opacity) === 0) {
      setIsBeforeOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsBeforeOpen(true);
      handleAfterOpen();
    } else {
      setIsAfterOpen(false);
    }
  }, [handleAfterOpen, isOpen]);

  if (!isBeforeOpen || !portalElement) return null;

  return createPortal(
    <div css={styles.overlay(isAfterOpen)} onTransitionEnd={handleTransitionEnd} onClick={onRequestClose} ref={ref}>
      <div css={styles.content} onClick={(e) => e.stopPropagation()}>
        <p style={{ marginBottom: 16 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel excepturi libero optio sit repellat minima
          nostrum nesciunt ut voluptatem sunt, modi architecto quos ipsa voluptatum rem enim, dolores, ea fuga.
        </p>
        <Button onClick={onRequestClose}>閉じる</Button>
      </div>
    </div>,
    portalElement
  );
};

const styles = {
  overlay: (isAfterOpen?: boolean) => css`
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000000;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
    cursor: pointer;
    ${isAfterOpen &&
    css`
      pointer-events: auto;
      opacity: 1;
    `}
  `,
  content: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 32px 16px;
    z-index: 1000000;
    max-width: 500px;
    max-height: 500px;
  `,
};
