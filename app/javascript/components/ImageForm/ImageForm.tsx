import React, { ReactElement, useRef } from 'react';

interface IImageFormProps {
  buttonLabel: string;
  imageUrl?: string;
  handleSubmit: (data: FormData) => void;
  inputName: string;
  labelText: string;
}

const ImageForm = ({
  buttonLabel,
  handleSubmit,
  imageUrl,
  inputName,
  labelText
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
      {imageUrl && <img src={imageUrl} />}
      <fieldset>
        <label htmlFor={inputName}>
          {labelText}
        </label>
        <input
          name={inputName}
          id={inputName}
          ref={imageFormRef}
          type="file" />
        <button className="button button-constructive">
          {buttonLabel}
        </button>
      </fieldset>
    </form>
  );
};

export { ImageForm };
