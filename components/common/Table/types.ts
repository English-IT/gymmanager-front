import type { ColumnsType, TableProps } from "antd/es/table";

export interface GymTableProps<T> {
  columns: ColumnsType<T>;
  data: T[];
  loading?: boolean;
  pagination?: TableProps<T>["pagination"];
  rowKey?: string;
  onEdit?: (record: T) => void;
  onDelete?: (record: T) => void;
}
