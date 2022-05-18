# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_05_18_062429) do
  create_table "active_storage_attachments", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum"
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "character_attacks", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "character_id"
    t.integer "attack_bonus"
    t.integer "crit_range"
    t.string "damage_dice_roll"
    t.string "damage_two_dice_roll"
    t.string "damage_two_type"
    t.string "damage_type"
    t.text "description"
    t.boolean "is_saving_throw"
    t.string "name"
    t.string "range"
    t.text "saving_throw_description"
    t.integer "saving_throw_threshold"
    t.string "saving_throw_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["character_id"], name: "index_character_attacks_on_character_id"
  end

  create_table "character_feature_resources", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "character_id"
    t.string "name"
    t.integer "total"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["character_id"], name: "index_character_feature_resources_on_character_id"
  end

  create_table "character_features", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "character_id"
    t.text "description"
    t.string "feature_type"
    t.string "name"
    t.string "source"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["character_id"], name: "index_character_features_on_character_id"
  end

  create_table "character_items", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "character_id"
    t.text "description"
    t.string "name"
    t.integer "total"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["character_id"], name: "index_character_items_on_character_id"
  end

  create_table "characters", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.integer "ac"
    t.integer "acrobatics_mod"
    t.string "acrobatics_prof"
    t.integer "age"
    t.string "alignment"
    t.integer "animal_handling_mod"
    t.string "animal_handling_prof"
    t.integer "arcana_mod"
    t.string "arcana_prof"
    t.integer "athletics_mod"
    t.string "athletics_prof"
    t.text "armor_proficiencies"
    t.text "background"
    t.text "bonds"
    t.string "character_class"
    t.integer "character_class_hit_dice"
    t.integer "character_class_level"
    t.string "character_sub_class"
    t.integer "charisma_mod"
    t.string "charisma_prof"
    t.integer "charisma_save"
    t.integer "charisma_score"
    t.text "condition_immunities"
    t.text "condition_resistances"
    t.text "condition_vulnerabilities"
    t.integer "constitution_mod"
    t.string "constitution_prof"
    t.integer "constitution_save"
    t.integer "constitution_score"
    t.integer "copper_pieces"
    t.text "damage_immunities"
    t.text "damage_resistances"
    t.text "damage_vulnerabilities"
    t.integer "deception_mod"
    t.string "deception_prof"
    t.integer "dexterity_mod"
    t.string "dexterity_prof"
    t.integer "dexterity_save"
    t.integer "dexterity_score"
    t.integer "electrum_pieces"
    t.string "eyes"
    t.text "flaws"
    t.integer "gold_pieces"
    t.string "hair"
    t.string "height"
    t.integer "history_mod"
    t.string "history_prof"
    t.integer "insight_mod"
    t.integer "hp"
    t.text "ideals"
    t.integer "initiative"
    t.string "insight_prof"
    t.integer "intelligence_mod"
    t.string "intelligence_prof"
    t.integer "intelligence_save"
    t.integer "intelligence_score"
    t.integer "intimidation_mod"
    t.string "intimidation_prof"
    t.integer "investigation_mod"
    t.string "investigation_prof"
    t.string "languages"
    t.integer "medicine_mod"
    t.string "medicine_prof"
    t.string "multiclass_class"
    t.integer "multiclass_class_hit_dice"
    t.integer "multiclass_class_level"
    t.string "multiclass_sub_class"
    t.integer "passive_perception"
    t.integer "proficiency_bonus"
    t.string "name"
    t.integer "nature_mod"
    t.string "nature_prof"
    t.integer "perception_mod"
    t.string "perception_prof"
    t.integer "performance_mod"
    t.string "performance_prof"
    t.text "personality_traits"
    t.integer "persuasion_mod"
    t.string "persuasion_prof"
    t.integer "platinum_pieces"
    t.string "race"
    t.integer "religion_mod"
    t.string "religion_prof"
    t.text "senses"
    t.integer "silver_pieces"
    t.string "skin"
    t.integer "sleight_of_hand_mod"
    t.string "sleight_of_hand_prof"
    t.integer "spell_slots_eighth"
    t.integer "spell_slots_fifth"
    t.integer "spell_slots_first"
    t.integer "spell_slots_fourth"
    t.integer "spell_slots_ninth"
    t.integer "spell_slots_second"
    t.integer "spell_slots_seventh"
    t.integer "spell_slots_sixth"
    t.integer "spell_slots_third"
    t.string "spellcasting_ability"
    t.integer "spellcasting_modifier"
    t.integer "spellcasting_save_dc"
    t.integer "stealth_mod"
    t.string "stealth_prof"
    t.integer "strength_mod"
    t.string "strength_prof"
    t.integer "strength_save"
    t.integer "strength_score"
    t.integer "speed"
    t.string "sub_race"
    t.integer "survival_mod"
    t.string "survival_prof"
    t.text "tool_proficiencies"
    t.text "weapon_proficiencies"
    t.string "weight"
    t.integer "wisdom_mod"
    t.string "wisdom_prof"
    t.integer "wisdom_save"
    t.integer "wisdom_score"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "backstory"
  end

  create_table "characters_creatures", id: false, charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "character_id", null: false
    t.bigint "creature_id", null: false
    t.index ["character_id"], name: "index_characters_creatures_on_character_id"
    t.index ["creature_id"], name: "index_characters_creatures_on_creature_id"
  end

  create_table "characters_factions", id: false, charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "character_id", null: false
    t.bigint "faction_id", null: false
    t.index ["character_id"], name: "index_characters_factions_on_character_id"
    t.index ["faction_id"], name: "index_characters_factions_on_faction_id"
  end

  create_table "characters_magic_items", id: false, charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "character_id", null: false
    t.bigint "magic_item_id", null: false
    t.index ["character_id"], name: "index_characters_magic_items_on_character_id"
    t.index ["magic_item_id"], name: "index_characters_magic_items_on_magic_item_id"
  end

  create_table "characters_spells", id: false, charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "character_id", null: false
    t.bigint "spell_id", null: false
    t.index ["character_id"], name: "index_characters_spells_on_character_id"
    t.index ["spell_id"], name: "index_characters_spells_on_spell_id"
  end

  create_table "creature_actions", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "creature_id"
    t.text "description"
    t.string "action_type"
    t.string "action_combat_type"
    t.integer "attack_bonus"
    t.string "damage_dice_roll"
    t.string "damage_two_dice_roll"
    t.string "damage_two_type"
    t.string "damage_type"
    t.string "name"
    t.string "range"
    t.integer "saving_throw_dc"
    t.string "saving_throw_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["creature_id"], name: "index_creature_actions_on_creature_id"
  end

  create_table "creature_features", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "creature_id"
    t.text "description"
    t.string "feature_type"
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["creature_id"], name: "index_creature_features_on_creature_id"
  end

  create_table "creature_lair_actions", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "creature_id"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["creature_id"], name: "index_creature_lair_actions_on_creature_id"
  end

  create_table "creature_legendary_actions", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "creature_id"
    t.text "description"
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["creature_id"], name: "index_creature_legendary_actions_on_creature_id"
  end

  create_table "creature_regional_effects", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "creature_id"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["creature_id"], name: "index_creature_regional_effects_on_creature_id"
  end

  create_table "creatures", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.integer "ac"
    t.string "alignment"
    t.string "armor"
    t.text "bonds"
    t.integer "charisma_mod"
    t.integer "charisma_save"
    t.integer "charisma_score"
    t.text "condition_immunities"
    t.text "condition_resistances"
    t.text "condition_vulnerabilities"
    t.integer "constitution_mod"
    t.integer "constitution_save"
    t.integer "constitution_score"
    t.float "cr"
    t.string "creature_category"
    t.string "creature_type"
    t.text "damage_immunities"
    t.text "damage_resistances"
    t.text "damage_vulnerabilities"
    t.text "description"
    t.integer "dexterity_mod"
    t.integer "dexterity_save"
    t.integer "dexterity_score"
    t.text "flaws"
    t.integer "hp"
    t.text "ideals"
    t.integer "intelligence_mod"
    t.integer "intelligence_save"
    t.integer "intelligence_score"
    t.string "languages"
    t.text "lair_actions_text"
    t.text "legendary_actions_text"
    t.string "name"
    t.text "personality_traits"
    t.text "regional_effects_text"
    t.text "senses"
    t.string "size"
    t.text "skills"
    t.string "speed"
    t.integer "spell_slots_first"
    t.integer "spell_slots_second"
    t.integer "spell_slots_third"
    t.integer "spell_slots_fourth"
    t.integer "spell_slots_fifth"
    t.integer "spell_slots_sixth"
    t.integer "spell_slots_seventh"
    t.integer "spell_slots_eighth"
    t.integer "spell_slots_ninth"
    t.integer "spellcasting_ability"
    t.integer "spellcasting_level"
    t.integer "spellcasting_modifier"
    t.integer "spellcasting_save_dc"
    t.integer "strength_mod"
    t.integer "strength_save"
    t.integer "strength_score"
    t.integer "wisdom_mod"
    t.integer "wisdom_save"
    t.integer "wisdom_score"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "backstory"
  end

  create_table "creatures_factions", id: false, charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "creature_id", null: false
    t.bigint "faction_id", null: false
    t.index ["creature_id"], name: "index_creatures_factions_on_creature_id"
    t.index ["faction_id"], name: "index_creatures_factions_on_faction_id"
  end

  create_table "creatures_magic_items", id: false, charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "creature_id", null: false
    t.bigint "magic_item_id", null: false
    t.index ["creature_id"], name: "index_creatures_magic_items_on_creature_id"
    t.index ["magic_item_id"], name: "index_creatures_magic_items_on_magic_item_id"
  end

  create_table "creatures_spells", id: false, charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "creature_id", null: false
    t.bigint "spell_id", null: false
    t.index ["creature_id"], name: "index_creatures_spells_on_creature_id"
    t.index ["spell_id"], name: "index_creatures_spells_on_spell_id"
  end

  create_table "factions", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "alignment"
    t.text "allies"
    t.text "description"
    t.text "goals"
    t.text "ideals"
    t.string "name"
    t.text "rivals"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "magic_items", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.boolean "attunement"
    t.string "category"
    t.text "description"
    t.string "rarity"
    t.string "sub_category"
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "spells", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "character_id"
    t.bigint "creature_id"
    t.string "casting_time"
    t.string "components"
    t.boolean "concentration"
    t.text "description"
    t.text "description_higher_levels"
    t.string "duration"
    t.integer "level"
    t.boolean "material_components"
    t.string "name"
    t.string "range"
    t.string "school"
    t.boolean "somatic_components"
    t.string "target"
    t.boolean "verbal_components"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["character_id"], name: "index_spells_on_character_id"
    t.index ["creature_id"], name: "index_spells_on_creature_id"
  end

  create_table "users", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "username", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "role"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "character_attacks", "characters"
  add_foreign_key "character_feature_resources", "characters"
  add_foreign_key "character_features", "characters"
  add_foreign_key "character_items", "characters"
  add_foreign_key "creature_actions", "creatures"
  add_foreign_key "creature_features", "creatures"
  add_foreign_key "creature_lair_actions", "creatures"
  add_foreign_key "creature_legendary_actions", "creatures"
  add_foreign_key "creature_regional_effects", "creatures"
  add_foreign_key "spells", "characters"
  add_foreign_key "spells", "creatures"
end
