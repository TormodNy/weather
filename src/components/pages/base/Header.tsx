import { ArrowBack } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

interface HeaderProps {
    title: string;
    backTo?: string;
}

function Header({ title, backTo }: HeaderProps) {
    return (
        <header className="p-4 flex justify-center relative">
            {backTo && (
                <Link to={backTo} className="absolute top-4 left-4">
                    <IconButton>
                        <ArrowBack />
                    </IconButton>
                </Link>
            )}
            <h1 className="text-4xl">{title}</h1>
        </header>
    );
}

export default Header;
