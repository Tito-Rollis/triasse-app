export default function ContentComponent({ children, className, title, text }) {
    return (
        <div className={className}>
            <h1 className="text-titleLarge text-blue-200 font-bold text-center ">
                {title}
            </h1>
            <p className="text-center text-blue-200 text-subTitle mt-4">
                {text}
            </p>
            {children}
        </div>
    );
}
