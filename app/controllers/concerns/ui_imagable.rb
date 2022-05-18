module UiImagable
  include ActiveSupport::Concern

  def image_alt_text(item)
    return unless item.present?
    "#{item.name} token"
  end

  def image_url(item)
    return unless item.present?
    item.image.attached? ? url_for(item.image) : nil
  end
end