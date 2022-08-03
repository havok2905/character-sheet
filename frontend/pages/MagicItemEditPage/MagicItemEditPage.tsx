import React, { ReactElement, useEffect, useState } from 'react';
import { DeleteButton } from '../../components/DeleteButton';
import {
  destroyMagicItem,
  getMagicItem,
  updateMagicItem,
  uploadMagicItemImage
} from '../../utilities/Api/MagicItems';
import { IMagicItem } from '../../types/models';
import { ImageForm } from '../../components/ImageForm';
import { MagicItemForm } from '../../components/MagicItemForm';
import { useParams } from 'react-router-dom';

const MagicItemEditPage = (): ReactElement | null => {
  const [magicItem, setMagicItem] = useState<IMagicItem | null>(null);
  
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      getMagicItem(params.id).then(data => setMagicItem(data.magicItem));
    }
  }, []);

  if (!magicItem) return null;

  const { id, imageUrl } = magicItem;

  const handleDelete = () => {
    if (!id) return;

    destroyMagicItem(id)
      .then(() => {
        window.location.href = '/magic_items/';
      })
      .catch((error) => {
        console.error('Error:', error);
        window.location.href = `/magic_items/${id}/edit/`;
      });
  };
  
  const handleSubmit = (magicItem: IMagicItem) => {
    if (!id) return;

    updateMagicItem(id, { magicItem })
      .then(() => {
        window.location.href = `/magic_items/${id}`;
      })
      .catch((error) => {
        console.error('Error:', error);
        window.location.href = `/magic_items/${id}`;
      });
  };

  const handleImageUpload = (data: FormData | undefined) => {
    if (!data || !id) return;
              
    uploadMagicItemImage(id, data)
      .then(data => {
        window.location.href = `/magic_items/${data.magicItem.id}`;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="layout">
      <div className="full">
        <h1>Edit Magic Item</h1>
        <a href={`/magic_items/${id}`}>Back</a>
        <ImageForm
          buttonLabel="Upload Image"
          imageUrl={imageUrl}
          inputName="magic-item-image-file-upload"
          handleSubmit={handleImageUpload}
        />
        <MagicItemForm
          handleSubmit={handleSubmit}
          handleSubmitButtonLabel="Update Magic Item"
          magicItem={magicItem}/>
        <DeleteButton
          buttonText="Delete Magic Item"
          handleDelete={handleDelete}/>
      </div>
    </div>
  );
};

export { MagicItemEditPage };