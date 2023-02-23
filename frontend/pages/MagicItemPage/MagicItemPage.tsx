import React, { ReactElement, useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import { GearIcon } from '../../components/Icons/GearIcon';
import { generatePath, Link, useParams } from 'react-router-dom';
import { getMagicItem } from '../../utilities/Api/MagicItems';
import { IMagicItem } from '../../types/models';
import { MAGIC_ITEM_EDIT_ROUTE } from '../../app';
import { NewLineText } from '../../components/NewLineText';
import { Token } from '../../components/Token';

const MagicItemPage = (): ReactElement | null => {
  const [magicItem, setMagicItem] = useState<IMagicItem | null>(null);

  const params = useParams();

  useEffect(() => {
    if (params.id) {
      getMagicItem(params.id).then(data => setMagicItem(data.magicItem));
    }
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
    <div className="layout">
      <div className="full">
        <div className="page-header">
          <div className="page-header-settings">
            <Link to={generatePath(MAGIC_ITEM_EDIT_ROUTE, { id })}>
              <GearIcon/>
            </Link>
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
  );
};

export { MagicItemPage };
