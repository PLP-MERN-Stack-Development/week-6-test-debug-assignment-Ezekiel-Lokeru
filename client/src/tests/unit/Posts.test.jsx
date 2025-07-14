/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import Posts from '../../components/Posts';
import axios from 'axios';

vi.mock('axios');

test('renders no posts message', async () => {
  axios.get.mockResolvedValue({ data: [] });

  render(<Posts />);
  
  expect(await screen.findByText(/no posts/i)).toBeInTheDocument();
});
