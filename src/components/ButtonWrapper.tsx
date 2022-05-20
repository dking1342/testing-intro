import React from 'react'

const ButtonWrapper:React.FunctionComponent<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>
    ,HTMLButtonElement
  > & {
    "title": string;
  }
> = ({ title, ...props }) => {
  return (
    <>
      <h2>Button Wrapper</h2>
      <button {...props}>{ title }</button>
    </>
  )
}

export default ButtonWrapper