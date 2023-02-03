export default function Input({
    className,
    type,
    placeholder,
    name,
    id,
    value,
    onChange
}) {
    return (
        <>
            {type === 'text' ? (
                <input
                    className=" w-72 border-2 p-2"
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            ) : (
                <input
                    className={className}
                    type={type}
                    name={name}
                    id={id}
                    value={value}
                    onChange={onChange}
                />
            )}
        </>
    );
}
