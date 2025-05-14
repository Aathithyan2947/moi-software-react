import { useState } from 'react';
import PageHeaderWithSearch from '../components/ui/PageHeaderWithSearch';
import CustomTable from '../components/ui/CustomTable';
import Pagination from '../components/ui/Pagination';
import CustomButton from '../components/ui/CustomButton';
import { CiExport } from 'react-icons/ci';
import ChipSelector from '../components/ui/ChipSelector';

function FunctionsListingPage() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [pageFetch, setPageFetch] = useState<number>(20);
  const total = 8;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = () => {
    console.log('button clicked');
  };

  return (
    <div className='flex flex-col gap-6 px-4'>
      <PageHeaderWithSearch
        header={'விழா பட்டியல்'}
        onChange={handleSearchChange}
        value={searchQuery}
        disableButton={true}
      />
      <div className='flex justify-between items-end'>
        <ChipSelector
          label={'பெற வேண்டிய பக்கங்கள்'}
          pageFetch={pageFetch}
          setPageFetch={setPageFetch}
        />
        <CustomButton
          value={'Export'}
          icon={<CiExport />}
          onClick={handleSubmit}
        />
      </div>
      <CustomTable />
      <Pagination
        currentPage={page}
        totalPages={total}
        onPageChange={setPage}
      />
    </div>
  );
}

export default FunctionsListingPage;
