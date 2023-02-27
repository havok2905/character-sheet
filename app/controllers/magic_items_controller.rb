# frozen_string_literal: true

class MagicItemsController < ApiController
  skip_before_action :authenticate_request, only: [:index, :show]

  def index
    m = MagicItem.order :name
    magic_items = magic_items_response_model m
    render json: { magicItems: magic_items }
  end

  def show
    m = MagicItem.find params[:id]
    magic_item = magic_item_response_model m
    render json: { magicItem: magic_item }
  end

  def create
    m = MagicItem.create create_magic_item_params
    magic_item = magic_item_response_model m
    render json: { magicItem: magic_item }
  end

  def update
    m = MagicItem.find params[:id]
    m.update update_magic_item_params
    magic_item = magic_item_response_model m
    render json: { magicItem: magic_item }
  end

  def upload_image
    m = MagicItem.find params[:id]
    s3_client = S3::S3Client.new

    acl = 'public-read'
    bucket = ENV['S3_BUCKET']
    body = params['magic-item-image-file-upload']
    key = s3_client.generate_object_key_from_file body
    
    s3_client.put_object acl, bucket, body, key

    m.image_path = key
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

  def magic_item_response_model(magic_item)
    mapper = DataMappers::Responses::MagicItemDataMapper.new
    mapper.run magic_item
  end

  def magic_items_response_model(magic_items)
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
