import React from 'react';
import { IButton } from './types';
import styles from './style.module.scss';
import Image from "next/image";

const Button = ({
  children,
  disabled = false,
  variant = 'contained',
  hasIconLeft = false,
  hasIconRight = false,
  handleClick,
}: IButton) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${styles.button} ${styles[`button-${variant}`]}`}
      disabled={disabled}
      aria-label='button'
      aria-disabled={disabled} 
    >
      {hasIconLeft && (
        <Image
          className={styles[`button-${variant}-icon`]}
          src="/assets/icons/navigation/arrow-back.svg"
          alt="Back"
          width={24}
          height={24}
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      )}
      {children}
      {hasIconRight && (
        <Image
          className={styles[`button-${variant}-icon`]}
          src="/assets/icons/navigation/arrow-forward.svg"
          alt="Forward"
          width={24}
          height={24}
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      )}
    </button>
  );
};

export default Button;