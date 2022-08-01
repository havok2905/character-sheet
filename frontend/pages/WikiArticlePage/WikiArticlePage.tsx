import React, { ReactElement, useEffect, useState } from 'react';
import { GearIcon } from '../../components/Icons';
import { getArticle } from '../../utilities/Api/Articles';
import { IArticle } from '../../types/models';
import { Layout } from '../../layouts/Layout';
import { MarkdownPreview } from '../../components/MarkdownPreview';
import { TagList } from '../../components/TagEditor/TagList';

const getIdFromUrl = ():string => {
  const url = new URL(window.location.href);
  const parts = url.pathname.split('/').filter(Boolean);
  return parts[1];
};

const WikiArticlePage = (): ReactElement | null => {
  const [article, setArticle] = useState<IArticle | null>(null);

  useEffect(() => {
    const id = getIdFromUrl();

    getArticle(id)
      .then(data => {
        setArticle(data.article);
      })
      .catch((error) => {
        console.error('Error:', error);
      });    
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
    <Layout>
      <div className="layout">
        <div className="full">
          <div className="page-header">
            <div className="page-header-settings">
              <a href={`/wiki/${id}/edit`}>
                <GearIcon/>
              </a>
            </div>
          </div>
          <h1>{title}</h1>
          <TagList tags={tags}/>
          {heroImageUrl && <img src={heroImageUrl} alt={`${title} hero image`}/>}
          <MarkdownPreview value={content}/>
        </div>
      </div>
    </Layout>
  );
};

export { WikiArticlePage };
