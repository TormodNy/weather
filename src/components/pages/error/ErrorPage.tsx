import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import BasePage from "../base/BasePage";

function ErrorPage() {
    const error = useRouteError();
    let errorMessage: string;

    if (isRouteErrorResponse(error)) {
        errorMessage = error.data.message || error.statusText;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    } else if (typeof error === "string") {
        errorMessage = error;
    } else {
        console.error(error);
        errorMessage = "Unknown error";
    }

    return (
        <BasePage heading="Oops!">
            <section className="flex flex-col items-center gap-4">
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{errorMessage}</i>
                </p>
            </section>
        </BasePage>
    );
}

export default ErrorPage;
