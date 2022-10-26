import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BlockletDetail from './BlockletDetail';
import { BlockLet } from '../BlockletPage';

describe('BlockletDetail components', () => {
  test('check render text', async () => {
    const blocklet = {
      bits: 386863986,
      block_index: 662463,
      fee: 16583560,
      hash: '00000000000000000007878ec04bb2b2e12317804810f4c26033585b3f81ffaa',
      height: 662463,
      weight: 3999475,
    } as BlockLet;

    render(<BlockletDetail blocklet={blocklet} />);
    expect(screen.queryByText(/test render/)).toBeNull();
    expect(await screen.findByText(/3,999,475 WU/)).toBeInTheDocument();
    expect(await screen.findByText(/386,863,986/)).toBeInTheDocument();
  });

});
