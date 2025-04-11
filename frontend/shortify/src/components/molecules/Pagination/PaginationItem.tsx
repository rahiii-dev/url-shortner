import clsx from 'clsx';
import React from 'react';

interface PaginationItemProps {
    children: React.ReactNode;
    isActive?: boolean;
    onClick?: () => void;
}

const PaginationItem = ({ children, isActive, onClick }: PaginationItemProps) => {
    return (
        <button
            onClick={onClick}
            className={clsx(
                "w-10 h-10 cursor-pointer flex items-center justify-center rounded-full text-md font-medium transition-all shadow-md",
                isActive
                  ? "bg-primary text-white scale-[1.15] ring-2 ring-primary/50"
                  : "bg-surface text-gray-400 hover:scale-[1.15] hover:text-white"
              )}
        >
            {children}
        </button>

    );
}

export default PaginationItem;
