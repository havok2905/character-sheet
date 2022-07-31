import React, { ReactElement, useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import { GearIcon } from '../../components/Icons/GearIcon';
import { getMagicItem } from '../../utilities/Api/MagicItems';
import { IMagicItem } from '../../types/models';
import { Layout } from '../../layouts/Layout';
import { Token } from '../../components/Token';

const getIdFromUrl = ():string => {
  const url = new URL(window.location.href);
  const parts = url.pathname.split('/').filter(Boolean);
  return parts[1];
};

const MagicItemPage = (): ReactElement | null => {
  const [magicItem, setMagicItem] = useState<IMagicItem | null>(null);

  useEffect(() => {
    const id = getIdFromUrl();
    getMagicItem(id).then(data => setMagicItem(data.magicItem));
  }, []);

  if (!magicItem) return null;

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
    <Layout>
      <div className="layout">
        <div className="full">
          <div className="page-header">
            <div className="page-header-settings">
              <a href={`/magic_items/${id}/edit`}>
                <GearIcon/>
              </a>
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
              {description}
            </p>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export { MagicItemPage };
