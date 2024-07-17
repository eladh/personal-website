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
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name : "<b>Elad Hirsch</b>",
      </pre>
      <pre>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Focus Area : [<b>"Public Cloud"</b> ,<b>"Data"</b>, <b>"LLM"</b>]",
      </pre>
      <pre>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email : "<b>elad@terasky.com</b>"
      </pre>
      <pre>&nbsp;&nbsp;{'}'}</pre>
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
