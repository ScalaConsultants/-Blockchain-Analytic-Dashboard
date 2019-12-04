export interface Props {
  id: string
  address?: string
  type?: string
  title: string
  description: string
  blockchain?: string
}

export interface ContainerProps extends Props {
  update: (data: any) => void
  email?: string | null
  canEdit?: boolean
}

export interface ViewProps extends Props {
  open: boolean
  handleOpen: () => void
  handleClose: () => void
  handleUpdate: () => void
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  changeType: (event: React.MouseEvent<HTMLElement>) => void
  canEdit?: boolean
}
