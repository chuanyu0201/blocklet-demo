import { useCallback, useState } from 'react';
import Search from './components/Search';
import { useQuery } from 'react-query';
import Transactions, { TransactionItemProps } from './components/Transactions';
import BlockletDetail from './components/BlockletDetail';

export type BlockLet = {
  hash: string;
  ver: number;
  mrkl_root: string;
  time: number;
  bits: number;
  fee: number;
  nonce: number;
  n_tx: number;
  size: number;
  block_index: number;
  height: number;
  weight: number;
  tx: TransactionItemProps[];
  error?: string;
  message?: string
}

const BLOCKLET_QUERY_URL = 'https://blockchain.info/rawblock/';

const fetchBlock = (hash: string): Promise<BlockLet> =>
  fetch(`${BLOCKLET_QUERY_URL}${hash}`).then((res) => res.json());

const BlockletPage = () => {
  const [hash, setHash] = useState('');
  const { data, isLoading } = useQuery(['blockListQuery', hash], () => fetchBlock(hash), {
    enabled: !!hash,
  });
  const onChange = useCallback((value: string) => {
    setHash(value);
  }, []);

  return <div className='sm:my-12 my-8 mx-4 sm:mx-32'>
    <Search value={hash} onChange={onChange} />
    {hash === '' && <p className='mt-2'> Please enter a bitcoin blocklet hash</p>}
    {isLoading && <p className='mt-4 text-xl text-center'>loading...</p>}
    {data?.error ? <p className='mt-2 text-rose-500'>{data?.message}</p> :
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3'>
        <BlockletDetail blocklet={data} />
        <Transactions transactions={data?.tx} />
      </div>}
  </div>;
};

export default BlockletPage;
