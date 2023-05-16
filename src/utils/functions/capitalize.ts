export const capitalize = (name: string) => {
  return (
    name.toLowerCase().charAt(0).toUpperCase() + name.slice(1).toLowerCase()
  )
}
