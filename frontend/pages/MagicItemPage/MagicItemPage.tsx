import React, { ReactNode } from 'react';
import { Card } from '../../components/Card';
import { GearIcon } from '../../components/Icons/GearIcon';
import { generatePath, Link, useParams } from 'react-router-dom';
import { getMagicItem } from '../../utilities/Api/MagicItems';
import { MAGIC_ITEM_EDIT_ROUTE } from '../../app';
import { Navbar } from '../../components/Navbar/Navbar';
import { NewLineText } from '../../components/NewLineText';
import { Token } from '../../components/Token';
import { useAuth } from '../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const MagicItemPage = (): ReactNode => {
  const params = useParams();

  const {authenticated} = useAuth(() => {});

  const {
    data,
    isError,
    isLoading
  } = useQuery({
    queryFn: async () => getMagicItem(params.id ?? ''),
    queryKey: ['magic-item']
  });

  if (isLoading || isError) return null;

  const magicItem = data.magicItem;

  const {
    attunement,
    category,
    description,
    id,
    imageUrl,
    name,
    rarity,
    subCategory
  } = magicItem;

  return (
    <>
      <Navbar authenticated={authenticated}/>
      <div className="layout">
        <div className="full">
          <div className="page-header">
            <div className="page-header-settings">
              {
                authenticated && (
                  <Link to={generatePath(MAGIC_ITEM_EDIT_ROUTE, { id: id as string })}>
                    <GearIcon/>
                  </Link>
                )
              }
            </div>
          </div>
        </div>
        <div className="full">
          <Token imageAltText={`${name} - token`} imageUrl={imageUrl}/>
          <h1>{name}</h1>
          <Card>
            <p><strong>Attunement: </strong>{attunement ? 'Has attunement' : ''}</p>
            <p><strong>Category: </strong>{category}</p>
            <p><strong>Sub Category: </strong>{subCategory}</p>
            <p><strong>Rarity: </strong>{rarity}</p>
            <p>
              <strong>Description: </strong>
              <NewLineText text={description} />
            </p>
          </Card>
        </div>
      </div>
    </>
  );
};

export { MagicItemPage };
