export interface IFieldProps {
  type: string;
  label: string;
  required?: boolean;

  onChange(event: Event, value: string): void;
}
