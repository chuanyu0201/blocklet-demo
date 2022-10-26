import { memo, ReactNode } from 'react';
import { BlockType } from '../BlockPage';
import dayjs from 'dayjs';

const BlockDetail = memo(({ block }: { block?: BlockType }) => {
  if(block == null) {
    return null
  }
  return <div>
    <h2 className='text-2xl text-left'>Bitcoin Block #{block.block_index}</h2>
    <p className='text-xs'>Mined on {dayjs(block.time * 1000).format('YYYY-MM-DD HH:mm:ss')}</p>
    <h3 className='text-lg font-bold mb-2 mt-4'>details</h3>
    <DetailItem label='Hash' text={block.hash.substring(block.hash.length - 6)} />
    <DetailItem label='Size' text={block.size} />
    <DetailItem label='Mined on' text={dayjs(block.time * 1000).format('YYYY年MM月DD日 HH:mm:ss')} />
    <DetailItem label='Bits' text={block.bits.toLocaleString('zh-CN')} />
    <DetailItem label='Transactions' text={block.n_tx} />
    <DetailItem label='Nonce' text={block.nonce} />
    <DetailItem label='Fees' text={`0.${block.fee} BTC`} />
    <DetailItem label='Height' text={block.height} />
    <DetailItem label='Weight' text={`${block.weight.toLocaleString('zh-CN')} WU`} />
  </div>;
});

const DetailItem = memo(({ label, text }: { label: string, text: ReactNode }) => {
  return <div className='flex justify-between w-full mb-2 pr-6'>
    <p>{label}</p>
    <p className='text-gray-400 text-sm'>{text}</p>
  </div>;
});
export default BlockDetail;
