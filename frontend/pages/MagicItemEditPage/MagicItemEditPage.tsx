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
  Navigate,
  useNavigate,
  useParams
} from 'react-router-dom';
import { IMagicItem } from '../../types/models';
import { ImageForm } from '../../components/ImageForm';
import {
  LOGIN_ROUTE,
  MAGIC_ITEM_ROUTE,
  MAGIC_ITEMS_ROUTE
} from '../../app';
import { MagicItemForm } from '../../components/MagicItemForm';
import { Navbar } from '../../components/Navbar/Navbar';
import { useAuth } from '../hooks/useAuth';

const MagicItemEditPage = (): ReactElement | null => {
  const [magicItem, setMagicItem] = useState<IMagicItem | null>(null);
  const params = useParams();
  const navigate = useNavigate();

  const {authenticated, loading} = useAuth(() => {
    if (params.id) {
      getMagicItem(params.id).then(data => setMagicItem(data.magicItem));
    }
  });

  if (loading) return null;
  if (!authenticated) return <Navigate replace to={LOGIN_ROUTE} />;
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
    <>
      <Navbar authenticated={authenticated}/>
      <div className="layout">
        <div className="full">
          <Link to={generatePath(MAGIC_ITEM_ROUTE, { id: id as string })}>
            Back
          </Link>
          <h1>Edit Magic Item</h1>
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
    </>
  );
};

export { MagicItemEditPage };