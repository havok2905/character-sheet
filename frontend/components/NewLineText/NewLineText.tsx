import React, { ReactElement } from 'react';

interface INewLineTextProps {
  text: string;
}

const NewLineText = ({
  text
}: INewLineTextProps): ReactElement => {
  return (
    <>
      {
        text.split('\n').map(value => {
          return (
            <>
              {value}
              <br />
            </>
          );
        })
      }
    </>
  );
};

export { NewLineText };
