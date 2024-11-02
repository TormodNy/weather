import { ReactNode } from "react";
import Header from "./Header";

interface BasePageProps {
    heading: string;
    children: ReactNode;
}

function BasePage({ heading, children }: BasePageProps) {
    return (
        <>
            <Header title={heading}></Header>
            <main className="p-8 flex flex-col items-center">{children}</main>
        </>
    );
}

export default BasePage;
