class CampaignsController < ApplicationController
  before_action :authenticate_user!, :only => [
    :create,
    :destroy,
    :edit,
    :new,
    :update
  ]

  def index
    @campaigns = campaigns
  end

  def show
    @campaign = campaign_by_id
  end

  def edit
    @campaign = campaign_by_id
  end

  def update
    @campaign = campaign_by_id
    
    if @campaign.update campaign_params
      redirect_to @campaign
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def new
    @campaign = new_campaign
  end

  def create
    @campaign = new_campaign_with_params

    if @campaign.save
      redirect_to @campaign
    else
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    @campaign = campaign_by_id
    @campaign.destroy
    redirect_to campaigns_path
  end

  helper_method :modify_campaign
  def modify_campaign
    user_signed_in?
  end

  private

  def campaign_by_id
    Campaign.find params[:id]
  end

  def campaigns
    Campaign.all
  end

  def campaign_params
    params.require(:campaign).permit!
  end

  def new_campaign
    Campaign.new
  end

  def new_campaign_with_params
    Campaign.new campaign_params
  end
end