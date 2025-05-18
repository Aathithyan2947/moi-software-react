import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import PageHeaderWithSearch from '../components/ui/PageHeaderWithSearch';
import { Combobox } from '../components/ui/combobox';
import { createFunction, getUniqueCities, getUniqueNames, getUniqueOccupations } from '../services/functions';
import type { CreateFunctionInput } from '../types';

const schema = z.object({
  function_name: z.string().min(1, 'விழாபெயர் தேவை'),
  function_owner_name: z.string().min(1, 'நடத்துபவர் பெயர் தேவை'),
  function_owner_city: z.string().min(1, 'நடத்துபவர் ஊர் தேவை'),
  function_owner_address: z.string().min(1, 'நடத்துபவர் முகவரி தேவை'),
  function_owner_phno: z.string().min(10, 'சரியான கைபேசி எண் தேவை'),
  function_amt_spent: z.number().min(0, 'செலவு தொகை தேவை'),
  function_hero_name: z.string().min(1, 'விழா நாயகன் பெயர் தேவை'),
  function_heroine_name: z.string().min(1, 'விழா நாயகி பெயர் தேவை'),
  function_held_place: z.string().min(1, 'விழா இடம் தேவை'),
  function_held_city: z.string().min(1, 'விழா நடக்கும் ஊர் தேவை'),
  function_start_date: z.string(),
  function_start_time: z.string(),
  function_end_date: z.string(),
  function_end_time: z.string(),
  function_total_days: z.number().min(1, 'நாட்கள் தேவை'),
  function_bill_details: z.object({
    owner_name: z.string().min(1, 'பெயர் தேவை'),
    owner_occupation: z.string().min(1, 'தொழில் தேவை'),
    wife_name: z.string().min(1, 'துணைவியார் பெயர் தேவை'),
    wife_occupation: z.string().min(1, 'துணைவியார் தொழில் தேவை'),
    function_place: z.string().min(1, 'விழா இடம் தேவை'),
    function_city: z.string().min(1, 'விழா நடக்கும் ஊர் தேவை'),
  }),
});

function CreateFunctionPage() {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<CreateFunctionInput>({
    resolver: zodResolver(schema),
  });

  const { data: names } = useQuery({
    queryKey: ['uniqueNames'],
    queryFn: getUniqueNames,
  });

  const { data: cities } = useQuery({
    queryKey: ['uniqueCities'],
    queryFn: getUniqueCities,
  });

  const { data: occupations } = useQuery({
    queryKey: ['uniqueOccupations'],
    queryFn: getUniqueOccupations,
  });

  const mutation = useMutation({
    mutationFn: createFunction,
    onSuccess: () => {
      toast.success('விழா வெற்றிகரமாக சேர்க்கப்பட்டது');
      navigate('/');
    },
    onError: () => {
      toast.error('ஏதோ தவறு நடந்துவிட்டது');
    },
  });

  const onSubmit = (data: CreateFunctionInput) => {
    mutation.mutate(data);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const form = e.currentTarget.form;
      const index = Array.prototype.indexOf.call(form, e.currentTarget);
      const next = form?.elements[index + 1] as HTMLElement;
      next?.focus();
    }
  };

  return (
    <div className='flex flex-col gap-6 px-4'>
      <PageHeaderWithSearch
        header={'விழாவின் விவரங்கள்'}
        disableSearch={true}
        handleSubmit={handleSubmit(onSubmit)}
      />
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
        <div className='bg-white p-6 rounded-lg grid grid-cols-2 gap-6'>
          <div className='space-y-2'>
            <label className='text-sm font-medium'>விழாபெயர்</label>
            <Combobox
              options={names?.data || []}
              value={watch('function_name') || ''}
              onChange={(value) => setValue('function_name', value)}
              placeholder='விழாபெயர் தேர்வு செய்க'
            />
            {errors.function_name && (
              <p className='text-red-500 text-sm'>{errors.function_name.message}</p>
            )}
          </div>

          <div className='space-y-2'>
            <label className='text-sm font-medium'>நடத்துபவர் பெயர்</label>
            <Combobox
              options={names?.data || []}
              value={watch('function_owner_name') || ''}
              onChange={(value) => setValue('function_owner_name', value)}
              placeholder='நடத்துபவர் பெயர் தேர்வு செய்க'
            />
            {errors.function_owner_name && (
              <p className='text-red-500 text-sm'>{errors.function_owner_name.message}</p>
            )}
          </div>

          {/* Add other form fields similarly */}
        </div>
      </form>
    </div>
  );
}

export default CreateFunctionPage;