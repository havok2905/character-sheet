import React, { ReactElement, useEffect, useState } from 'react';
import { getArticles } from '../../utilities/Api/Articles';
import { IArticle } from '../../types/models';
import { WikiItem } from '../../components/WikiItem';

const WikiPage = (): ReactElement => {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [tagFilter, setTagFilter] = useState('');
  const [titleFilter, setTitleFilter] = useState('');

  useEffect(() => {
    getArticles()
      .then(data => {
        setArticles([...data.articles]);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const getFilteredArticles = (): IArticle[] => {
    let filteredArticles = articles;

    if (tagFilter) {
      filteredArticles = filteredArticles.filter(article => {
        return !!article.tags.find(tag => {
          return tag.includes(tagFilter);
        })
      });
    }
    
    if (titleFilter) {
      filteredArticles = filteredArticles.filter(article => {
        return article.title.includes(titleFilter);
      });
    }
    return filteredArticles;
  };

  const handleTitleFilterOnChange = e => {
    setTitleFilter(e.target.value);
  }

  const handleTagFilterOnChange = e => {
    setTagFilter(e.target.value);
  }

  return (
    <div className="layout">
      <div className="full">
        <h1>Wiki</h1>
        <a href="/wiki/new">Create</a>
        <form>
          <fieldset>
            <label>Tag</label>
            <input onChange={handleTagFilterOnChange} type="text"/>
            <label>Title</label>
            <input onChange={handleTitleFilterOnChange} type="text"/>
          </fieldset>
        </form>
        {
          getFilteredArticles().map(article => {
            const {
              heroImageUrl,
              id,
              tags,
              title
            } = article;
            
            return (
              <WikiItem
                path={`/wiki/${id}`}
                imagePath={heroImageUrl || ''}
                tags={tags}
                title={title}
              />
            );
          })
        }
      </div>
    </div>
  );
};

export { WikiPage };
