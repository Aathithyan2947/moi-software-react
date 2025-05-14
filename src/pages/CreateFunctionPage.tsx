import CustomInput from '../components/ui/CustomInput';
import PageHeaderWithSearch from '../components/ui/PageHeaderWithSearch';

function CreateFunctionPage() {
  const handleSubmit = () => {
    console.log('saved Successfully ');
  };
  return (
    <div className='flex flex-col gap-6 px-4'>
      <PageHeaderWithSearch
        header={'விழாவின் விவரங்கள்'}
        disableSearch={true}
        handleSubmit={handleSubmit}
      />
      <div className='bg-white p-4 rounded-lg grid grid-cols-2 gap-4'>
        <CustomInput placeholder={'விழாபெயர்'} label={'விழாபெயர்'} />
        <CustomInput placeholder={'விழா இடம்'} label={'விழா இடம்'} />
      </div>
    </div>
  );
}

export default CreateFunctionPage;
