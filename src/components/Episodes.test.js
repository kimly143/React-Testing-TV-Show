import React from 'react';
import { render } from '@testing-library/react';

import Episodes from './Episodes';

test('episodes render with no error', () => {
    //using jest expect and .not
    expect(()=>{
        render(<Episodes episodes={[]} />);
    }).not.toThrow();
});
