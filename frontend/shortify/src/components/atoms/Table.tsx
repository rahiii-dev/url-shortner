import { HTMLAttributes, ReactNode } from "react";

// Table
export const Table = ({
  children,
  ...props
}: {
  children: ReactNode;
} & HTMLAttributes<HTMLTableElement>) => (
  <table className="min-w-full divide-y-2 divide-black" {...props}>
    {children}
  </table>
);

// TableRow
export const TableRow = ({
  children,
  ...props
}: {
  children: ReactNode;
} & HTMLAttributes<HTMLTableRowElement>) => (
  <tr className="bg-background hover:bg-surface divide-y-2 divide-black" {...props}>
    {children}
  </tr>
);

// TableCell
export const TableCell = ({
  children,
  ...props
}: {
  children: ReactNode;
} & HTMLAttributes<HTMLTableCellElement>) => (
  <td className="px-6 py-4 text-sm text-light-gray" {...props}>
    {children}
  </td>
);

// TableHeaderCell
export const TableHeaderCell = ({
  children,
  ...props
}: {
  children: ReactNode;
} & HTMLAttributes<HTMLTableCellElement>) => (
  <th className="px-6 py-3 text-left font-medium text-light-gray" {...props}>
    {children}
  </th>
);

export const TableHead = ({
  children,
  ...props
}: {
  children: ReactNode;
} & HTMLAttributes<HTMLTableSectionElement>) => (
  <thead className="[&>tr]:bg-surface hover:bg-background" {...props}>
    {children}
  </thead>
);

export const TableBody = ({
  children,
  ...props
}: {
  children: ReactNode;
} & HTMLAttributes<HTMLTableSectionElement>) => (
  <tbody {...props}>
    {children}
  </tbody>
);

export const TableContainer = ({
  children,
}: {
  children: ReactNode;
}) => (
  <div className="overflow-x-auto rounded-md">
    {children}
  </div>
);
