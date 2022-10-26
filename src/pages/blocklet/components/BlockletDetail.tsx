import { memo, ReactNode } from 'react';
import { BlockLet } from '../BlockletPage';
import dayjs from 'dayjs';

const BlockletDetail = memo(({ blocklet }: { blocklet?: BlockLet }) => {
  if (blocklet == null) {
    return null;
  }
  return <div>
    <h2 className='text-2xl text-left'>Bitcoin Block #{blocklet.block_index}</h2>
    <p className='text-xs'>Mined on {dayjs(blocklet.time * 1000).format('YYYY-MM-DD HH:mm:ss')}</p>
    <h3 className='text-lg font-bold mb-2 mt-4'>details</h3>
    <DetailItem label='Hash' text={blocklet.hash.substring(blocklet.hash.length - 6)} />
    <DetailItem label='Size' text={blocklet.size} />
    <DetailItem label='Mined on' text={dayjs(blocklet.time * 1000).format('YYYY年MM月DD日 HH:mm:ss')} />
    <DetailItem label='Bits' text={blocklet.bits.toLocaleString('zh-CN')} />
    <DetailItem label='Transactions' text={blocklet.n_tx} />
    <DetailItem label='Nonce' text={blocklet.nonce} />
    <DetailItem label='Fees' text={`0.${blocklet.fee} BTC`} />
    <DetailItem label='Height' text={blocklet.height} />
    <DetailItem label='Weight' text={`${blocklet.weight.toLocaleString('zh-CN')} WU`} />
  </div>;
});

const DetailItem = memo(({ label, text }: { label: string, text: ReactNode }) => {
  return <div className='flex justify-between w-full mb-2 pr-6'>
    <p>{label}</p>
    <p className='text-gray-400 text-sm'>{text}</p>
  </div>;
});
export default BlockletDetail;
