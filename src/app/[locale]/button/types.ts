/* eslint-disable @typescript-eslint/no-explicit-any */
export type IButton = {
  children: React.ReactNode
  handleClick?: (event: any) => void
  variant?: string
  disabled?: boolean
  hasIconLeft?: boolean
  hasIconRight?: boolean
}
