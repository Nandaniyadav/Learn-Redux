import React, { Component } from 'react';
import './Pagination.css';
import { Pagination, PaginationItem } from '@mui/material';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export class Paginations extends Component {
  render() {
    return (
      <div style={{ }} >
        <Stack spacing={2} className='paginationStyle'>
          <Pagination
            count={10}
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
        </Stack>
      </div>
    )
  }
}

export default Paginations;