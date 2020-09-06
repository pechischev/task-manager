export interface IFieldProps {
  type: string;
  label: string;
  required?: boolean;
  value?: string;

  onChange(event: Event, value: string): void;
}
