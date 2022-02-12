const Nav = () => {
    return (
        <div className="flex w-full sticky top-0  md:px-60 justify-between items-center text-slate-200 py-4 bg-priBg">
            <div className="text-2xl">Content Hacker</div>
            <div className="flex text-sm space-x-10">
                <div>Book A Call</div>
                <div>Terms</div>
                <div>Academy</div>
                <div>Login/Sign Up</div>
            </div>
        </div>
    );
}

export default Nav;