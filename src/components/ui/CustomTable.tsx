import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdOutlineModeEdit } from 'react-icons/md';
import { RxCrossCircled } from 'react-icons/rx';
import ActionOptions from './ActionOptions';
import type { FunctionData } from '../../types';
import { useEffect, useRef, useState } from 'react';

const actionBtnData = [
  {
    value: 'Delete',
    icon: RxCrossCircled,
  },
  {
    value: 'Edit',
    icon: MdOutlineModeEdit,
  },
];

function CustomTable() {
  const [openActionIdx, setOpenActionIdx] = useState<null | number>(null);
  const actionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const data: FunctionData[] = [
    {
      key: '1',
      விழாபெயர்: 'தீபாவளி விழா',
      விழா_ஊர்: 'சென்னை',
      விழா_இடம்: 'மண்டபம்',
      விழா_தொடங்கும்_தேதி: '2024-12-31',
      விழா_ஆரம்ப_நேரம்: '10:00 AM',
      விழா_முடியும்_தேதி: '2025-01-01',
      விழா_முடியும்_நேரம்: '10:00 AM',
      நாட்கள்: 2,
      நடத்துபவர்: 'ரவி',
      நடத்துபவர்_கைபேசி_எண்: '9876543210',
      விழா_நாயகன்: 'குமார்',
      விழா_நாயகி: 'ரம்யா',
      மொத்த_செலவு: '₹50,000',
      நடத்துபவர்_ஊர்: 'மதுரை',
      நடத்துபவர்_முகவரி: 'மேல் தெரு, மதுரை',
    },
    {
      key: '2',
      விழாபெயர்: 'தீபாவளி விழா',
      விழா_ஊர்: 'சென்னை',
      விழா_இடம்: 'மண்டபம்',
      விழா_தொடங்கும்_தேதி: '2024-12-31',
      விழா_ஆரம்ப_நேரம்: '10:00 AM',
      விழா_முடியும்_தேதி: '2025-01-01',
      விழா_முடியும்_நேரம்: '10:00 AM',
      நாட்கள்: 2,
      நடத்துபவர்: 'ரவி',
      நடத்துபவர்_கைபேசி_எண்: '9876543210',
      விழா_நாயகன்: 'குமார்',
      விழா_நாயகி: 'ரம்யா',
      மொத்த_செலவு: '₹50,000',
      நடத்துபவர்_ஊர்: 'மதுரை',
      நடத்துபவர்_முகவரி: 'மேல் தெரு, மதுரை',
    },
    {
      key: '3',
      விழாபெயர்: 'தீபாவளி விழா',
      விழா_ஊர்: 'சென்னை',
      விழா_இடம்: 'மண்டபம்',
      விழா_தொடங்கும்_தேதி: '2024-12-31',
      விழா_ஆரம்ப_நேரம்: '10:00 AM',
      விழா_முடியும்_தேதி: '2025-01-01',
      விழா_முடியும்_நேரம்: '10:00 AM',
      நாட்கள்: 2,
      நடத்துபவர்: 'ரவி',
      நடத்துபவர்_கைபேசி_எண்: '9876543210',
      விழா_நாயகன்: 'குமார்',
      விழா_நாயகி: 'ரம்யா',
      மொத்த_செலவு: '₹50,000',
      நடத்துபவர்_ஊர்: 'மதுரை',
      நடத்துபவர்_முகவரி: 'மேல் தெரு, மதுரை',
    },
    {
      key: '4',
      விழாபெயர்: 'தீபாவளி விழா',
      விழா_ஊர்: 'சென்னை',
      விழா_இடம்: 'மண்டபம்',
      விழா_தொடங்கும்_தேதி: '2024-12-31',
      விழா_ஆரம்ப_நேரம்: '10:00 AM',
      விழா_முடியும்_தேதி: '2025-01-01',
      விழா_முடியும்_நேரம்: '10:00 AM',
      நாட்கள்: 2,
      நடத்துபவர்: 'ரவி',
      நடத்துபவர்_கைபேசி_எண்: '9876543210',
      விழா_நாயகன்: 'குமார்',
      விழா_நாயகி: 'ரம்யா',
      மொத்த_செலவு: '₹50,000',
      நடத்துபவர்_ஊர்: 'மதுரை',
      நடத்துபவர்_முகவரி: 'மேல் தெரு, மதுரை',
    },
    {
      key: '5',
      விழாபெயர்: 'தீபாவளி விழா',
      விழா_ஊர்: 'சென்னை',
      விழா_இடம்: 'மண்டபம்',
      விழா_தொடங்கும்_தேதி: '2024-12-31',
      விழா_ஆரம்ப_நேரம்: '10:00 AM',
      விழா_முடியும்_தேதி: '2025-01-01',
      விழா_முடியும்_நேரம்: '10:00 AM',
      நாட்கள்: 2,
      நடத்துபவர்: 'ரவி',
      நடத்துபவர்_கைபேசி_எண்: '9876543210',
      விழா_நாயகன்: 'குமார்',
      விழா_நாயகி: 'ரம்யா',
      மொத்த_செலவு: '₹50,000',
      நடத்துபவர்_ஊர்: 'மதுரை',
      நடத்துபவர்_முகவரி: 'மேல் தெரு, மதுரை',
    },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        openActionIdx !== null &&
        actionRefs.current[openActionIdx] &&
        !actionRefs.current[openActionIdx]?.contains(event.target as Node)
      ) {
        setOpenActionIdx(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openActionIdx]);

  const headers = Object.keys(data[0]).filter((key) => key !== 'key');

  return (
    <div className='overflow-x-auto select-none rounded-xl border border-gray-300'>
      <table className='table-auto w-full z-10'>
        <thead className='bg-lightBlue'>
          <tr className='text-left text-gray-700 font-extrabold text-sm'>
            {headers.map((key) => (
              <th key={key} className='px-4 py-3 whitespace-nowrap'>
                {key}
              </th>
            ))}
            <th className='sticky right-0 px-4 py-3 text-right bg-lightBlue'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, idx) => {
            const rowKey = String(entry.key || idx);
            return (
              <tr
                key={rowKey}
                className='cursor-pointer hover:bg-blue-100 text-sm text-gray-800 transition-colors border-b border-gray-200'
              >
                {headers.map((key) => (
                  <td key={key} className='px-4 py-3 whitespace-nowrap'>
                    {entry[key]}
                  </td>
                ))}
                <td className='sticky right-0 bg-slate-50 px-4 py-3 text-right z-10'>
                  <div className='relative group h-8 w-8 flex justify-center items-center rounded-md border border-solid border-gray-500 text-gray-500'>
                    <BsThreeDotsVertical />
                    <div className='absolute bottom-6 right-0 z-50 hidden group-hover:block'>
                      <ActionOptions data={actionBtnData} />
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CustomTable;
