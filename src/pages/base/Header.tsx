interface HeaderProps {
    title: string;
}

function Header({ title }: HeaderProps) {
    return (
        <header className="p-4 flex justify-center">
            <h1 className="text-4xl">{title}</h1>
        </header>
    );
}

export default Header;
