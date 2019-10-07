export interface Props {
  id: string,
  address: string,
  description: string,
}

export interface ContainerProps extends Props {
  update: (description: string) => void
}

export interface ViewProps extends Props {
  open: boolean,
  handleOpen: () => void,
  handleClose: () => void,
  handleUpdate: () => void,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}