import { ReactNode } from "react";
import Header from "./Header";

interface BasePageProps {
    heading: string;
    backTo?: string;
    children: ReactNode;
}

function BasePage({ heading, backTo, children }: BasePageProps) {
    return (
        <main className="flex flex-col h-full">
            <Header title={heading} backTo={backTo}></Header>
            <div className="grow p-8 flex flex-col items-center">
                {children}
            </div>
        </main>
    );
}

export default BasePage;
