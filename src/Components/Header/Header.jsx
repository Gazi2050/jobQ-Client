


const Header = () => {
    return (
        <div>
            <div className="hero min-h-[491px]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1644128225540-3b0388c7e230?auto=format&fit=crop&q=80&w=1820&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md backdrop-blur-[3px] rounded-md p-5">
                        <h1 className="mb-5 text-5xl font-bold">Find Your Dream Job Here</h1>
                        <p className="mb-5 text-xl font-medium">Welcome to the gateway of your dreams. Find Your Dream Job Here and take the first step towards your ideal career.</p>
                        <button className="btn btn-primary dark:btn-success">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
