export default function Input({
    className,
    type,
    placeholder,
    name,
    id,
    value,
    onChange,
    error
}) {
    return (
        <>
            {type !== 'radio' ? (
                <input
                    className={`w-72 border-2 p-2 ${
                        error ? 'border-red-400' : ''
                    }`}
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
            {error && <div className="text-red-400">{error}</div>}
        </>
    );
}
