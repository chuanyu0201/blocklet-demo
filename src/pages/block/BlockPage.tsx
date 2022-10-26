import { useState } from 'react';
import Search from './components/Search';
import { useQuery } from 'react-query';
import Transactions, { TransactionItemProps } from './components/Transactions';
import BlockDetail from './components/BlockDetail';

export type BlockType = {
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

const BLOCK_QUERY_URL = 'https://blockchain.info/rawblock/';
const fetchBlock = (hash: string): Promise<BlockType> =>
  fetch(`${BLOCK_QUERY_URL}${hash}`).then((res) => res.json());

const BlockPage = () => {
  const [hash, setHash] = useState('');
  const { data } = useQuery(['blockListQuery', hash], () => fetchBlock(hash), {
    enabled: !!hash,
  });


  return <div className='sm:my-12 my-8 mx-4 sm:mx-32'>
    <Search value={hash} onChange={(value) => setHash(value)} />
    {data?.error ? <p className='mt-2 text-rose-500'>{data?.message}</p> : <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3'>
      <BlockDetail block={data} />
      <Transactions transactions={data?.tx} />
    </div>}
  </div>;
};

export default BlockPage;
