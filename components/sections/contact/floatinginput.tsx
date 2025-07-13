type FloatingInputProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  type?: string;
  isTextarea?: boolean;
};

export default function FloatingInput({
  id,
  name,
  label,
  value,
  onChange,
  error,
  type = 'text',
  isTextarea = false,
}: FloatingInputProps) {
  const baseInputStyle =
    'peer item-shadow w-full border rounded-md px-3 pt-6 pb-2 focus:outline-none focus:ring-2 bg-gray-50 dark:bg-[#474747]';

  const borderStyle = error
    ? 'border-red-500 focus:ring-red-500'
    : 'dark:focus:border-none focus:ring-blue-500';

  const transitionStyle = 'transition-shadow duration-500';

  const hoverShadow = !error
    ? 'shadow-xs md:hover:shadow-black md:dark:hover:shadow-white transition-shadow ' +
      'duration-500 md:group-focus:hover:shadow-none'
    : '';

  const labelStyle = `absolute left-3 top-2 text-sm text-gray-400 dark:text-gray-400
    transition-all 
    peer-placeholder-shown:top-4 peer-placeholder-shown:text-base 
    peer-placeholder-shown:text-gray-800 dark:peer-placeholder-shown:text-gray-200
    peer-focus:top-2 peer-focus:text-sm`;

  const inputClass = `${baseInputStyle} ${borderStyle} ${transitionStyle} ${hoverShadow}`;

  return (
    <div className="relative">
      {isTextarea ? (
        <textarea
          name={name}
          id={id}
          rows={4}
          value={value}
          onChange={onChange}
          className={inputClass}
          placeholder=" "
        />
      ) : (
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          className={inputClass}
          placeholder=" "
        />
      )}
      <label htmlFor={id} className={labelStyle}>
        {label}
      </label>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
