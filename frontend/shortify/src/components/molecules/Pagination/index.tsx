import { ChevronsRight, ChevronsLeft } from "lucide-react";
import PaginationItem from "./PaginationItem";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const visiblePages = 3;
  let startPage = Math.max(1, currentPage - 1);
  let endPage = Math.min(totalPages, startPage + visiblePages - 1);

  if (endPage - startPage < visiblePages - 1) {
    startPage = Math.max(1, endPage - visiblePages + 1);
  }

  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <div className="flex items-center gap-2 mt-5">
      {currentPage > 1 && (
        <PaginationItem onClick={() => onPageChange(currentPage - 1)} isActive={false}>
          <ChevronsLeft className="w-5 h-5" />
        </PaginationItem>
      )}

      {pageNumbers.map((page) => (
        <PaginationItem key={page} onClick={() => onPageChange(page)} isActive={currentPage === page}>
          {page}
        </PaginationItem>
      ))}

      {currentPage < totalPages && (
        <PaginationItem onClick={() => onPageChange(currentPage + 1)} isActive={false}>
          <ChevronsRight className="w-5 h-5" />
        </PaginationItem>
      )}
    </div>
  );
};

export default Pagination;
