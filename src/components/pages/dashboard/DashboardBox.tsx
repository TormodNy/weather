import { ReactNode } from "react";

interface DashboardBoxProps {
    onClick?: () => void;
    children: ReactNode;
}

function DashboardBox({ onClick, children }: DashboardBoxProps) {
    return (
        <button
            className="flex justify-between bg-gray-900 p-4 gap-2 text-xl max-w-96 w-full rounded-md hover:bg-gray-700 active:bg-gray-500"
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default DashboardBox;
