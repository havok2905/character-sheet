import React, { ReactElement, useEffect, useState } from 'react';
import { GearIcon } from '../../components/Icons';
import { getArticle } from '../../utilities/Api/Articles';
import { generatePath, Link, useParams } from 'react-router-dom';
import { IArticle } from '../../types/models';
import { MarkdownPreview } from '../../components/MarkdownPreview';
import { TagList } from '../../components/TagEditor/TagList';
import { WIKI_EDIT_ROUTE } from '../../app';

const WikiArticlePage = (): ReactElement | null => {
  const [article, setArticle] = useState<IArticle | null>(null);

  const params = useParams();

  useEffect(() => {
    if (params.id) {
      getArticle(params.id)
        .then(data => {
          setArticle(data.article);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }    
  }, []);

  if (!article) return null;

  const {
    content,
    heroImageUrl,
    id,
    tags,
    title
  } = article;

  return (
    <div className="layout">
      <div className="full">
        <div className="page-header">
          <div className="page-header-settings">
            <Link to={generatePath(WIKI_EDIT_ROUTE, { id })}>
              <GearIcon/>
            </Link>
          </div>
        </div>
        <h1>{title}</h1>
        <TagList tags={tags}/>
        {heroImageUrl && <img src={heroImageUrl} alt={`${title} hero image`} width="1000px"/>}
        <MarkdownPreview value={content}/>
      </div>
    </div>
  );
};

export { WikiArticlePage };
