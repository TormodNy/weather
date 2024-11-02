import { ReactNode } from "react";

interface DashboardBoxProps {
    children: ReactNode;
}

function DashboardBox({ children }: DashboardBoxProps) {
    return (
        <button className="flex justify-between bg-gray-900 p-4 gap-2 text-xl max-w-96 w-full">
            {children}
        </button>
    );
}

export default DashboardBox;
