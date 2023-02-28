# frozen_string_literal: true

class CharactersController < ApiController
  skip_before_action :authenticate_request, only: [:index, :show]

  def index
    c = Character.order :name
    characters = characters_response_model c
    render json: { characters: }
  end

  def show
    c = Character.find params[:id]
    character = character_response_model c
    render json: { character: }
  end

  def create
    c = Character.create create_character_params
    character = character_response_model c
    render json: { character: }
  end

  def update
    c = Character.find params[:id]
    c.update update_character_params
    character = character_response_model c
    render json: { character: }
  end

  def upload_image
    c = Character.find params[:id]
    s3_client = S3::S3Client.new
    
    acl = 'public-read'
    bucket = ENV['S3_BUCKET']
    body = params['character-image-file-upload']
    key = s3_client.generate_object_key_from_file body

    s3_client.put_object acl, bucket, body, key
    
    c.image_path = key
    c.save!
    
    character = character_response_model c
    render json: { character: }
  end

  def destroy
    c = Character.find params[:id]
    c.destroy
    render json: {}
  end

  private

  def create_character_params
    create_character_request.deep_transform_keys!(&:underscore)
  end

  def create_character_request
    params.require(:character).permit(
      :ac,
      :acrobaticsProf,
      :age,
      :alignment,
      :animalHandlingProf,
      :arcanaProf,
      :athleticsProf,
      :armorProficiencies,
      :background,
      :backstory,
      :bonds,
      :characterClass,
      :characterClassHitDice,
      :characterClassLevel,
      :characterSubClass,
      :charismaProf,
      :charismaScore,
      :conditionImmunities,
      :conditionResistances,
      :conditionVulnerabilities,
      :constitutionProf,
      :constitutionScore,
      :copperPieces,
      :damageImmunities,
      :damageResistances,
      :damageVulnerabilities,
      :deceptionProf,
      :dexterityProf,
      :dexterityScore,
      :electrumPieces,
      :eyes,
      :flaws,
      :goldPieces,
      :hair,
      :height,
      :historyProf,
      :hp,
      :ideals,
      :initiative,
      :insightProf,
      :intelligenceProf,
      :intelligenceScore,
      :intimidationProf,
      :investigationProf,
      :jackOfAllTrades,
      :languages,
      :medicineProf,
      :multiclassClass,
      :multiclassClassHitDice,
      :multiclassClassLevel,
      :multiclassSubClass,
      :name,
      :natureProf,
      :passivePerception,
      :perceptionProf,
      :performanceProf,
      :personalityTraits,
      :persuasionProf,
      :platinumPieces,
      :proficiencyBonus,
      :race,
      :religionProf,
      :senses,
      :silverPieces,
      :skin,
      :sleightOfHandProf,
      :speed,
      :spellcastingAbility,
      :stealthProf,
      :strengthProf,
      :strengthScore,
      :subRace,
      :survivalProf,
      :toolProficiencies,
      :weaponProficiencies,
      :weight,
      :wisdomProf,
      :wisdomScore
    )
  end

  def update_character_params
    character_params = update_character_request.deep_transform_keys!(&:underscore)

    character_params[:character_attacks].each do |attack|
      attack.deep_transform_keys!(&:underscore)
    end

    character_params[:character_attacks_attributes] = character_params[:character_attacks]
    character_params[:character_features_attributes] = character_params[:character_features]
    character_params[:character_feature_resources_attributes] = character_params[:character_feature_resources]
    character_params[:character_items_attributes] = character_params[:character_items]

    character_params.delete :character_attacks
    character_params.delete :character_features
    character_params.delete :character_feature_resources
    character_params.delete :character_items

    character_params
  end

  def update_character_request
    params.require(:character).permit(
      :ac,
      :acrobaticsProf,
      :age,
      :alignment,
      :animalHandlingProf,
      :arcanaProf,
      :athleticsProf,
      :armorProficiencies,
      :background,
      :backstory,
      :bonds,
      :characterClass,
      :characterClassHitDice,
      :characterClassLevel,
      :characterSubClass,
      :charismaProf,
      :charismaScore,
      :conditionImmunities,
      :conditionResistances,
      :conditionVulnerabilities,
      :constitutionProf,
      :constitutionScore,
      :copperPieces,
      :damageImmunities,
      :damageResistances,
      :damageVulnerabilities,
      :deceptionProf,
      :dexterityProf,
      :dexterityScore,
      :electrumPieces,
      :eyes,
      :flaws,
      :goldPieces,
      :hair,
      :height,
      :historyProf,
      :hp,
      :ideals,
      :initiative,
      :insightProf,
      :intelligenceProf,
      :intelligenceScore,
      :intimidationProf,
      :investigationProf,
      :jackOfAllTrades,
      :languages,
      :medicineProf,
      :multiclassClass,
      :multiclassClassHitDice,
      :multiclassClassLevel,
      :multiclassSubClass,
      :name,
      :natureProf,
      :passivePerception,
      :perceptionProf,
      :performanceProf,
      :personalityTraits,
      :persuasionProf,
      :platinumPieces,
      :proficiencyBonus,
      :race,
      :religionProf,
      :senses,
      :silverPieces,
      :skin,
      :sleightOfHandProf,
      :speed,
      :spellcastingAbility,
      :stealthProf,
      :strengthProf,
      :strengthScore,
      :subRace,
      :survivalProf,
      :toolProficiencies,
      :weaponProficiencies,
      :weight,
      :wisdomProf,
      :wisdomScore,
      :_destroy,
      characterAttacks: %i[_destroy attackBonus critRange damageDiceRoll damageTwoDiceRoll damageTwoType
                           damageType description id isSavingThrow name range savingThrowDescription
                           savingThrowThreshold savingThrowType],
      characterFeatures: %i[_destroy name id source description],
      characterFeatureResources: %i[_destroy name id total],
      characterItems: %i[_destroy name id total],
      creatureIds: [],
      magicItemIds: [],
      spellIds: []
    )
  end

  def character_response_model(character)
    mapper = DataMappers::Responses::CharacterDataMapper.new
    mapper.run character
  end

  def characters_response_model(characters)
    characters.map do |character|
      character_response_model character
    end
  end
end
