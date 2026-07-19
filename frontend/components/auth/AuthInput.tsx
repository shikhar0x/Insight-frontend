"use client";

interface AuthInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

export default function AuthInput({
    label,
    error,
    ...props
}: AuthInputProps) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-300">{label}</label>

            <input
                {...props}
                className={`
        w-full
        rounded-xl
        border
        ${error ? "border-red-500/80 focus:border-red-500 focus:ring-red-500/30" : "border-white/10 focus:border-cyan-500 focus:ring-cyan-500/30"}
        bg-white/5
        px-4
        py-3
        text-white
        placeholder:text-gray-500
        outline-none
        transition
        focus:ring-2
        `}
            />
            {error && <p className="text-xs text-red-400 mt-0.5">{error}</p>}
        </div>
    );
}