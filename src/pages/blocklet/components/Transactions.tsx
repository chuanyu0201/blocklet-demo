import { memo, useMemo, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import dayjs from 'dayjs';

const pageSize = 8;

export type TransactionItemProps = {
  index: number;
  time: number,
  hash: string
}

const Transactions = memo((props: { transactions?: TransactionItemProps[] }) => {
  const [page, setPage] = useState(0);
  const showTransactions = useMemo(() => {
    if(props.transactions == null) {
      return []
    }
    return props.transactions?.slice(page * pageSize, (page + 1) * pageSize);
  }, [props.transactions]);

  if (props.transactions == null) {
    return null;
  }

  return <div className='flex items-center flex-col'>
    <h2 className='w-full text-xl'>Transactions</h2>
    {showTransactions.map((transaction: any, index: number) => {
      return <TransactionItem key={index} {...transaction} index={index} />;
    })}
    <Pagination className='mt-6' count={pageSize} onChange={(e, page) => setPage(page)} />
  </div>;
});

const TransactionItem = memo((props: TransactionItemProps) => {
  return <div className='border p-1 mt-2 pl-2 rounded w-full'>
    <p className='text-sm'>TX {props.index}
      <span className='text-xs'> hash
        <span className='text-orange-300'> {props.hash.substring(props.hash.length - 6)}</span>
       </span>
    </p>
    <p className='text-xs'>{dayjs(props.time * 1000).format('YYYY-MM-DD HH:mm:ss')}</p>
  </div>;
});

export default Transactions;
