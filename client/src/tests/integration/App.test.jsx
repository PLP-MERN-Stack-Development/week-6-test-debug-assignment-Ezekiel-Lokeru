/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import Posts from '../../components/Posts';
import axios from 'axios';
import { vi } from 'vitest';

// Mock axios
vi.mock('axios');

describe('Posts component', () => {
  it('renders no posts message when empty', async () => {
    axios.get.mockResolvedValueOnce({ data: [] });

    render(<Posts />);

    expect(await screen.findByText(/no posts/i)).toBeInTheDocument();
  });

  it('renders posts correctly', async () => {
    const mockPosts = [
      { _id: '1', title: 'Test Post 1', content: 'Content for test post 1' },
      { _id: '2', title: 'Test Post 2', content: 'Content for test post 2' },
    ];

    axios.get.mockResolvedValueOnce({ data: mockPosts });

    render(<Posts />);

    // Check heading for first post
    expect(await screen.findByRole('heading', { name: /Test Post 1/i })).toBeInTheDocument();

    // Check heading for second post
    expect(screen.getByRole('heading', { name: /Test Post 2/i })).toBeInTheDocument();

    // Optionally, check content paragraphs if needed
    expect(screen.getByText(/Content for test post 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Content for test post 2/i)).toBeInTheDocument();
  });
});
