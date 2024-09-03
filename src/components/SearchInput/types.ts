export interface SearchInputProps {
  value: string

  onChange: React.ChangeEventHandler<HTMLInputElement>
  onHideSearch: VoidFunction
  onClear: VoidFunction
}
