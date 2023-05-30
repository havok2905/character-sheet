import React, { FC } from 'react';

interface INewLineTextProps {
  text: string;
}

const NewLineText: FC<INewLineTextProps> = ({
  text
}) => {
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
