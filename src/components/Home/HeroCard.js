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
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name : "<b>Elad Hirsch</b>",
      </pre>
      <pre>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;services : [<b>"Training"</b> ,<b>"Development"</b>, <b>"Consulting"</b>]",
      </pre>
      <pre>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;email : "<b>hirsch.elad@gmail.com</b>"
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
