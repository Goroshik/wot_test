'use client';

import LinkButton from '../LinkButton/LinkButton';

import styles from './switchButtons.module.scss';

interface Props<T> {
  buttonActive: T;
  buttonVariants: Array<T>;
  onClickButton: (name: T) => void;
}

export default function SwitchButtons<T>({ buttonActive, buttonVariants, onClickButton }: Props<T>) {

  const btnClassNames = (btnName: T) =>
    `${styles.btn_mode} ${buttonActive === btnName ? styles.btn_mode__chosen : ''}`;

  return (
    <div className={styles.container}>
      {
        buttonVariants.map((variant) =>
          <LinkButton
            key={`${variant}`}
            className={btnClassNames(variant)}
            onClick={() => onClickButton(variant)}
            text={`${variant}`}
          />
        )
      }
    </div>
  )
}
