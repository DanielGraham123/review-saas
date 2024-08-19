
export default function UserLayout({ children }) {
    return (
        <div className="container mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
            {children}
        </div>
    );
}