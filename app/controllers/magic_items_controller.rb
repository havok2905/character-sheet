# frozen_string_literal: true

class MagicItemsController < ApplicationController
  def index
    m = MagicItem.all
    magic_items = magic_items_response_model m
    respond_to do |format|
      format.html
      format.json { render json: { magicItems: magic_items } }
    end
  end

  def show
    m = MagicItem.find params[:id]
    magic_item = magic_item_response_model m
    respond_to do |format|
      format.html
      format.json { render json: { magicItem: magic_item } }
    end
  end

  def new
  end

  def create
    m = MagicItem.create create_magic_item_params
    magic_item = magic_item_response_model m
    render json: { magicItem: magic_item }
  end

  def edit
  end

  def update
    m = MagicItem.find params[:id]
    m.update update_magic_item_params
    magic_item = magic_item_response_model m
    render json: { magicItem: magic_item }
  end

  def upload_image
    m = MagicItem.find params[:id]
    m.image = params['magic-item-image-file-upload']
    m.save!
    magic_item = magic_item_response_model m
    render json: { magicItem: magic_item }
  end

  def destroy
    m = MagicItem.find params[:id]
    m.destroy
    render json: {}
  end

  private

  def magic_item_response_model magic_item
    mapper = DataMappers::MagicItemDataMapper.new
    mapper.run magic_item
  end

  def magic_items_response_model magic_items
    magic_items.map do |magic_item|
      magic_item_response_model magic_item
    end
  end

  def create_magic_item_params
    create_magic_item_request.deep_transform_keys!(&:underscore)
  end

  def create_magic_item_request
    params.require(:magicItem).permit(
      :attunement,
      :category,
      :description,
      :rarity,
      :subCategory,
      :name
    )
  end

  def update_magic_item_params
    update_magic_item_request.deep_transform_keys!(&:underscore)
  end

  def update_magic_item_request
    params.require(:magicItem).permit(
      :attunement,
      :category,
      :description,
      :rarity,
      :subCategory,
      :name
    )
  end
end
