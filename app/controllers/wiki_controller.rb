# frozen_string_literal: true

class WikiController < ApplicationController
  def index
    a = Article.order(:title)
    articles = articles_response_model a
    respond_to do |format|
      format.html
      format.json { render json: { articles: } }
    end
  end

  def show
    a = Article.find params[:id]
    article = article_response_model a
    respond_to do |format|
      format.html
      format.json { render json: { article: } }
    end
  end

  def new; end

  def edit; end

  def create
    create_params = create_article_params
    
    tags_to_associate = []

    create_params[:tags].each do |tag|
      existing_tag = Tag.where(title: tag).first
      existing_tag = Tag.create(title: tag) unless existing_tag
      tags_to_associate.push existing_tag
    end

    a = Article.create({
      content: create_params[:content],
      tags: tags_to_associate,
      title: create_params[:title]
    })

    article = article_response_model a
    render json: { article: }
  end

  def update
    update_params = update_article_params

    a = Article.find params[:id]

    tags_to_associate = []

    update_params[:tags].each do |tag|
      existing_tag = Tag.where(title: tag).first
      existing_tag = Tag.create(title: tag) unless existing_tag
      tags_to_associate.push existing_tag
    end

    a.update({
      content: update_params[:content],
      tags: tags_to_associate,
      title: update_params[:title]
    })

    article = article_response_model a
    render json: { article: }
  end

  def upload_hero_image
    a = Article.find params[:id]
    a.hero_image = params['article-hero-image-file-upload']
    a.save!
    article = article_response_model a
    render json: { article: }
  end

  def destroy
    a = Article.find params[:id]
    a.destroy
    render json: {}
  end

  private

  def article_response_model(article)
    mapper = DataMappers::Responses::ArticleDataMapper.new
    mapper.run article
  end

  def articles_response_model(articles)
    articles.map do |article|
      article_response_model article
    end
  end

  def create_article_params
    params.require(:article).permit(
      :content,
      :title,
      tags: []
    )
  end

  def update_article_params
    params.require(:article).permit(
      :content,
      :title,
      tags: []
    )
  end
end
