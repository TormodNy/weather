import { ReactNode } from "react";
import Header from "./Header";

interface BasePageProps {
    heading: string;
    backTo?: string;
    children: ReactNode;
}

function BasePage({ heading, backTo, children }: BasePageProps) {
    return (
        <>
            <Header title={heading} backTo={backTo}></Header>
            <main className="p-8 flex flex-col items-center">{children}</main>
        </>
    );
}

export default BasePage;
