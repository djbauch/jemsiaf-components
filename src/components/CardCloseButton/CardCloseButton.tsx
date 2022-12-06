import React, { FC } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import CloseButton from 'react-bootstrap/CloseButton'
import classNames from 'classnames'

interface CardCloseButtonProps {
  size?: 'sm' | 'lg'
  noOutline?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string
}

const CardCloseButton: FC<CardCloseButtonProps> =
 ({size = 'sm', onClick = ()=>{}, noOutline, className='button', ...rest}: CardCloseButtonProps) => (
  <CloseButton
      className={classNames(className, {
        [`btn-${size}`]: size,
        'outline-none': noOutline || false,
      })}
      onClick={onClick}
      aria-label="Close"
      data-testid="CardCloseButton"
      {...rest}
    />
)

export default CardCloseButton;
