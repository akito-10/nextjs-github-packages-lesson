import { FC } from "react"

type ButtonProps = JSX.IntrinsicElements["button"]

export const Button: FC<ButtonProps> = (props) => {
  return <button {...props} />
}
