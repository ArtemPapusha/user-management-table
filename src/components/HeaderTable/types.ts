export interface HeaderTableProps {
  text: string
  isSearch: boolean
  searchValue: string
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
  toggleShowSearch: VoidFunction
  handleClearSearch: VoidFunction
}
