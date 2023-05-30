import React, { FC, useRef } from 'react';

interface IImageFormProps {
  buttonLabel: string;
  imageUrl?: string;
  handleSubmit: (data: FormData) => void;
  inputName: string;
}

const ImageForm: FC<IImageFormProps> = ({
  buttonLabel,
  handleSubmit,
  imageUrl,
  inputName
}) => {
  const imageFormRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = e => {
    e.preventDefault();

    const data = new FormData();
    const filesToUpload = imageFormRef?.current?.files;

    if (!filesToUpload?.length) return;

    data.append(inputName, filesToUpload[0]);

    handleSubmit(data);
  };

  return (
    <form onSubmit={onSubmit}>
      <img src={imageUrl}/>
      <div>
        <input
          name={inputName}
          id={inputName}
          ref={imageFormRef}
          type="file" />
      </div>
      <button className="button button-constructive">
        {buttonLabel}
      </button>
    </form>
  );
};

export { ImageForm };
