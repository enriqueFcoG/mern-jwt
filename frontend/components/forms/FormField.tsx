"use client";

interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  error?: string | string[];
}

export const FormField = ({
  id,
  name,
  label,
  type = "text",
  error,
}: FormFieldProps) => {
  return (
    <div className="p-2">
      <label htmlFor={id} className="text-secondary-light">
        {label}
      </label>

      <div className="flex min-w-lg rounded-l border border-stone-500/50 h-[40px] bg-white focus-within:border-cyan-500 transition-all duration-200">
        <input
          id={id}
          name={name}
          type={type}
          className="pl-2 ml-2 w-full border-none outline-none text-stone-500"
        />
      </div>

      {error && (
        <div className="text-red-500 mt-1">
          {Array.isArray(error) ? (
            <ul>
              {error.map((err) => (
                <li key={err}>- {err}</li>
              ))}
            </ul>
          ) : (
            <p>{error}</p>
          )}
        </div>
      )}
    </div>
  );
};
