module DataMappers
  class MagicItemDataMapper < DataMappers::BaseDataMapper
    def run magic_item
      image_url = get_image_url magic_item, :image

      {
        attunement: magic_item.attunement,
        category: magic_item.category,
        description: magic_item.description,
        id: magic_item.id,
        imageUrl: image_url,
        rarity: magic_item.rarity,
        subCategory: magic_item.sub_category,
        name: magic_item.name
      }
    end
  end
end