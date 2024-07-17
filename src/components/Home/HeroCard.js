import React from 'react';

import {
  HeroCardWrapper,
  CodeCardWrapper,
} from './HeroCard.style';

export const CodeCard = () => {

  return (
    <CodeCardWrapper>
      <pre>
        &nbsp;&nbsp;{'{'}
      </pre>
      <pre>
        &nbsp;&nbsp;&nbsp;&nbsp;"name": "<b>Elad Hirsch</b>",
      </pre>
      <pre>
        &nbsp;&nbsp;&nbsp;&nbsp;"focusArea": [
      </pre>
      <pre>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"<b>Cloud</b>",
      </pre>
      <pre>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"<b>Data</b>",
      </pre>
      <pre>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"<b>LLM</b>"
      </pre>
      <pre>
        &nbsp;&nbsp;&nbsp;&nbsp;],
      </pre>
      <pre>
        &nbsp;&nbsp;&nbsp;&nbsp;"email": "<b>elad@terasky.com</b>"
      </pre>
      <pre>
        &nbsp;&nbsp;{'}'}
      </pre>
    </CodeCardWrapper>
  );
};

export const HeroCard = () => {
  return (
    <HeroCardWrapper>
      <CodeCard />
    </HeroCardWrapper>
  );
};
