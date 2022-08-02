import React from 'react';

import PropTypes from 'prop-types';
import SplitLayout from '@common/SplitLayout';

const BlogLayout = ({ children }) => {

  return (
    <SplitLayout
      content={children}
    />
  );
};

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
  sharerSection: PropTypes.node,
};

export default BlogLayout;
