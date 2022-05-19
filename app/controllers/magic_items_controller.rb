# frozen_string_literal: true

class MagicItemsController < ApplicationController
  include UiImagable

  helper_method :image_alt_text
  helper_method :image_url

  before_action :authenticate_user!, only: %i[
    create
    destroy
    edit
    new
    update
  ]

  def index
    @magic_items = magic_items_search
  end

  def show
    @magic_item = magic_item_by_id
  end

  def new
    @magic_item = new_magic_item
  end

  def create
    @magic_item = new_magic_item_with_params

    if @magic_item.save
      redirect_to magic_items_path
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    @magic_item = magic_item_by_id
  end

  def update
    @magic_item = magic_item_by_id

    if @magic_item.update magic_item_params
      redirect_to magic_item_path @magic_item
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @magic_item = magic_item_by_id
    destroy_error_flash unless @magic_item.destroy
    redirect_to magic_items_path
  end

  helper_method :description
  def description(magic_item)
    return unless magic_item.present?
    attunement = magic_item.attunement ? ' (requires attunement)' : nil
    sub_category = magic_item.sub_category ? " (#{magic_item.sub_category})" : nil
    "#{magic_item.category}#{sub_category}, #{magic_item.rarity}#{attunement}"
  end

  helper_method :modify_magic_item
  def modify_magic_item
    user_signed_in?
  end

  private

  def destroy_error_flash
    flash.alert = 'There was a problem deleting this magic item.'
  end

  def update_error_flash
    flash.alert = 'There was a problem updating this magic item.'
  end

  def magic_item_by_id
    MagicItem.find params[:id]
  end

  def magic_item_params
    params.require(:magic_item).permit(
      :attunement,
      :category,
      :description,
      :image,
      :rarity,
      :sub_category,
      :name
    )
  end

  def magic_items
    MagicItem.order(:name)
  end

  def magic_items_search
    category = params[:search_by_category]
    name = params[:search_by_name]
    rarity = params[:search_by_rarity]

    found_magic_items = magic_items
    found_magic_items = found_magic_items.where(rarity:) if rarity.present?
    found_magic_items = found_magic_items.where(category:) if category.present?
    found_magic_items = found_magic_items.where('name LIKE ?', "%#{name}%") if name.present?
    found_magic_items
  end

  def new_magic_item
    MagicItem.new
  end

  def new_magic_item_with_params
    MagicItem.new magic_item_params
  end
end
