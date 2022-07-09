import React, { ReactElement, useRef } from 'react';

interface IImageFormProps {
  buttonLabel: string;
  imageClassName?:string;
  imageUrl?: string;
  handleSubmit: (data: FormData) => void;
  inputName: string;
}

const ImageForm = ({
  buttonLabel,
  handleSubmit,
  imageClassName,
  imageUrl,
  inputName
}: IImageFormProps): ReactElement => {
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
      {imageUrl && <img className={imageClassName} src={imageUrl} />}
        <div>
          <input
            name={inputName}
            id={inputName}
            ref={imageFormRef}
            type="file" />
        </div>
        <button>
          {buttonLabel}
        </button>
    </form>
  );
};

export { ImageForm };
