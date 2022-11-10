import React, { FC } from 'react'
import styles from './CardCloseButton.module.css'
import { CloseButton } from 'react-bootstrap'
import classNames from 'classnames'

interface CardCloseButtonProps {
  size: 'sm' | 'lg'
  noOutline?: boolean
  onClick: React.MouseEventHandler<HTMLButtonElement>
  className: string
}

const CardCloseButton: FC<CardCloseButtonProps> =
 ({size, onClick, noOutline, className, ...rest}: CardCloseButtonProps) => (
  <CloseButton
      className={classNames(className, {
        [`btn-${size}`]: size,
        'outline-none': noOutline || false,
      })}
      onClick={onClick}
      data-testid="CardCloseButton"
      {...rest}
    />
)

export default CardCloseButton;
