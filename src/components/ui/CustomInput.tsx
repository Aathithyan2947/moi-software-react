export type CustomInputProps = {
  placeholder: string;
  label: string;
};

function CustomInput({ placeholder, label }: CustomInputProps) {
  return (
    <div className='flex flex-col gap-2'>
      <h1 className='text-md font-semibold'>
        <span className='text-red-500'> * </span>
        {label}
      </h1>
      <input
        type='text'
        placeholder={placeholder}
        className='pl-4 rounded-md h-10 border w-full'
      />
    </div>
  );
}

export default CustomInput;
