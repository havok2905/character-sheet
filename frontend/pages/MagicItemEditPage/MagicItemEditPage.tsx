import React, { FC } from 'react';
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
import { useMutation, useQuery } from '@tanstack/react-query';

const MagicItemEditPage: FC = () => {
  const params = useParams();
  const navigate = useNavigate();

  const authQuery = useAuth();

  const {
    data,
    isError,
    isLoading
  } = useQuery({
    queryFn: async () => getMagicItem(params.id ?? ''),
    queryKey: ['magic-item']
  });

  const destroyMagicItemMutation = useMutation({
    mutationFn: async (id: string) => destroyMagicItem(id),
    onError: (error) => {
      console.error('Error:', error);
      location.reload();
    },
    onSuccess: () => {
      navigate(MAGIC_ITEMS_ROUTE);
    }
  });

  interface UpdateMagicItemMutationRequest {
    magicItem: IMagicItem;
    id: string;
  }

  const updateMagicItemMutation = useMutation({
    mutationFn: async ({magicItem, id}: UpdateMagicItemMutationRequest) => updateMagicItem(id, { magicItem }),
    onError: (error) => {
      console.error('Error:', error);
      navigate(generatePath(MAGIC_ITEM_ROUTE, { id: params.id ?? '' }));
    },
    onSuccess: () => {
      navigate(generatePath(MAGIC_ITEM_ROUTE, { id: params.id ?? '' }));
    }
  });

  interface UploadMagicItemImageMutationRequest {
    data: FormData;
    id: string;
  }

  const uploadMagicItemImageMutation = useMutation({
    mutationFn: async({data, id}: UploadMagicItemImageMutationRequest) => uploadMagicItemImage(id, data),
    onError(error) {
      console.error('Error:', error);
    },
    onSuccess: () => {
      location.reload();
    }
  });

  if (
    authQuery.isLoading ||
    isLoading || isError
  ) return null;

  if (!authQuery.isSuccess) return <Navigate replace to={LOGIN_ROUTE} />;

  const magicItem = data.magicItem;

  const { id, imageUrl } = magicItem;

  const handleDelete = () => {
    if (!id) return;
    destroyMagicItemMutation.mutate(id);
  };
  
  const handleSubmit = (magicItem: IMagicItem) => {
    if (!id) return;
    updateMagicItemMutation.mutate({ id, magicItem });
  };

  const handleImageUpload = (data: FormData | undefined) => {
    if (!data || !id) return;
    uploadMagicItemImageMutation.mutate({ data, id });
  };

  return (
    <>
      <Navbar authenticated={authQuery.isSuccess}/>
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