import { Button } from '@/components/Button';
import { Modal } from '@/components/Modal';
import { css } from '@emotion/react';
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>モーダル</title>
      </Head>
      <main css={styles.container}>
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
        />
        <Button onClick={() => setIsOpen(true)}>モーダルを開く</Button>
      </main>
    </>
  );
}

const styles = {
  container: css`
    max-width: 1000px;
    margin: 0 auto;
    padding: 32px 16px;
  `,
  page1: {},
  page2: {
    button: css`
      margin-top: 24px;
      background: black;
      color: white;
      border-radius: 20px;
      width: 120px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    `,
  },
};
