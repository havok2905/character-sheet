import React, { ReactElement, useEffect, useState } from 'react';
import { DeleteButton } from '../../components/DeleteButton';
import {
  destroyMagicItem,
  getMagicItem,
  updateMagicItem,
  uploadMagicItemImage
} from '../../utilities/Api/MagicItems';
import {
  generatePath,
  Link,
  useNavigate,
  useParams
} from 'react-router-dom';
import { IMagicItem } from '../../types/models';
import { ImageForm } from '../../components/ImageForm';
import { MagicItemForm } from '../../components/MagicItemForm';
import {
  MAGIC_ITEM_ROUTE,
  MAGIC_ITEMS_ROUTE
} from '../../app';

const MagicItemEditPage = (): ReactElement | null => {
  const [magicItem, setMagicItem] = useState<IMagicItem | null>(null);
  
  const navigate = useNavigate();
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
        navigate(MAGIC_ITEMS_ROUTE);
      })
      .catch((error) => {
        console.error('Error:', error);
        location.reload();
      });
  };
  
  const handleSubmit = (magicItem: IMagicItem) => {
    if (!id) return;

    updateMagicItem(id, { magicItem })
      .then(() => {
        navigate(generatePath(MAGIC_ITEM_ROUTE, { id }));
      })
      .catch((error) => {
        console.error('Error:', error);
        location.reload();
      });
  };

  const handleImageUpload = (data: FormData | undefined) => {
    if (!data || !id) return;
              
    uploadMagicItemImage(id, data)
      .then(() => {
        navigate(generatePath(MAGIC_ITEM_ROUTE, { id }));
      })
      .catch((error) => {
        console.error('Error:', error);
        location.reload();
      });
  };

  return (
    <div className="layout">
      <div className="full">
        <h1>Edit Magic Item</h1>
        <Link to={generatePath(MAGIC_ITEM_ROUTE, { id })}>
          Back
        </Link>
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