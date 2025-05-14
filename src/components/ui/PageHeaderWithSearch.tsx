import { FiPlus } from 'react-icons/fi';
import { LuSearch } from 'react-icons/lu';
import type { PageHeaderWithSearchProps } from '../../types';
import { Link } from 'react-router-dom';
import CustomButton from './CustomButton';
import { FaSave } from 'react-icons/fa';

function PageHeaderWithSearch({
  header,
  value,
  onChange,
  disableSearch,
  link,
  handleSubmit,
  disableButton,
}: PageHeaderWithSearchProps) {
  return (
    <div className='h-14 flex justify-between items-center'>
      <p className='text-black font-semibold text-3xl'>{header}</p>

      {!disableSearch ? (
        <div className='flex gap-5 items-center'>
          <div className='relative w-72'>
            <input
              className='text-sm focus:outline-none w-full h-10 pr-10 pl-10 border border-borderGray rounded-xl'
              placeholder='Search'
              type='text'
              name='search'
              value={value || ''}
              onChange={onChange}
            />
            <div className='absolute inset-y-0 left-3 flex items-center text-gray-500 pointer-events-none'>
              <LuSearch size={20} />
            </div>
          </div>

          <Link
            to={link || '/'}
            className='h-10 w-32 rounded-xl bg-darkBlue text-white flex justify-center items-center gap-1 px-2 transform transition-transform duration-300 hover:scale-105 cursor-pointer'
          >
            <FiPlus />
            <p className='text-sm'>Add Function</p>
          </Link>
        </div>
      ) : (
        ''
      )}
      {!disableButton ? (
        <CustomButton icon={<FaSave />} onClick={handleSubmit} value={'Save'} />
      ) : (
        ''
      )}
    </div>
  );
}

export default PageHeaderWithSearch;
